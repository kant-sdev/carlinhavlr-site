import { useEffect, useRef } from 'react';

type Track = { x: number; y: number; angle: number; opacity: number; born: number; foot: number; color: string };

export default function PenguinTracks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const themeColors = window.getComputedStyle(document.documentElement);
    const iceColor = themeColors.getPropertyValue('--color-accent').trim();
    const orangeColor = themeColors.getPropertyValue('--color-primary').trim();
    let frame = 0;
    let last = 0;
    let width = 0;
    let height = 0;
    let nextTrail = 0;
    let activeTrail = 0;
    let running = false;
    const tracks: Track[] = [];
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = Math.floor(width * dpr); canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const drawPrint = (t: Track) => {
      ctx.save();
      ctx.translate(t.x, t.y); ctx.rotate(t.angle);
      ctx.globalAlpha = t.opacity;
      ctx.fillStyle = t.color;
      ctx.beginPath();
      ctx.ellipse(0, 2, 4.2, 6, 0, 0, Math.PI * 2);
      ctx.ellipse(-4.2, -5, 1.8, 3, -.7, 0, Math.PI * 2);
      ctx.ellipse(0, -6.3, 1.8, 3.3, 0, 0, Math.PI * 2);
      ctx.ellipse(4.2, -5, 1.8, 3, .7, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };
    const animate = (time: number) => {
      if (document.hidden) { running = false; return; }
      const dt = Math.min(time - (last || time), 34); last = time;
      if (time > nextTrail && tracks.length < 88) {
        activeTrail = (activeTrail + 1) % 4;
        const side = activeTrail % 2 === 0;
        const x = side ? Math.random() * width * .25 : width * (.65 + Math.random() * .3);
        const y = Math.random() * height;
        const angle = [-.72, -.28, .42, .78][activeTrail];
        const count = 8 + Math.floor(Math.random() * 6);
        for (let i = 0; i < count && tracks.length < 88; i++) {
          const sideStep = i % 2 ? 5 : -5;
          tracks.push({ x: x + Math.sin(angle) * i * 19 + sideStep * Math.cos(angle), y: y + Math.cos(angle) * i * 19 - sideStep * Math.sin(angle),
            angle: angle + (i % 2 ? .15 : -.12), opacity: .12, born: time + i * 170, foot: i % 2,
            color: Math.random() > .96 ? orangeColor : iceColor });
        }
        nextTrail = time + 2600 + Math.random() * 2700;
      }
      ctx.clearRect(0, 0, width, height);
      for (let i = tracks.length - 1; i >= 0; i--) {
        const track = tracks[i];
        const age = time - track.born;
        if (age < 0) continue;
        track.opacity = Math.min(.18, age / 260 * .18) * Math.max(0, 1 - age / 7500);
        if (age > 7500) tracks.splice(i, 1);
        else drawPrint(track);
      }
      frame = requestAnimationFrame(animate);
      void dt;
    };
    const start = () => {
      if (!document.hidden && !running) {
        running = true;
        frame = requestAnimationFrame(animate);
      }
    };
    const onVisibility = () => {
      if (document.hidden) { cancelAnimationFrame(frame); running = false; }
      else start();
    };
    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    start();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);
  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 opacity-70" data-testid="canvas-penguin-tracks" />;
}
