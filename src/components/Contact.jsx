import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Asterisk } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profileData';

export default function Contact() {
  const [copyState, setCopyState] = useState('');
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profileData.email); setCopyState('คัดลอกอีเมลแล้ว'); }
    catch { setCopyState('คัดลอกไม่ได้ กรุณาเลือกอีเมลแล้วคัดลอกด้วยตัวเอง'); }
  }
  return <footer id="contact" className="contact-section"><div className="shell">
    <div className="contact-top"><div><span className="availability"><span /> เปิดรับโอกาสงาน Software Developer</span><h2>Let’s make<br /><em>something useful.</em></h2><p>ถ้าทีมของคุณกำลังมองหาคนที่ชอบทั้งคิดและลงมือสร้าง<br className="desktop-break" /> ผมยินดีคุยถึงสิ่งที่เราจะทำด้วยกันครับ</p></div><Asterisk className="contact-asterisk" aria-hidden="true" /></div>
    <div className="email-row"><a href={`mailto:${profileData.email}`}>{profileData.email}<ArrowUpRight aria-hidden="true" /></a><button className="icon-button" onClick={copyEmail} aria-label="คัดลอกอีเมล">{copyState === 'คัดลอกอีเมลแล้ว' ? <Check size={21} /> : <Copy size={21} />}</button></div><p className="copy-feedback" role="status">{copyState}</p>
    <div className="footer-bottom"><Link className="wordmark" to="/">sarayut<span>.</span></Link><p>Made with curiosity & a cup of tea.</p><div className="social-links"><a href={profileData.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a><a href="https://line.me/ti/p/~bbassarayut" target="_blank" rel="noreferrer">LINE <ArrowUpRight size={13} /></a><a href="tel:0613285127">โทร</a><span>© {new Date().getFullYear()}</span></div></div>
  </div></footer>;
}
