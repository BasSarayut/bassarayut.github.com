import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

export default function RootLayout() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return <><a className="skip-link" href="#main">ข้ามไปเนื้อหา</a><Navbar key={pathname} /><main id="main" tabIndex={-1}><Outlet /></main><Contact /></>;
}
