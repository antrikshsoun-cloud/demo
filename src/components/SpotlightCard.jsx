import React, { useRef, useState, useCallback } from 'react';

export default function SpotlightCard({
  children,
  className = '',
  style = {},
  spotlightColor = 'rgba(201, 164, 94, 0.22)',
  borderGlowColor = 'rgba(243, 202, 101, 0.65)',
  ...props
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });

    // 3D Gyroscope Tilt calculation
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;
    setTilt({
      x: -normY * 9.5, // Subtle, luxurious tilt limit (degrees)
      y: normX * 9.5,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setOpacity(1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
    setTilt({ x: 0, y: 0 });
  }, []);

  // Calculate dynamic angle for chromatic prism border refraction
  const prismAngle = Math.atan2(position.y - 200, position.x - 150) * (180 / Math.PI);

  return (
    <div
      style={{
        perspective: '1200px',
        height: '100%',
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative overflow-hidden ${className}`}
        style={{
          position: 'relative',
          borderRadius: '22px',
          background: 'linear-gradient(145deg, rgba(13, 23, 38, 0.85) 0%, rgba(5, 11, 18, 0.9) 100%)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(201, 164, 94, 0.25)',
          boxShadow: opacity > 0
            ? '0 30px 60px -15px rgba(0, 0, 0, 0.85), 0 0 35px rgba(201, 164, 94, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.15)'
            : '0 20px 40px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${opacity > 0 ? 1.018 : 1}, ${opacity > 0 ? 1.018 : 1}, 1)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease',
          willChange: 'transform',
          ...style,
        }}
        {...props}
      >
        {/* 1. Dynamic Cursor-Tracking Radial Spotlight */}
        <div
          aria-hidden="true"
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            opacity,
            transition: 'opacity 0.3s ease',
            background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
            zIndex: 1,
          }}
        />

        {/* 2. Prismatic Chromatic Edge Caustics (Rainbow dispersion on borders) */}
        <div
          aria-hidden="true"
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            inset: '-1px',
            borderRadius: 'inherit',
            opacity: opacity * 0.75,
            transition: 'opacity 0.35s ease',
            background: `conic-gradient(from ${prismAngle}deg at ${position.x}px ${position.y}px, rgba(255,70,0,0.35), rgba(255,200,0,0.45), rgba(0,255,140,0.35), rgba(0,190,255,0.45), rgba(180,60,255,0.35), rgba(255,70,0,0.35))`,
            zIndex: 2,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '1.5px',
          }}
        />

        {/* 3. Concentrated Gold Border Beam (Following cursor position) */}
        <div
          aria-hidden="true"
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            inset: '-1px',
            borderRadius: 'inherit',
            opacity,
            transition: 'opacity 0.3s ease',
            background: `radial-gradient(240px circle at ${position.x}px ${position.y}px, ${borderGlowColor}, transparent 65%)`,
            zIndex: 3,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '1.2px',
          }}
        />

        {/* 4. Sapphire Glass Specular Sheen (Sweeping light glint) */}
        <div
          aria-hidden="true"
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            opacity: opacity * 0.65,
            transition: 'opacity 0.4s ease',
            background: 'linear-gradient(125deg, transparent 35%, rgba(255, 255, 255, 0.08) 48%, rgba(243, 202, 101, 0.14) 52%, transparent 65%)',
            zIndex: 4,
          }}
        />

        {/* Card Content with 3D Depth Pop */}
        <div
          style={{
            position: 'relative',
            zIndex: 5,
            height: '100%',
            transform: 'translateZ(12px)',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
