# 🔮 Sarayut - Liquid Glass Portfolio

A futuristic, high-performance web portfolio built with **React**, designed to showcase the intersection of modern aesthetic capability and engineering precision.

![Portfolio Banner](https://bassarayut.github.io/og-image.jpg)

## ✨ Core Aesthetics: "Midnight Glass"

The design language follows a custom **"Liquid Glass"** philosophy:

- **Holographic UI**: Elements feature a frosted glass (`backdrop-filter: blur`) effect that adapts to the active theme.
- **Dynamic Lighting**:
  - **Day Mode**: Crisp white glass with soft blue nuances.
  - **Night Mode (Midnight)**: Deep void-blue gradients with neon glows.
- **3D Interactivity**: Cards physically tilt (`react-parallax-tilt`) and shimmer on interaction.
- **Cinematic Motion**: Powered by `framer-motion` for Apple-like smooth transitions.

## 🚀 Tech Stack

### Core

- **React 19**: The latest standard for component-based UI.
- **Vite**: Next-generation build tool for blazing fast HMR and optimized production builds.
- **React Router 7**: Robust client-side routing with animated page transitions (`AnimatePresence`).

### Visual Engine

- **Framer Motion**: For complex scroll reveals and layout animations.
- **React Parallax Tilt**: High-fidelity 3D tilt effects for interactive cards.
- **Lucide React**: Pixel-perfect SVG iconography.

### System & SEO

- **Helmet Async**: For dynamic metadata and SEO management.
- **JSON-LD**: Structured data injection for Google Knowledge Graph (Person Schema).
- **Robots/Sitemap**: Automated crawler guidance.

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/bassarayut/bassarayut.github.io.git

# Enter directory
cd bassarayut.github.io

# Install dependencies
npm install

# Start Local Development Server
npm run dev
```

## 📦 Building for Production

```bash
# Generate static build
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Theme System

The application features a time-aware **Automatic Dark Mode**:

1.  **System Preference**: Checks OS settings first.
2.  **Time of Day**: Falls back to Dark Mode between **6 PM - 6 AM**.
3.  **Manual Override**: Persistent toggle (Sun/Moon) saves preference to `localStorage`.

## 📂 Project Structure

```
src/
├── components/      # Glass UI Components (Contact, Navbar, Tilt Cards)
├── layouts/         # RootLayout with Page Transitions
├── pages/           # Route views (Home, Blog, Projects)
├── hooks/           # Custom Hooks (useTheme)
├── data/            # Centralized Content (Skills, Menu)
└── index.css        # CSS Variables for "Liquid Glass" tokens
```

---

_Designed & Engineered by Sarayut_
