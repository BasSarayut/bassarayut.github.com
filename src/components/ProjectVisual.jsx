import { Check, Clipboard, MapPin, Music2, Navigation, NotebookPen, Pause, SkipBack, SkipForward } from 'lucide-react';

export default function ProjectVisual({ kind, large = false }) {
  if (kind === 'wallpaper') {
    return (
      <div className={`project-visual wallpaper-visual ${large ? 'visual-large' : ''}`}>
        <div className="schematic-hud-top" aria-hidden="true">
          <span>/// ILL.STUDIO // CANVAS SYNTHESIS</span>
          <span>1170×2532PX · PNG EXPORT</span>
        </div>
        <div className="schematic-ruler-left" aria-hidden="true">
          <span>00</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
        </div>
        <div className="studio-window">
          <div className="window-chrome" aria-hidden="true">
            <span />
            <span />
            <span />
            <span className="window-url">ILL.SARAYUTS.COM // LIVE STUDIO</span>
          </div>
          <img
            src="/images/ill-studio.webp"
            alt="หน้าสตูดิโอ ill. มีเทมเพลตวอลเปเปอร์ ภาพจำลอง Lock Screen และเครื่องมือปรับแต่ง"
            loading="lazy"
            width="1992"
            height="1183"
          />
        </div>
        <div className="schematic-hud-bottom" aria-hidden="true">
          <span className="visual-caption">[ILL. WALLPAPER STUDIO] · A SPACE FOR YOUR FAVORITE THINGS</span>
          <span className="schematic-code">MOD // 02</span>
        </div>
      </div>
    );
  }

  if (kind === 'notch') {
    return (
      <div
        className={`project-visual notch-visual ${large ? 'visual-large' : ''}`}
        role="img"
        aria-label="ภาพจำลอง Notchy: เครื่องมือเพลง โน้ต และคลิปบอร์ดรอบ notch บน macOS"
      >
        <div className="schematic-hud-top" aria-hidden="true">
          <span>/// NOTCHY // MACOS BEZEL HUD</span>
          <span>SWIFTUI · APPKIT · BLUETOOTH</span>
        </div>
        <div className="notch-desktop" aria-hidden="true">
          <div className="desktop-menubar">
            <span>APPLE // NOTCHY.APP</span>
            <span>&lt;─── 224PT ACTIVE NOTCH ZONE ───&gt;</span>
            <span>09:41 // READY</span>
          </div>
          <div className="notch-island">
            <div className="notch-camera" />
            <div className="notch-player">
              <div className="record-art">
                <Music2 size={22} />
              </div>
              <div>
                <strong>[NOW PLAYING // AUDIO STREAM]</strong>
                <span>YOUR EVERYDAY SOUNDTRACK · 48KHZ</span>
                <div className="player-controls">
                  <SkipBack size={13} />
                  <Pause size={14} />
                  <SkipForward size={13} />
                </div>
              </div>
              <div className="sound-bars">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="notch-tools">
              <span><Music2 size={12} /> [01 AUDIO]</span>
              <span><Clipboard size={12} /> [02 CLIPBOARD]</span>
              <span><NotebookPen size={12} /> [03 SHELF]</span>
            </div>
          </div>
          <svg className="notch-blueprint-svg" viewBox="0 0 600 120" preserveAspectRatio="none">
            <line x1="60" y1="60" x2="540" y2="60" stroke="currentColor" strokeDasharray="4 4" />
            <line x1="160" y1="20" x2="160" y2="95" stroke="currentColor" strokeOpacity="0.4" />
            <line x1="300" y1="20" x2="300" y2="95" stroke="currentColor" strokeOpacity="0.4" />
            <line x1="440" y1="20" x2="440" y2="95" stroke="currentColor" strokeOpacity="0.4" />
            <rect x="140" y="48" width="40" height="24" fill="#101110" stroke="currentColor" />
            <rect x="280" y="48" width="40" height="24" fill="#101110" stroke="currentColor" />
            <rect x="420" y="48" width="40" height="24" fill="#101110" stroke="currentColor" />
          </svg>
        </div>
        <div className="schematic-hud-bottom" aria-hidden="true">
          <span className="visual-caption">[MACOS UTILITY] · ภาพจำลองโครงสร้างรอบ NOTCH</span>
          <span className="schematic-code">MOD // 03</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`project-visual delivery-visual ${large ? 'visual-large' : ''}`}
      role="img"
      aria-label="แผนภาพตัวอย่าง: ผู้ซื้อเลือกหมุดบนแผนที่ API บันทึกพิกัด และฝ่ายขนส่งนำไปใช้"
    >
      <div className="schematic-hud-top" aria-hidden="true">
        <span>/// AIC-LOGISTICS // GEOSPATIAL TELEMETRY</span>
        <span>LAT 13.9128°N · LON 100.6214°E</span>
      </div>

      <div className="map-diagram" aria-hidden="true">
        <svg className="aic-map-svg" viewBox="0 0 700 320" preserveAspectRatio="xMidYMid slice">
          <g stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none">
            <path d="M-20,70 Q180,20 360,90 T720,60" />
            <path d="M-20,140 Q210,80 390,150 T720,130" />
            <path d="M-20,220 Q200,170 420,240 T720,210" />
            <line x1="145" y1="0" x2="145" y2="320" strokeDasharray="3 5" />
            <line x1="350" y1="0" x2="350" y2="320" strokeDasharray="3 5" />
            <line x1="535" y1="0" x2="535" y2="320" strokeDasharray="3 5" />
            <line x1="0" y1="135" x2="700" y2="135" strokeDasharray="3 5" />
          </g>

          {/* Radar Target Rings at Destination */}
          <circle cx="535" cy="112" r="56" fill="none" stroke="rgba(255,245,0,0.22)" strokeDasharray="4 4" />
          <circle cx="535" cy="112" r="32" fill="rgba(255,245,0,0.07)" stroke="rgba(255,245,0,0.45)" />

          {/* AIC Pipeline Vector: Buyer -> API -> Delivery */}
          <polyline
            points="145,168 250,168 290,112 535,112"
            fill="none"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="4"
          />
          <polyline
            className="aic-route-pulse"
            points="145,168 250,168 290,112 535,112"
            fill="none"
            stroke="var(--edge-accent)"
            strokeWidth="2.5"
            strokeDasharray="8 6"
          />

          {/* Midpoint API Node */}
          <rect x="310" y="96" width="84" height="32" fill="#101110" stroke="var(--edge-accent)" strokeWidth="1.5" />
          <text x="352" y="116" textAnchor="middle" fill="#f5f5f0" fontSize="10" fontFamily="monospace" fontWeight="700">
            API // SYNC
          </text>
        </svg>

        <div className="map-origin">
          <Navigation size={16} />
          <span className="map-node-label">01 // BUYER PIN</span>
        </div>

        <div className="destination-pin">
          <MapPin size={26} fill="currentColor" />
          <span>03 // ถึงจุดหมายเดียวกัน</span>
        </div>

        <div className="location-slip">
          <span className="slip-icon">
            <Check size={17} />
          </span>
          <div>
            <strong>[เลือกตำแหน่งเรียบร้อย]</strong>
            <span>BUYER → API → DELIVERY · พิกัดพร้อมส่งต่อให้ขนส่ง</span>
          </div>
        </div>
      </div>

      <div className="schematic-hud-bottom" aria-hidden="true">
        <span className="visual-caption">[SCHEMATIC SIMULATION] · แผนภาพตัวอย่างระบบปักหมุด</span>
        <span className="schematic-code">MOD // 01</span>
      </div>
    </div>
  );
}
