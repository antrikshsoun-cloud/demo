import React, { useEffect, useRef, useCallback } from 'react';

const TOTAL_FRAMES = 624;
const FRAME_BASE_URL = '/sequence/frame_';

const getFrameUrl = (index) => {
  const padded = String(index).padStart(4, '0');
  return `${FRAME_BASE_URL}${padded}.webp`;
};

export default function GlobalFixedCanvas() {
  const canvasRef = useRef(null);
  const imagesRef = useRef(new Map());
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const animationFrameIdRef = useRef(null);

  // 1. High-Density Progressive Image Preloader
  useEffect(() => {
    let isCancelled = false;
    const images = imagesRef.current;

    const loadSingleFrame = (frameNum) => {
      return new Promise((resolve) => {
        if (images.has(frameNum)) {
          resolve(images.get(frameNum));
          return;
        }
        const img = new Image();
        img.src = getFrameUrl(frameNum);
        img.onload = () => {
          if (!isCancelled) images.set(frameNum, img);
          resolve(img);
        };
        img.onerror = () => resolve(null);
      });
    };

    // Priority 1: High-density keyframes (every 2nd frame + full transition cluster 290 to 335)
    const priorityFrames = new Set();
    for (let i = 1; i <= TOTAL_FRAMES; i += 2) priorityFrames.add(i);
    for (let i = 290; i <= 335; i++) priorityFrames.add(i);
    priorityFrames.add(1);
    priorityFrames.add(TOTAL_FRAMES);

    Promise.all(Array.from(priorityFrames).map(loadSingleFrame)).then(() => {
      if (isCancelled) return;
      renderAtProgress(0);

      // Priority 2: Stream any remaining intermediate frames in rapid batches
      const remaining = [];
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        if (!priorityFrames.has(i)) remaining.push(i);
      }

      const streamChunk = (idx) => {
        if (isCancelled || idx >= remaining.length) return;
        const chunk = remaining.slice(idx, idx + 32);
        Promise.all(chunk.map(loadSingleFrame)).then(() => {
          if (!isCancelled) {
            setTimeout(() => streamChunk(idx + 32), 10);
          }
        });
      };
      streamChunk(0);
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  // 2. High-Clarity, Color-Enhanced Canvas Renderer with Smooth Hermite Crossfade
  const renderAtProgress = useCallback((progress) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Color & Clarity Enhancement: Boost contrast, saturation and subtle vibrancy
    ctx.filter = 'none';

    const viewportW = canvas.width;
    const viewportH = canvas.height;

    // Solid base wipe
    ctx.fillStyle = '#050A12';
    ctx.fillRect(0, 0, viewportW, viewportH);

    const images = imagesRef.current;
    const clampedProg = Math.max(0, Math.min(1, progress));
    const floatFrame = 1 + clampedProg * (TOTAL_FRAMES - 1);
    const frameA = Math.floor(floatFrame);
    const frameB = Math.min(TOTAL_FRAMES, frameA + 1);
    const rawAlpha = floatFrame - frameA;

    // Optical Hermite Smoothstep for silky subframe transition
    const smoothAlpha = rawAlpha * rawAlpha * (3 - 2 * rawAlpha);

    // Nearest loaded fallback with adaptive lookaround
    let imgA = images.get(frameA);
    if (!imgA || !imgA.complete || imgA.naturalWidth === 0) {
      for (let delta = 1; delta <= 32; delta++) {
        if (images.has(frameA - delta)) {
          imgA = images.get(frameA - delta);
          break;
        }
        if (images.has(frameA + delta)) {
          imgA = images.get(frameA + delta);
          break;
        }
      }
    }

    if (!imgA || !imgA.complete || imgA.naturalWidth === 0) return;

    // High-Precision Cover Aspect Ratio calculations
    const imgAspect = 1920 / 1080;
    const screenAspect = viewportW / viewportH;
    let drawW, drawH, drawX, drawY;

    if (screenAspect > imgAspect) {
      drawW = viewportW;
      drawH = viewportW / imgAspect;
      drawX = 0;
      drawY = (viewportH - drawH) / 2;
    } else {
      drawH = viewportH;
      drawW = viewportH * imgAspect;
      drawX = (viewportW - drawW) / 2;
      drawY = 0;
    }

    // Base frame render
    ctx.globalAlpha = 1.0;
    ctx.drawImage(imgA, drawX, drawY, drawW, drawH);

    // Smooth dual-frame cross-dissolve
    const imgB = images.get(frameB);
    if (imgB && imgB.complete && imgB.naturalWidth > 0 && smoothAlpha > 0.01) {
      ctx.globalAlpha = smoothAlpha;
      ctx.drawImage(imgB, drawX, drawY, drawW, drawH);
      ctx.globalAlpha = 1.0;
    }
  }, []);

  // 3. Retina HiDPI Canvas Resizing with Crisp Pixel Ratio
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(Math.max(window.devicePixelRatio || 1, 1.5), 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      renderAtProgress(currentProgressRef.current);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [renderAtProgress]);

  // 4. Silky Damped Momentum Physics Scrubbing Loop
  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const totalScrollable = doc.scrollHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const rawProgress = Math.max(0, Math.min(1, window.scrollY / totalScrollable));
      targetProgressRef.current = rawProgress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    let lastProg = -1;
    const physicsLoop = () => {
      const delta = targetProgressRef.current - currentProgressRef.current;
      // Damped smooth lerp coefficient
      currentProgressRef.current += delta * 0.095;

      const p = currentProgressRef.current;

      if (Math.abs(p - lastProg) > 0.00012) {
        lastProg = p;
        renderAtProgress(p);
      }

      animationFrameIdRef.current = requestAnimationFrame(physicsLoop);
    };

    animationFrameIdRef.current = requestAnimationFrame(physicsLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [renderAtProgress]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        backgroundColor: '#050A12',
      }}
    >
      {/* Pinned 3D canvas with enhanced colors & clarity */}
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100vw',
          height: '100vh',
          filter: 'contrast(1.08) saturate(1.22) brightness(1.04)',
          willChange: 'contents',
        }}
      />
    </div>
  );
}
