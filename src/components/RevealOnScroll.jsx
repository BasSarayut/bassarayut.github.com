import { useEffect, useRef, useState } from 'react';

const CIPHER_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789//[]+#*=-_';

export function ScrambleText({ text, className = '', scrambleOnMount = true, scrambleOnHover = true }) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);

  const triggerScramble = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(text);
      return;
    }
    cancelAnimationFrame(frameRef.current);
    let iteration = 0;
    const total = text.length;
    const step = () => {
      const next = text
        .split('')
        .map((char, idx) => {
          if (char === ' ') return ' ';
          if (idx < iteration) return text[idx];
          return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
        })
        .join('');
      setDisplay(next);
      iteration += Math.max(0.45, total / 18);
      if (iteration < total) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(text);
      }
    };
    frameRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    if (scrambleOnMount) {
      triggerScramble();
    }
    return () => cancelAnimationFrame(frameRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span
      className={`scramble-text ${className}`.trim()}
      onMouseEnter={scrambleOnHover ? triggerScramble : undefined}
    >
      {display}
    </span>
  );
}

export function TiltSlab({ children, className = '', intensity = 6 }) {
  const ref = useRef(null);

  const handleMove = event => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--rx', `${(-y * intensity).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(x * intensity).toFixed(2)}deg`);
    el.style.setProperty('--gx', `${((x + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty('--gy', `${((y + 0.5) * 100).toFixed(1)}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={ref}
      className={`tilt-slab ${className}`.trim()}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}

export function TelemetryBar({ label = 'SYNC', value = 92, code = 'SYS//OK' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="telemetry-bar" aria-hidden="true">
      <div className="telemetry-bar-meta">
        <span>{label}</span>
        <span>{code} // {value}%</span>
      </div>
      <div className="telemetry-bar-track">
        <div
          className="telemetry-bar-fill"
          style={{ width: visible ? `${value}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function RevealOnScroll({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return undefined;
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <div
      ref={ref}
      className={`hud-reveal ${revealed ? 'is-revealed' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
