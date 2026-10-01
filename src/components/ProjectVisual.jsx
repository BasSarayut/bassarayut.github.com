import { Clipboard, MapPin, Music2, NotebookPen, Pause, SkipBack, SkipForward, ArrowUpRight, Check, Navigation } from 'lucide-react';

export default function ProjectVisual({ kind, large = false }) {
  if (kind === 'wallpaper') {
    return <div className={`project-visual wallpaper-visual ${large ? 'visual-large' : ''}`}>
      <span className="visual-brand" aria-hidden="true">ill.</span>
      <div className="studio-window"><div className="window-chrome" aria-hidden="true"><span /><span /><span /><span className="window-url">ill.sarayuts.com</span></div><img src="/images/ill-studio.webp" alt="หน้าสตูดิโอ ill. มีเทมเพลตวอลเปเปอร์ ภาพจำลอง Lock Screen และเครื่องมือปรับแต่ง" loading="lazy" width="1992" height="1183" /></div>
      <span className="visual-caption">A space for your favorite things.</span>
    </div>;
  }
  if (kind === 'notch') {
    return <div className={`project-visual notch-visual ${large ? 'visual-large' : ''}`} role="img" aria-label="ภาพจำลอง Notchy: เครื่องมือเพลง โน้ต และคลิปบอร์ดรอบ notch บน macOS">
      <div className="notch-desktop" aria-hidden="true"><div className="desktop-menubar"><span>Notchy</span><span>Fri 9:41</span></div><div className="notch-island"><div className="notch-camera" /><div className="notch-player"><div className="record-art"><Music2 size={27} /></div><div><strong>A little room for music.</strong><span>Your everyday soundtrack</span><div className="player-controls"><SkipBack size={14} /><Pause size={16} /><SkipForward size={14} /></div></div><div className="sound-bars"><i /><i /><i /><i /><i /></div></div><div className="notch-tools"><Music2 size={15} /><Clipboard size={15} /><NotebookPen size={15} /></div></div><span className="desktop-message">Make room<br /><em>for the little things.</em></span></div>
      <span className="visual-caption">macOS utility · ภาพจำลอง</span>
    </div>;
  }
  return <div className={`project-visual delivery-visual ${large ? 'visual-large' : ''}`} role="img" aria-label="แผนภาพตัวอย่าง: ผู้ซื้อเลือกหมุดบนแผนที่ API บันทึกพิกัด และฝ่ายขนส่งนำไปใช้">
    <div className="map-diagram" aria-hidden="true"><div className="map-block block-one" /><div className="map-block block-two" /><div className="map-block block-three" /><div className="map-block block-four" /><div className="map-road road-one" /><div className="map-road road-two" /><div className="map-road road-three" /><div className="route-line" /><div className="map-origin"><Navigation size={19} /></div><div className="destination-pin"><MapPin size={31} fill="currentColor" /><span>ถึงจุดหมายเดียวกัน</span></div><div className="location-slip"><span className="slip-icon"><Check size={20} /></span><div><strong>เลือกตำแหน่งเรียบร้อย</strong><span>พิกัดพร้อมส่งต่อให้ขนส่ง</span></div><ArrowUpRight size={18} /></div></div>
    <span className="visual-caption">Buyer → API → Delivery · แผนภาพตัวอย่าง</span>
  </div>;
}
