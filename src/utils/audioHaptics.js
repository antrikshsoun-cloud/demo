/**
 * Procedural Web Audio Haptics Engine (0 KB download)
 * Synthesizes tactile mechanical feedback, clicks, slider purrs, and chimes natively.
 */

let audioCtx = null;
let isMuted = false;
const listeners = new Set();

// Safely get or create AudioContext on first user interaction
function getAudioContext() {
  if (isMuted) return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function toggleAudioMute() {
  isMuted = !isMuted;
  listeners.forEach((fn) => fn(isMuted));
  return isMuted;
}

export function getAudioMuted() {
  return isMuted;
}

export function subscribeAudioMute(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/**
 * Tactile Mechanical Relay Click
 * Used for tab switches, flips, and navigation toggles.
 */
export function playRelayClick() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // Transient click 1: High frequency micro-snap
  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();
  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(1800, now);
  osc1.frequency.exponentialRampToValueAtTime(180, now + 0.035);

  gain1.gain.setValueAtTime(0.08, now);
  gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

  osc1.connect(gain1);
  gain1.connect(ctx.destination);

  osc1.start(now);
  osc1.stop(now + 0.04);

  // Transient click 2: Low mechanical body thud (15ms delay)
  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.type = 'triangle';
  osc2.frequency.setValueAtTime(320, now + 0.012);
  osc2.frequency.exponentialRampToValueAtTime(60, now + 0.05);

  gain2.gain.setValueAtTime(0.06, now + 0.012);
  gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

  osc2.connect(gain2);
  gain2.connect(ctx.destination);

  osc2.start(now + 0.012);
  osc2.stop(now + 0.055);
}

/**
 * Tactile Slider Micro-Purr
 * Pitch-shifted frequency pulse when dragging payout/contract sliders.
 */
export function playSliderPurr(pitchFactor = 0.5) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  // Pitch scales from 260Hz to 680Hz
  const freq = 260 + Math.max(0, Math.min(1, pitchFactor)) * 420;
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, now);

  gain.gain.setValueAtTime(0.035, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.03);
}

/**
 * Institutional Biometric Authorization Chime
 * Harmonic gold chime when engaging primary CTAs or unlocking capital.
 */
export function playAuthSuccess() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const chords = [523.25, 659.25, 783.99, 1046.5]; // C Major luxury chord

  chords.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + idx * 0.04);

    const start = now + idx * 0.04;
    gain.gain.setValueAtTime(0.045, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.45);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(start);
    osc.stop(start + 0.5);
  });
}
