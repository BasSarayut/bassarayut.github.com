
export const blogPosts = [
  {
    id: 1,
    title: "The Future of Liquid Interfaces",
    excerpt: "Exploring the shift from flat design to hyper-realistic glassmorphism in modern web applications.",
    date: "Feb 02, 2026",
    category: "Design",
    color: "var(--primary-accent)",
    content: `
      <p>The web is evolving. We spent the last decade perfecting flat design, focusing on usability and minimalism. But as screens get better and devices get faster, we are seeing a return to depth, texture, and organic movement.</p>
      
      <h3>What is Liquid Glass?</h3>
      <p>Liquid Glass (or "iOS 26 style") combines the best of glassmorphism—blurs, transparency, light borders—with fluid, organic shapes. It's not just about looking like glass; it's about behaving like a fluid.</p>
      
      <ul>
        <li><strong>Hyper-Blur:</strong> Background blurs are deeper (40px+).</li>
        <li><strong>Specular Highlights:</strong> Sharp, white borders at the top to mimic light hitting the edge.</li>
        <li><strong>Fluid Motion:</strong> Animations use spring physics or bounce easings rather than linear transitions.</li>
      </ul>

      <p>This aesthetic creates a sense of premium tactility that flat design often lacks. It makes the user want to touch the interface.</p>
    `
  },
  {
    id: 2,
    title: "Mastering React Performance",
    excerpt: "Deep dive into memoization, server components, and optimizing the critical rendering path.",
    date: "Jan 28, 2026",
    category: "Tech",
    color: "var(--secondary-accent)",
    content: `
      <p>Performance is feature #1. In a world of heavy JavaScript bundles, keeping your React application snappy is more important than ever.</p>

      <h3>The Cost of Re-renders</h3>
      <p>React is fast, but we often make it slow. Unnecessary re-renders are the silent killer of interaction responsiveness. Tools like <code>React.memo</code> and <code>useMemo</code> are your friends, but they must be used wisely.</p>

      <h3>Server Components (RSC)</h3>
      <p>With the advent of Next.js app router and other frameworks, Server Components are changing the game. By moving non-interactive logic to the server, we send less JS to the client, resulting in faster TTI (Time to Interactive).</p>
      
      <blockquote>
        "Premature optimization is the root of all evil, but performance negligence is the root of all churn."
      </blockquote>
    `
  },
  {
    id: 3,
    title: "Building Scalable Cloud Architectures",
    excerpt: "Best practices for using Google Cloud and Cloudflare Workers for edge computing.",
    date: "Jan 15, 2026",
    category: "Cloud",
    color: "var(--tertiary-accent)",
    content: `
      <p>The edge is closer than you think. Traditional centralized servers are great, but for global applications, latency is the enemy.</p>

      <h3>Why Cloudflare Workers?</h3>
      <p>Cloudflare Workers allow you to run JavaScript (or Rust/WASM) at the edge, within milliseconds of your users. This is perfect for:</p>
      <ul>
        <li>Authentication & Authorization</li>
        <li>A/B Testing</li>
        <li>Custom Headers & Routing</li>
      </ul>

      <h3>Google Cloud Run</h3>
      <p>For heavier compute tasks, Google Cloud Run offers a fully managed serverless environment that scales to zero. It's the perfect companion to edge functions.</p>
    `
  }
];
