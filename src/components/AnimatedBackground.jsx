import { useEffect, useRef, useState } from 'react';

function contourRng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const [bootKey, setBootKey] = useState(() => {
    if (typeof window === 'undefined') return 0;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 0;
    const seen = sessionStorage.getItem('endfield-boot-played');
    if (!seen) {
      sessionStorage.setItem('endfield-boot-played', '1');
      return 1;
    }
    return 0;
  });

  useEffect(() => {
    const onReplay = () => setBootKey(k => k + 1);
    window.addEventListener('endfield:replay-boot', onReplay);
    return () => window.removeEventListener('endfield:replay-boot', onReplay);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seed = 0x5eed4242;
    const STEP = 8;
    const SPAN = 1.45;
    let width = 0;
    let height = 0;
    let field = null;
    let paths = [];
    let phase = 0;
    let rafId = 0;
    let lastTick = 0;

    const trailPoints = [];
    const pruneTrail = now => {
      while (trailPoints.length && now - trailPoints[0].t > 2400) trailPoints.shift();
    };

    const handlePointerMove = e => {
      if (reducedMotion) return;
      const now = performance.now();
      pruneTrail(now);
      const last = trailPoints[trailPoints.length - 1];
      if (last && (now - last.t < 12 || (e.clientX - last.x) ** 2 + (e.clientY - last.y) ** 2 < 9)) return;
      if (trailPoints.length >= 20) trailPoints.shift();
      trailPoints.push({ x: e.clientX, y: e.clientY, t: now });
    };

    const buildField = (w, h) => {
      const cols = Math.ceil(w / STEP) + 1;
      const rows = Math.ceil(h / STEP) + 1;
      const shortSide = Math.min(w, h);
      const K = shortSide >= 640 ? 20 : Math.max(11, Math.round(11 + ((shortSide - 320) / 320) * 9));
      const levels = shortSide >= 640 ? 18 : Math.max(10, Math.round(10 + ((shortSide - 320) / 320) * 8));
      const rnd = contourRng(seed);

      const bx = new Float32Array(K);
      const by = new Float32Array(K);
      const ba = new Float32Array(K);
      const bs = new Float32Array(K);
      const dx = new Float32Array(K);
      const dy = new Float32Array(K);

      const gx = Math.max(1, Math.round(Math.sqrt(K * (w / Math.max(1, h)))));
      const gy = Math.max(1, Math.ceil(K / gx));
      const cells = [];
      for (let j = 0; j < gy; j++) for (let i = 0; i < gx; i++) cells.push(i + j * gx);
      for (let i = cells.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        const tmp = cells[i];
        cells[i] = cells[j];
        cells[j] = tmp;
      }

      for (let k = 0; k < K; k++) {
        const cell = cells[k % cells.length];
        const ci = cell % gx;
        const cj = Math.floor(cell / gx);
        bx[k] = -0.1 * w + ((ci + rnd()) / gx) * (1.2 * w);
        by[k] = -0.1 * h + ((cj + rnd()) / gy) * (1.2 * h);
        ba[k] = (rnd() < 0.5 ? -1 : 1) * (0.65 + rnd() * 0.85);
        bs[k] = Math.max(STEP * 4, (0.055 + rnd() * 0.09) * shortSide);
        dx[k] = rnd() * 2 - 1;
        dy[k] = rnd() * 2 - 1;
      }

      const W2 = new Float32Array(9);
      for (let i = 0; i < 3; i++) {
        W2[i * 3] = ((0.35 + rnd() * 0.5) * (Math.PI * 2)) / Math.max(1, w);
        W2[i * 3 + 1] = ((0.35 + rnd() * 0.5) * (Math.PI * 2)) / Math.max(1, h);
        W2[i * 3 + 2] = rnd() * Math.PI * 2;
      }

      const hCount = (cols - 1) * rows;
      const eCount = hCount + cols * (rows - 1);
      return {
        w,
        h,
        cols,
        rows,
        K,
        levels,
        bx,
        by,
        ba,
        bs,
        dx,
        dy,
        W2,
        hCount,
        F: new Float32Array(cols * rows),
        prev: new Float32Array(cols * rows),
        hasPrev: false,
        smooth: new Float32Array(cols * rows),
        ex: new Float32Array(eCount),
        ey: new Float32Array(eCount),
        es: new Int32Array(eCount).fill(-1),
        n1: new Int32Array(eCount).fill(-1),
        n2: new Int32Array(eCount).fill(-1),
        seen: new Int32Array(eCount).fill(-1),
        touched: new Int32Array(eCount),
        seq: 0,
      };
    };

    const evaluateField = (f, ph, now) => {
      const { cols, rows, K, bx, by, ba, bs, dx, dy, F, W2, smooth } = f;
      const BASE = 0.62;
      for (let i = 0; i < 3; i++) {
        const fx = W2[i * 3];
        const fy = W2[i * 3 + 1];
        const wph = W2[i * 3 + 2] + ph * 0.11;
        const amp = BASE / 3;
        for (let j = 0; j < rows; j++) {
          const yb = fy * (j * STEP) + wph;
          const sy = Math.sin(yb);
          const cy2 = Math.cos(yb);
          const row = j * cols;
          for (let c = 0; c < cols; c++) {
            const xb = fx * (c * STEP);
            const v = Math.sin(xb) * cy2 + Math.cos(xb) * sy;
            if (i === 0) F[row + c] = amp * v;
            else F[row + c] += amp * v;
          }
        }
      }

      for (let k = 0; k < K; k++) {
        const s = bs[k];
        const amp = s * 0.52;
        const cx = bx[k] + Math.sin(ph * dx[k] + k * 1.7) * amp;
        const cy = by[k] + Math.cos(ph * dy[k] + k * 2.3) * amp;
        const a = ba[k];
        const inv = 1 / (2 * s * s);
        const rad = 2.6 * s;
        const i0 = Math.max(0, Math.floor((cx - rad) / STEP));
        const i1 = Math.min(cols - 1, Math.ceil((cx + rad) / STEP));
        const j0 = Math.max(0, Math.floor((cy - rad) / STEP));
        const j1 = Math.min(rows - 1, Math.ceil((cy + rad) / STEP));
        for (let j = j0; j <= j1; j++) {
          const ddy = j * STEP - cy;
          const dy2 = ddy * ddy;
          const row = j * cols;
          for (let i = i0; i <= i1; i++) {
            const ddx = i * STEP - cx;
            const q = (ddx * ddx + dy2) * inv;
            if (q < 6.76) {
              let weight = Math.exp(-q);
              if (q > 4.8) {
                const t = (q - 4.8) / (6.76 - 4.8);
                weight *= 1 - t * t * (3 - 2 * t);
              }
              F[row + i] += a * weight;
            }
          }
        }
      }

      for (let pass = 0; pass < 3; pass++) {
        for (let j = 0; j < rows; j++) {
          const row = j * cols;
          for (let i = 0; i < cols; i++) {
            smooth[row + i] =
              (F[row + Math.max(0, i - 1)] + 2 * F[row + i] + F[row + Math.min(cols - 1, i + 1)]) * 0.25;
          }
        }
        for (let j = 0; j < rows; j++) {
          const row = j * cols;
          const up = Math.max(0, j - 1) * cols;
          const down = Math.min(rows - 1, j + 1) * cols;
          for (let i = 0; i < cols; i++) {
            F[row + i] = (smooth[up + i] + 2 * smooth[row + i] + smooth[down + i]) * 0.25;
          }
        }
      }

      if (f.hasPrev) {
        for (let i = 0; i < F.length; i++) {
          f.prev[i] = f.prev[i] * 0.65 + F[i] * 0.35;
          F[i] = f.prev[i];
        }
      } else {
        f.prev.set(F);
        f.hasPrev = true;
      }

      // Apply pointer trail local deformation
      pruneTrail(now);
      if (trailPoints.length) {
        const sigma = 32;
        const radius = sigma * 3.2;
        const inv = 1 / (2 * sigma * sigma);
        for (let rank = 0; rank < trailPoints.length; rank++) {
          const pt = trailPoints[trailPoints.length - 1 - rank];
          const age = now - pt.t;
          if (age < 0 || age > 2400) continue;
          const quota = rank === 0 ? 0.85 : 0.14 * Math.pow(0.8, rank - 1);
          const amplitude = quota * Math.exp(-age / 850);
          const i0 = Math.max(0, Math.floor((pt.x - radius) / STEP));
          const i1 = Math.min(cols - 1, Math.ceil((pt.x + radius) / STEP));
          const j0 = Math.max(0, Math.floor((pt.y - radius) / STEP));
          const j1 = Math.min(rows - 1, Math.ceil((pt.y + radius) / STEP));
          for (let j = j0; j <= j1; j++) {
            for (let i = i0; i <= i1; i++) {
              const q = ((i * STEP - pt.x) ** 2 + (j * STEP - pt.y) ** 2) * inv;
              if (q >= 6.76) continue;
              const t = Math.max(0, (q - 4.8) / (6.76 - 4.8));
              F[j * cols + i] += amplitude * Math.exp(-q) * (1 - t * t * (3 - 2 * t));
            }
          }
        }
      }
    };

    const extractLevel = (f, L, out) => {
      const { cols, rows, F, ex, ey, es, n1, n2, seen, touched, hCount } = f;
      const st = ++f.seq;
      let tn = 0;

      const pt = (id, i0, j0, i1, j1) => {
        if (es[id] === st) return id;
        const a = F[j0 * cols + i0];
        const b = F[j1 * cols + i1];
        let t = (L - a) / (b - a);
        if (!(t >= 0)) t = 0;
        else if (t > 1) t = 1;
        ex[id] = (i0 + (i1 - i0) * t) * STEP;
        ey[id] = (j0 + (j1 - j0) * t) * STEP;
        es[id] = st;
        n1[id] = -1;
        n2[id] = -1;
        touched[tn++] = id;
        return id;
      };

      const link = (a, b) => {
        if (n1[a] < 0) n1[a] = b;
        else if (n2[a] < 0) n2[a] = b;
        if (n1[b] < 0) n1[b] = a;
        else if (n2[b] < 0) n2[b] = a;
      };

      for (let j = 0; j < rows - 1; j++) {
        const row = j * cols;
        for (let i = 0; i < cols - 1; i++) {
          const p0 = row + i;
          const p1 = p0 + 1;
          const p3 = p0 + cols;
          const p2 = p3 + 1;
          const v0 = F[p0];
          const v1 = F[p1];
          const v2 = F[p2];
          const v3 = F[p3];
          const mn = Math.min(v0, v1, v2, v3);
          const mx = Math.max(v0, v1, v2, v3);
          if (L <= mn || L > mx) continue;
          const idx = (v0 > L ? 1 : 0) | (v1 > L ? 2 : 0) | (v2 > L ? 4 : 0) | (v3 > L ? 8 : 0);
          const T = () => pt(j * (cols - 1) + i, i, j, i + 1, j);
          const B = () => pt((j + 1) * (cols - 1) + i, i, j + 1, i + 1, j + 1);
          const Le = () => pt(hCount + j * cols + i, i, j, i, j + 1);
          const Ri = () => pt(hCount + j * cols + i + 1, i + 1, j, i + 1, j + 1);
          switch (idx) {
            case 1:
            case 14:
              link(T(), Le());
              break;
            case 2:
            case 13:
              link(T(), Ri());
              break;
            case 3:
            case 12:
              link(Le(), Ri());
              break;
            case 4:
            case 11:
              link(Ri(), B());
              break;
            case 6:
            case 9:
              link(T(), B());
              break;
            case 7:
            case 8:
              link(Le(), B());
              break;
            case 5: {
              const saddle = (v0 - L) * (v2 - L) - (v1 - L) * (v3 - L);
              if (saddle > 0) {
                link(T(), Ri());
                link(Le(), B());
              } else {
                link(T(), Le());
                link(Ri(), B());
              }
              break;
            }
            case 10: {
              const saddle = (v0 - L) * (v2 - L) - (v1 - L) * (v3 - L);
              if (saddle < 0) {
                link(T(), Le());
                link(Ri(), B());
              } else {
                link(T(), Ri());
                link(Le(), B());
              }
              break;
            }
            default:
              break;
          }
        }
      }

      const walk = start => {
        const path = [];
        let cur = start;
        let prev = -1;
        for (;;) {
          path.push(ex[cur], ey[cur]);
          seen[cur] = st;
          const a = n1[cur];
          const b = n2[cur];
          let nx = -1;
          if (a >= 0 && a !== prev && seen[a] !== st) nx = a;
          else if (b >= 0 && b !== prev && seen[b] !== st) nx = b;
          if (nx < 0) {
            if ((a === start || b === start) && path.length > 4) {
              path.push(ex[start], ey[start]);
            }
            break;
          }
          prev = cur;
          cur = nx;
        }
        return path;
      };

      for (let k = 0; k < tn; k++) {
        const id = touched[k];
        if (seen[id] !== st && n2[id] < 0) {
          const p = walk(id);
          if (p.length >= 10) out.push(p);
        }
      }
      for (let k = 0; k < tn; k++) {
        const id = touched[k];
        if (seen[id] !== st) {
          const p = walk(id);
          if (p.length >= 10) out.push(p);
        }
      }
    };

    const getStrokeColor = () => {
      const root = document.documentElement;
      const isDark = root.getAttribute('data-theme') === 'dark';
      const isWuling = root.getAttribute('data-palette') === 'wuling';
      if (isDark) {
        return isWuling ? '#14d0d045' : '#fff50033';
      }
      return isWuling ? '#14d0d07a' : '#beaf006b';
    };

    const drawLines = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = getStrokeColor();
      ctx.lineWidth = 1;
      ctx.lineJoin = 'round';
      ctx.beginPath();

      for (let idx = 0; idx < paths.length; idx++) {
        const p = paths[idx];
        const count = p.length / 2;
        if (count < 3) continue;
        ctx.moveTo(p[0], p[1]);
        for (let k = 1; k < count - 1; k++) {
          const x0 = p[k * 2];
          const y0 = p[k * 2 + 1];
          const x1 = p[(k + 1) * 2];
          const y1 = p[(k + 1) * 2 + 1];
          ctx.quadraticCurveTo(x0, y0, (x0 + x1) * 0.5, (y0 + y1) * 0.5);
        }
        ctx.lineTo(p[(count - 1) * 2], p[(count - 1) * 2 + 1]);
      }
      ctx.stroke();
    };

    const updateAndDraw = now => {
      if (!field) return;
      evaluateField(field, phase, now);
      paths = [];
      const stepL = (SPAN * 2) / field.levels;
      for (let n = 0; n <= field.levels; n++) {
        extractLevel(field, -SPAN + n * stepL, paths);
      }
      drawLines();
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      field = buildField(width, height);
      updateAndDraw(performance.now());
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const observer = new MutationObserver(() => {
      drawLines();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'data-palette'],
    });

    if (!reducedMotion) {
      const loop = now => {
        if (now - lastTick >= 42) {
          lastTick = now;
          phase += 2 / 150;
          updateAndDraw(now);
        }
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div data-endfield-contour="" aria-hidden="true">
        <canvas ref={canvasRef} />
      </div>
      <div data-endfield-watermark="" translate="no" lang="en" className="notranslate" aria-hidden="true" />
      <EndfieldSideRuler />
      {bootKey > 0 && <EndfieldBootPlate key={bootKey} onComplete={() => setBootKey(0)} />}
    </>
  );
}

const SIDE_SECTIONS = [
  { id: 'hero-sec', code: '01', label: 'OPERATOR' },
  { id: 'work', code: '02', label: 'WORK' },
  { id: 'lore-sec', code: '03', label: 'LORE' },
  { id: 'experience', code: '04', label: 'CHRONICLE' },
  { id: 'skills', code: '05', label: 'AIC' },
];

function EndfieldSideRuler() {
  const [scrollPct, setScrollPct] = useState(0);
  const [activeCode, setActiveCode] = useState('01');

  useEffect(() => {
    const updateScroll = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const pct = Math.min(100, Math.max(0, Math.round((window.scrollY / max) * 100)));
      setScrollPct(pct);

      let current = '01';
      for (const sec of SIDE_SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.42) {
            current = sec.code;
          }
        }
      }
      setActiveCode(current);
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  return (
    <aside className="endfield-side-ruler" aria-hidden="true">
      <div className="side-ruler-track">
        <div className="side-ruler-fill" style={{ height: `${scrollPct}%` }} />
      </div>
      <div className="side-ruler-nodes">
        {SIDE_SECTIONS.map(sec => (
          <a
            key={sec.code}
            href={`#${sec.id}`}
            tabIndex={-1}
            className={`side-ruler-node ${activeCode === sec.code ? 'is-active' : ''}`}
          >
            <span className="side-ruler-code">{sec.code}</span>
            <span className="side-ruler-label">{sec.label}</span>
          </a>
        ))}
      </div>
      <div className="side-ruler-readout">
        <span>/// {String(scrollPct).padStart(3, '0')}%</span>
      </div>
    </aside>
  );
}

function EndfieldBootPlate({ onComplete }) {
  const plateRef = useRef(null);
  const fillRef = useRef(null);
  const meterRef = useRef(null);
  const pctRef = useRef(null);
  const statusRef = useRef(null);
  const wipeRef = useRef(null);

  useEffect(() => {
    const el = plateRef.current;
    if (!el) return undefined;
    const DURATION = 1550;
    const WIPE_MS = 460;
    const EXIT_MS = 520;
    const start = performance.now();
    let raf = 0;
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      const t0 = performance.now();
      const plateW = el.clientWidth || window.innerWidth;
      const RAIL = 10;

      const flourish = now => {
        const elapsed = now - t0;
        const wt = Math.min(1, elapsed / WIPE_MS);
        const eased = 1 - Math.pow(1 - wt, 3);
        if (wipeRef.current) {
          wipeRef.current.style.opacity = '1';
          wipeRef.current.style.width = `${(RAIL + eased * Math.max(0, plateW - RAIL)).toFixed(1)}px`;
        }
        const fadeMs = elapsed - WIPE_MS;
        if (fadeMs > 0) {
          el.style.opacity = Math.max(0, 1 - fadeMs / EXIT_MS).toFixed(3);
        }
        if (elapsed >= WIPE_MS + EXIT_MS) {
          onComplete();
          return;
        }
        raf = requestAnimationFrame(flourish);
      };
      raf = requestAnimationFrame(flourish);
    };

    const step = now => {
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(eased * 100);

      if (fillRef.current) {
        fillRef.current.style.height = `${(eased * 100).toFixed(2)}%`;
      }
      if (pctRef.current) {
        pctRef.current.textContent = `${value}%`;
      }
      if (statusRef.current) {
        statusRef.current.textContent =
          value < 40 ? 'Connecting...' : value < 99 ? 'Updating...' : 'Ready';
      }
      if (meterRef.current) {
        const plateH = el.clientHeight || window.innerHeight;
        const meterH = meterRef.current.offsetHeight || 90;
        const SAFE_BOTTOM = 64;
        const raw = eased * plateH + 10;
        const maxTop = Math.max(0, plateH - meterH - SAFE_BOTTOM);
        meterRef.current.style.top = `${Math.min(raw, maxTop).toFixed(1)}px`;
      }

      if (t >= 1) {
        finish();
        return;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <div
      ref={plateRef}
      data-endfield-loader=""
      translate="no"
      lang="en"
      aria-hidden="true"
      className="notranslate"
    >
      <div data-endfield-loader-tex="" />
      <div data-endfield-loader-track="" />
      <div ref={fillRef} data-endfield-loader-fill="" />
      <div ref={meterRef} data-endfield-loader-meter="">
        <span data-endfield-loader-tick="" />
        <span ref={pctRef} data-endfield-loader-pct="">0%</span>
        <span ref={statusRef} data-endfield-loader-status="">Connecting...</span>
      </div>
      <div data-endfield-loader-brand="">
        <span data-endfield-loader-kicker="" />
        <span data-endfield-loader-word="" data-endfield-loader-word1="" />
        <span data-endfield-loader-word="" data-endfield-loader-word2="" />
        <span data-endfield-loader-detail="">
          <span data-endfield-loader-chev="" />
          <span data-endfield-loader-sub="" />
          <span data-endfield-loader-seq="" />
          <span data-endfield-loader-squares="">
            <i data-on="" />
            <i data-on="" />
            <i data-on="" />
            <i />
            <i />
            <i />
            <i data-on="" />
            <i data-on="" />
            <i />
            <i />
            <i />
            <i />
          </span>
        </span>
        <span data-endfield-loader-tag="" />
      </div>
      <div ref={wipeRef} data-endfield-loader-wipe="" />
    </div>
  );
}
