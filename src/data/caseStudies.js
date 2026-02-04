
export const caseStudies = [
  {
    id: 1,
    title: "Neon E-Commerce Engine",
    role: "Lead Frontend Engineer",
    timeline: "3 Months",
    description: "A high-performance headless commerce platform built for scale.",
    image: "https://placehold.co/600x400/38bdf8/ffffff?text=Neon+Commerce",
    tech: ["React", "Next.js", "GraphQL", "Stripe", "Tailwind"],
    challenge: `
      <p>The client needed a platform capable of handling <strong>50,000+ concurrent users</strong> during flash sales without UI degradation. The existing legacy system was built on a monolithic WordPress architecture that suffered from:</p>
      <ul>
        <li>Slow TTFB (Time to First Byte) averaging 1.2s</li>
        <li>Database locking during high traffic</li>
        <li>Inflexible checkout flows</li>
      </ul>
    `,
    solution: `
      <p>We decoupled the frontend using a <strong>Headless Architecture</strong>. I led the migration to Next.js, leveraging Static Site Generation (SSG) for product pages and Server Side Rendering (SSR) for the checkout flow.</p>
      
      <h3>Key Architectural Decisions:</h3>
      <ul>
        <li><strong>Edge Caching:</strong> Implemented Cloudflare Workers to cache API responses at the edge, reducing backend load by 85%.</li>
        <li><strong>Optimistic UI:</strong> Designed a cart system that updates instantly, syncing with the server in the background to reduce perceived latency.</li>
        <li><strong>State Management:</strong> Replaced Redux with Zustand for a 60% reduction in bundle size impact.</li>
      </ul>
    `,
    impact: `
      <p>The launch was a massive success. During the Black Friday event, the system handled a vivid 300% traffic spike with zero downtime.</p>
      <ul>
        <li><strong>Performance:</strong> Lighthouse score improved from 45 to 98.</li>
        <li><strong>Conversion Rate:</strong> Increased by 24% due to the 0.5s faster checkout process.</li>
        <li><strong>Dev Experience:</strong> Deployment time reduced from 20 mins to 3 mins.</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "FinTech Dashboard V2",
    role: "Full Stack Developer",
    timeline: "2 Months",
    description: "Real-time financial data visualization for enterprise clients.",
    image: "https://placehold.co/600x400/f472b6/ffffff?text=FinTech+Dash",
    tech: ["Vue.js", "D3.js", "WebSockets", "Go"],
    challenge: `
      <p>Traders needed to see stock ticker updates in <strong>real-time (sub-100ms latency)</strong>. The previous REST-polling implementation was thrashing the server and causing UI jank on the client side when rendering thousands of data points.</p>
    `,
    solution: `
      <p>I architected a switch to <strong>WebSockets</strong> for bi-directional communication. On the frontend, I implemented a virtualized list to handle high-frequency updates without blocking the main thread.</p>
      
      <h3>Technical Deep Dive:</h3>
      <p>Using <code>D3.js</code> coupled with Canvas (instead of SVG), I optimized the charting engine to render 50,000+ points at 60fps. I also implemented binary data transfer (Protobufs) instead of JSON to reduce payload size by 40%.</p>
    `,
    impact: `
      <p>The new dashboard is now the standard tool for the firm's 200+ traders.</p>
      <ul>
        <li><strong>Latency:</strong> Reduced data delay from 2s to 45ms.</li>
        <li><strong>CPU Usage:</strong> Client-side CPU usage dropped by 50% thanks to Canvas rendering.</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "AI Image Generator",
    role: "UI/UX Designer & Dev",
    timeline: "4 Weeks",
    description: "A generative AI tool with a distinct 'Liquid Glass' aesthetic.",
    image: "https://placehold.co/600x400/a78bfa/ffffff?text=AI+Gen",
    tech: ["React", "Stable Diffusion API", "Three.js", "Framer Motion"],
    challenge: `
      <p>AI tools often feel robotic and complex. The goal was to create an interface that felt <strong>organic, creative, and accessible</strong> to non-technical artists.</p>
    `,
    solution: `
      <p>I focused purely on the <strong>User Experience (UX)</strong>. I hid the complexity of "prompts" behind a visual "Style Mixer" interface. I used <code>Three.js</code> to create a floating 3D orb that changes color and texture based on the generated image mood.</p>
    `,
    impact: `
      <p>Featured on Product Hunt and gained 10,000 users in the first week. Users praised the "magical" feel of the generation process.</p>
    `
  }
];
