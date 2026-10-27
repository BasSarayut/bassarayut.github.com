import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, Moon, Play, Sun, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, toggleTheme, palette, togglePalette, replayBoot } = useTheme();
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
          <span className="wordmark-chip" translate="no">ENDFIELD</span>
          <span className="wordmark-stack">
            <span className="wordmark-en">SARAYUT</span>
            <span className="wordmark-sub">SOFTWARE DEVELOPER</span>
          </span>
        </Link>

        <nav className={open ? 'main-nav is-open' : 'main-nav'} id="main-nav" aria-label="เมนูหลัก">
          <Link to="/#work" onClick={close}>
            <span className="nav-en">01 / WORK</span>
            <span className="nav-th">ผลงานคัดสรร</span>
          </Link>
          <Link to="/about" onClick={close} aria-current={pathname === '/about' ? 'page' : undefined}>
            <span className="nav-en">02 / OPERATOR</span>
            <span className="nav-th">ข้อมูลผู้พัฒนา</span>
          </Link>
          <Link to="/#experience" onClick={close}>
            <span className="nav-en">03 / CHRONICLE</span>
            <span className="nav-th">ประสบการณ์</span>
          </Link>
          <Link to="/blog" onClick={close} aria-current={pathname.startsWith('/blog') ? 'page' : undefined}>
            <span className="nav-en">04 / NOTICE</span>
            <span className="nav-th">บทความ</span>
          </Link>
        </nav>

        <div className="nav-actions">
          <button
            className="palette-switch"
            onClick={togglePalette}
            title="สลับสีสัญญาณ Valley Yellow / Wuling Cyan"
            aria-label={palette === 'valley' ? 'สลับเป็นสีฟ้า Wuling Cyan' : 'สลับเป็นสีเหลือง Valley Yellow'}
          >
            <span className="palette-swatch" aria-hidden="true" />
            <span>{palette === 'valley' ? 'VALLEY' : 'WULING'}</span>
          </button>
          <button
            className="boot-trigger"
            onClick={replayBoot}
            title="เล่นอนิเมชันเปิดตัว Endfield Boot อีกครั้ง"
            aria-label="เล่นอนิเมชันเปิดตัวอีกครั้ง"
          >
            <Play size={12} />
            <span>BOOT</span>
          </button>
          <button
            className="icon-button theme-button"
            onClick={toggleTheme}
            aria-label={resolvedTheme === 'dark' ? 'ใช้ธีมสว่าง' : 'ใช้ธีมมืด'}
          >
            {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link className="nav-contact" to="/#contact" onClick={close}>
            Let’s talk <ArrowUpRight size={14} />
          </Link>
          <button
            id="menu-toggle"
            className="icon-button menu-toggle"
            aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
    </header>
  );
}
