import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Asterisk, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const close = () => setOpen(false);
  return <header className="site-header" onKeyDown={event => { if (event.key === 'Escape') { close(); document.getElementById('menu-toggle')?.focus(); } }}><div className="shell header-inner">
    <Link to="/" className="wordmark" onClick={close} aria-label="Sarayut หน้าหลัก">sarayut<span>.</span><Asterisk size={23} aria-hidden="true" /></Link>
    <nav className={open ? 'main-nav is-open' : 'main-nav'} id="main-nav" aria-label="เมนูหลัก">
      <Link to="/#work" onClick={close}>Work</Link><Link to="/about" onClick={close} aria-current={pathname === '/about' ? 'page' : undefined}>About</Link><Link to="/#experience" onClick={close}>Experience</Link><Link to="/blog" onClick={close} aria-current={pathname.startsWith('/blog') ? 'page' : undefined}>Journal</Link>
    </nav>
    <div className="nav-actions"><button className="icon-button theme-button" onClick={toggleTheme} aria-label={resolvedTheme === 'dark' ? 'ใช้ธีมสว่าง' : 'ใช้ธีมมืด'}>{resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button><Link className="nav-contact" to="/#contact" onClick={close}>Let’s talk <ArrowUpRight size={17} /></Link><button id="menu-toggle" className="icon-button menu-toggle" aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button></div>
  </div></header>;
}
