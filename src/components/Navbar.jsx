import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { ScrambleText } from './RevealOnScroll';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const close = () => setOpen(false);

  return (
    <header
      className="site-header"
      onKeyDown={event => {
        if (event.key === 'Escape') {
          close();
          document.getElementById('menu-toggle')?.focus();
        }
      }}
    >
      <div className="shell header-inner">
        <Link to="/" className="wordmark" onClick={close} aria-label="Sarayut หน้าหลัก">
          <span className="wordmark-badge" aria-hidden="true">ENDFIELD</span>
          <ScrambleText text="SARAYUT" scrambleOnMount={false} />
          <span>//</span>
          <span className="wordmark-sub" aria-hidden="true">OP-ID: SRY-01</span>
        </Link>
        <nav className={open ? 'main-nav is-open' : 'main-nav'} id="main-nav" aria-label="เมนูหลัก">
          <Link to="/#work" data-index="01" onClick={close}>
            <ScrambleText text="WORK" scrambleOnMount={false} />
          </Link>
          <Link to="/about" data-index="02" onClick={close} aria-current={pathname === '/about' ? 'page' : undefined}>
            <ScrambleText text="ABOUT" scrambleOnMount={false} />
          </Link>
          <Link to="/#experience" data-index="03" onClick={close}>
            <ScrambleText text="EXPERIENCE" scrambleOnMount={false} />
          </Link>
          <Link to="/blog" data-index="04" onClick={close} aria-current={pathname.startsWith('/blog') ? 'page' : undefined}>
            <ScrambleText text="JOURNAL" scrambleOnMount={false} />
          </Link>
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button theme-button"
            onClick={toggleTheme}
            aria-label={resolvedTheme === 'dark' ? 'ใช้ธีมสว่าง' : 'ใช้ธีมมืด'}
          >
            {resolvedTheme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link className="nav-contact" to="/#contact" onClick={close}>
            <ScrambleText text="COMMS // TALK" scrambleOnMount={false} /> <ArrowUpRight size={15} />
          </Link>
          <button
            id="menu-toggle"
            className="icon-button menu-toggle"
            aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
