import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import AnimatedBackground from '../components/AnimatedBackground';

function LiveClock() {
  const [timeStr, setTimeStr] = useState('BKK // 00:00:00.0');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      const ds = Math.floor(now.getMilliseconds() / 100);
      setTimeStr(`UTC+7 // ${hh}:${mm}:${ss}.${ds}`);
    };
    update();
    const id = setInterval(update, 120);
    return () => clearInterval(id);
  }, []);

  return <span className="prts-clock">{timeStr}</span>;
}

export default function RootLayout() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return (
    <>
      <a className="skip-link" href="#main">ข้ามไปเนื้อหา // SKIP TO TERMINAL</a>
      <AnimatedBackground />
      <div className="prts-sysbar" aria-hidden="true">
        <div className="shell prts-sysbar-inner">
          <div className="prts-sysbar-group">
            <span className="prts-sysbar-live">ENDFIELD // PRTS.ONLINE</span>
            <span className="hud-waveform">
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
            <span>SYS//VER.4.8</span>
            <span>SEC-08 // BKK-TH</span>
          </div>
          <div className="prts-sysbar-group">
            <LiveClock />
            <span>LAT 13.7563° N // LON 100.5018° E</span>
            <span className="hud-barcode" />
          </div>
        </div>
      </div>
      <Navbar key={pathname} />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Contact />
    </>
  );
}
