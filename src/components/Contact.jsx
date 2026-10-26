import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Crosshair } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profileData';
import { ScrambleText } from './RevealOnScroll';

export default function Contact() {
  const [copyState, setCopyState] = useState('');
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopyState('SYS//COPIED: คัดลอกอีเมลแล้ว');
    } catch {
      setCopyState('ERR//CLIPBOARD: คัดลอกไม่ได้ กรุณาเลือกอีเมลแล้วคัดลอกด้วยตัวเอง');
    }
  }

  return (
    <footer id="contact" className="contact-section">
      <div className="shell">
        <div className="contact-top">
          <div>
            <span className="availability">
              <span /> <ScrambleText text="STATUS // OPEN FOR SOFTWARE DEVELOPER DEPLOYMENT" />
            </span>
            <h2>
              Let’s make<br />
              <em>something useful.</em>
            </h2>
            <p>
              ถ้าทีมของคุณกำลังมองหาคนที่ชอบทั้งคิดและลงมือสร้าง
              <br className="desktop-break" /> ผมยินดีคุยถึงสิ่งที่เราจะทำด้วยกันครับ
            </p>
          </div>
          <Crosshair className="contact-asterisk" aria-hidden="true" />
        </div>
        <div className="email-row">
          <a href={`mailto:${profileData.email}`}>
            {profileData.email}
            <ArrowUpRight aria-hidden="true" />
          </a>
          <button className="icon-button" onClick={copyEmail} aria-label="คัดลอกอีเมล">
            {copyState.startsWith('SYS//COPIED') ? <Check size={19} /> : <Copy size={19} />}
          </button>
        </div>
        <p className="copy-feedback" role="status">{copyState}</p>
        <div className="footer-bottom">
          <Link className="wordmark" to="/">
            <span className="wordmark-badge" aria-hidden="true">ENDFIELD</span>
            SARAYUT<span>//</span>
          </Link>
          <p>TERMINAL // CURIOUS ENGINEERING &amp; TEA BREWING UNIT</p>
          <div className="social-links">
            <a href={profileData.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={13} />
            </a>
            <a href="https://line.me/ti/p/~bbassarayut" target="_blank" rel="noreferrer">
              LINE <ArrowUpRight size={13} />
            </a>
            <a href="tel:0613285127">โทร</a>
            <span>© {new Date().getFullYear()} // VER.4.8</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
