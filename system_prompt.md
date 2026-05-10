You are building a portfolio website for Gopal Mathur — a final-year Automotive Engineering student at DTU who operates as a backend/distributed systems engineer. He builds production systems (Go, Rust, C++, Java, Python), not prototypes. He is targeting SDE1 roles at top-tier tech companies. The stack is React + Vite + TypeScript with React Compiler enabled.

---

## IDENTITY & TONE

This is NOT a student portfolio. It is an engineer's portfolio. The copy must be terse, confident, and metrics-driven. No "passionate about", no "aspiring", no "love to code". Every sentence earns its place with specifics: numbers, tradeoffs, architecture decisions. Think: systems engineer's README, not a LinkedIn profile.

Positioning statement (use verbatim in hero): "I build production systems, not prototypes."

---

## DESIGN DIRECTION

Aesthetic: Industrial Brutalist — dark, raw, high-contrast, typographically aggressive. Think terminal meets editorial design. No purple gradients, no rounded bubbly cards, no generic SaaS polish.

Color palette (CSS variables):
  --bg: #0a0a0a
  --surface: #111111
  --border: #222222
  --accent: #e8ff00  /* electric yellow-green — the ONE color that cuts through */
  --accent-dim: #b8cc00
  --text-primary: #f0f0f0
  --text-secondary: #888888
  --text-muted: #444444
  --red: #ff3333  /* for error states / emphasis only */

Typography:
  - Display/headings: "JetBrains Mono" or "IBM Plex Mono" — monospaced, engineered, terminal feel
  - Body: "Fragment Mono" or fallback to "Courier New" — readable but stays in the mono family
  - Load from Google Fonts or Fontsource
  - Never use Inter, Roboto, Poppins, or any humanist sans

Layout rules:
  - Full-bleed dark background, near-black
  - Tight grid: 12-column, strict alignment
  - Generous negative space with intentional asymmetry
  - Sections separated by single-pixel --border lines, not whitespace gaps
  - Accent color used sparingly: active states, key metrics, hover underlines, cursor blink
  - No box shadows. Use border instead.
  - No border-radius above 2px anywhere
  - Subtle grain texture overlay on body (SVG noise filter or CSS)

Motion:
  - Page load: staggered fade-in + slide-up for hero text (CSS animation-delay, 100ms increments)
  - Scroll-triggered section reveals using IntersectionObserver
  - Hover on project cards: border color flips to --accent, accent metric numbers brighten
  - Blinking cursor animation on hero headline using CSS (like a real terminal)
  - No gratuitous transitions. Every animation has a purpose.

---

## SITE STRUCTURE & SECTIONS

### 1. NAV
- Sticky top, minimal
- Left: "GM" in --accent color (monospace, bold)
- Right: plain text links — Work · Projects · Stack · Contact
- On mobile: hamburger that opens a full-screen overlay nav
- No logo image, no icons in nav

### 2. HERO
- Full viewport height
- Top-left: small label in --text-muted: "Available June 2026 · Delhi, India"
- Large headline (3–4rem on desktop): "I build production systems, not prototypes."
  Add blinking cursor after the period using CSS ::after pseudo-element
- Subline (--text-secondary, smaller): "Distributed systems. AI infrastructure. Systems-level engineering."
- Below: two ghost-border buttons — "See My Work" (scrolls to projects) and "Read My Resume" (opens PDF in new tab)
- Bottom-right corner: subtle vertical text in --text-muted reading "Go · Rust · C++ · Java · Python"

### 3. IMPACT / WORK EXPERIENCE
Title: "Where I've Shipped"

Three entries as horizontal timeline-style blocks (stacked on mobile):

**Siemens Technology** (May 2025 – Present)
Role: Software Development Engineer Intern
  - GenAI RAG platform: PoC → production, 3 regions (India, US, Germany)
  - 700+ users, 40% reduction in training content development time
  - Stack: Spring Boot · React · MongoDB · Docker · Azure CI/CD · RAG Pipelines
  - Featured internally as flagship AI adoption initiative
  Accent metric to highlight: "40%" in --accent

**Digital Asset Network** (Sep 2024 – Mar 2025)
Role: Smart Contract Engineer Intern
  - Production Rust smart contracts on 2 blockchain protocols
  - 700+ user adoption, 15% customer base growth via DeFi primitives
  - TypeScript SDK for third-party integrations
  Accent metric: "700+ users"

**Ezinore Private Limited** (Feb 2023 – Sep 2023)
Role: Full Stack Developer
  - ESP32 → AWS IoT Core real-time pipelines in C++, 20+ devices
  - Full-stack prototypes (Flutter + SvelteKit) for investor demos
  Accent metric: "20+ devices"

### 4. PROJECTS
Title: "What I've Built"

Two featured project cards, full-width stacked:

**Card 1: Realtime Collaborative Document Editor**
  - Subheader: "Google Docs, from first principles."
  - Body: One tight paragraph. Mention: C++ OT engine with Lamport clocks, CGo FFI, Go WebSocket server, Kafka event sourcing, RS256/JWKS auth, Azure AKS deployment.
  - Metrics bar (--accent colored numbers, --text-muted labels):
      738 msg/sec · 400 ops/sec · 105 concurrent users · 47,500+ ops under load
  - Stack tags (plain text, --border outline, no background): C++ · Go · Java · Kafka · React · Azure AKS
  - Links: GitHub icon → repo

**Card 2: Custom Decoder-only GPT**
  - Subheader: "Transformers, from scratch."
  - Body: Built a GPT-style decoder Transformer in PyTorch. Multi-head attention, positional embeddings, causal masking. 6-layer model (384-dim, 6 heads, 1024 FFN). Full training pipeline with tiktoken.
  - Stack tags: Python · PyTorch · Transformers
  - Links: GitHub icon → repo

**Card 3: Siemens GenAI Platform** (smaller, secondary card)
  - Brief: Enterprise RAG platform. Spring Boot + React + MongoDB. Multi-region production deployment.
  - Label: "Professional · NDA applies · Details on request"

### 5. STACK
Title: "The Stack"

Simple monospaced grid. No icons (optional: small SVG icons if clean). Group by:
  Languages: Go · Rust · C++ · Java · Python · TypeScript
  Backend: Spring Boot · gRPC · Kafka · WebSockets · REST · Microservices
  Infrastructure: Docker · Kubernetes · Azure · AWS · Nginx · CI/CD
  AI/ML: PyTorch · RAG Pipelines · Vector DBs · LLM Integration · Transformer Architecture
  Databases: PostgreSQL · MongoDB · Redis
  Frontend: React · Next.js · Vite · Slate.js

Each item is a plain text tag with --border. Active hover: --accent border + text.

### 6. CONTACT
Title: "Let's Talk"

Minimal. No contact form.
  - Email: mathurgopal1001@gmail.com (clickable mailto)
  - GitHub: github.com/GM-11
  - LinkedIn: linkedin.com/in/gopal-mathur-70044125a
  - One line of copy: "Open to SDE1 roles. Available June 2026."

---

## TECHNICAL REQUIREMENTS

- React 19 with React Compiler (no manual useMemo/useCallback)
- Vite for bundling
- TypeScript strict mode (no `any`)
- CSS Modules or plain CSS with CSS variables — no Tailwind, no CSS-in-JS
- IntersectionObserver for scroll-triggered animations (no GSAP, keep it lean)
- No UI component libraries (no shadcn, no MUI, no Radix) — build raw
- Fonts via @fontsource or Google Fonts import
- Resume PDF linked directly from /public folder
- Mobile-first responsive: single-column on mobile, grid expands on ≥768px
- No lazy loading complexity — this is a single-page portfolio, keep the bundle tight
- GitHub links use target="_blank" rel="noopener noreferrer"
- SVG icons for GitHub/LinkedIn/Email (inline or from lucide-react only if needed)

---

## FILE STRUCTURE

src/
  components/
    Nav.tsx
    Hero.tsx
    Work.tsx
    Projects.tsx
    Stack.tsx
    Contact.tsx
    Footer.tsx
  styles/
    global.css       ← CSS variables, resets, grain texture, typography
    Nav.module.css
    Hero.module.css
    Work.module.css
    Projects.module.css
    Stack.module.css
    Contact.module.css
  hooks/
    useIntersectionObserver.ts
  App.tsx
  main.tsx

public/
  resume.pdf

---

## COPY RULES

- All copy is already written above — use it verbatim or tighten it further
- Never add filler: no "I am passionate about", no "dedicated to excellence"
- Metrics always appear as numbers, not words ("40%", not "forty percent")
- Sections use short, declarative titles ("Where I've Shipped", "What I've Built")
- No exclamation marks anywhere

---

## WHAT TO AVOID

- Purple/blue gradients on dark backgrounds (cliché)
- Animated particle backgrounds or WebGL hero effects (noisy, slow)
- Card carousels or sliders
- Any design pattern that looks like a Framer template
- Emoji anywhere
- "Hire me" language
- Skill percentage bars (meaningless)
- Profile photo (not needed, not requested)
