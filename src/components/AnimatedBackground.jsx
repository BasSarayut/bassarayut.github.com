import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    const ctx = canvas.getContext('2d');
    let animId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const count = Math.min(34, Math.max(16, Math.floor(width / 55)));
    const particles = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: -0.15 - Math.random() * 0.35,
      size: i % 5 === 0 ? 7 + Math.random() * 6 : 2 + Math.random() * 3,
      kind: i % 5 === 0 ? 'rhombus' : i % 3 === 0 ? 'cross' : 'dot',
      alpha: 0.16 + Math.random() * 0.32,
      accent: i % 4 === 0,
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.008,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const baseColor = isDark ? '240, 240, 236' : '20, 22, 26';
      const accentColor = isDark ? '255, 230, 0' : '215, 145, 0';

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;

        if (p.y < -20) p.y = height + 20;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);

        const rgb = p.accent ? accentColor : baseColor;
        ctx.strokeStyle = `rgba(${rgb}, ${p.alpha})`;
        ctx.fillStyle = `rgba(${rgb}, ${p.alpha})`;
        ctx.lineWidth = 1;

        if (p.kind === 'rhombus') {
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.lineTo(p.size * 0.65, 0);
          ctx.lineTo(0, p.size);
          ctx.lineTo(-p.size * 0.65, 0);
          ctx.closePath();
          ctx.stroke();
        } else if (p.kind === 'cross') {
          ctx.beginPath();
          ctx.moveTo(-p.size, 0);
          ctx.lineTo(p.size, 0);
          ctx.moveTo(0, -p.size);
          ctx.lineTo(0, p.size);
          ctx.stroke();
        } else {
          ctx.fillRect(-p.size * 0.5, -p.size * 0.5, p.size, p.size);
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="endfield-ambient" aria-hidden="true">
      <svg className="endfield-topo" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M-120,180 C240,90 420,310 780,220 C1140,130 1290,340 1600,240" />
          <path d="M-100,260 C260,150 460,390 820,290 C1180,190 1310,410 1620,310" />
          <path d="M-80,340 C280,220 510,470 860,360 C1210,250 1340,480 1640,380" />
          <path d="M-140,610 C190,510 520,730 910,610 C1220,510 1380,690 1620,620" />
          <path d="M-140,690 C220,590 560,810 950,690 C1260,590 1410,760 1650,690" />
        </g>
      </svg>
      <div className="endfield-radar">
        <div className="endfield-radar-ring endfield-radar-ring--outer" />
        <div className="endfield-radar-ring endfield-radar-ring--inner" />
        <div className="endfield-radar-sweep" />
      </div>
      <canvas ref={canvasRef} className="endfield-particles" />
      <div className="endfield-scanline" />
    </div>
  );
}
