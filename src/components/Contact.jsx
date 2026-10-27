import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profileData';

export default function Contact() {
  const [copyState, setCopyState] = useState('');
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopyState('คัดลอกอีเมลแล้ว // COPIED TO CLIPBOARD');
    } catch {
      setCopyState('คัดลอกไม่ได้ กรุณาเลือกอีเมลแล้วคัดลอกด้วยตัวเอง');
    }
  }

  return (
    <footer id="contact" className="contact-section">
      <div className="shell">
        <div className="contact-top">
          <div>
            <span className="availability">
              <span /> เปิดรับโอกาสงาน Software Developer
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
          <div className="contact-frontier-stamp" translate="no" aria-hidden="true">
            <strong>ENDFIELD</strong>
            OVER THE FRONTIER / INTO THE FRONT
          </div>
        </div>
        <div className="email-row">
          <a className="endfield-capsule" href={`mailto:${profileData.email}`}>
            {profileData.email}
          </a>
          <button className="button button-secondary" onClick={copyEmail} aria-label="คัดลอกอีเมล">
            {copyState.startsWith('คัดลอกอีเมลแล้ว') ? <Check size={16} /> : <Copy size={16} />}
            <span>คัดลอกอีเมล</span>
          </button>
        </div>
        <p className="copy-feedback" role="status">{copyState}</p>
        <div className="footer-bottom">
          <Link className="wordmark" to="/">
            <span className="wordmark-chip" translate="no">ENDFIELD</span>
            <span className="wordmark-en" style={{ color: '#f5f5f0' }}>SARAYUT</span>
          </Link>
          <p>OVER THE FRONTIER / INTO THE FRONT · MADE WITH CURIOSITY &amp; A CUP OF TEA</p>
          <div className="social-links">
            <a href={profileData.github} target="_blank" rel="noreferrer">
              [GitHub] <ArrowUpRight size={13} />
            </a>
            <a href="https://line.me/ti/p/~bbassarayut" target="_blank" rel="noreferrer">
              [LINE] <ArrowUpRight size={13} />
            </a>
            <a href="tel:0613285127">[โทร]</a>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
