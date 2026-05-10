import useIntersectionObserver from '../hooks/useIntersectionObserver'
import styles from '../styles/Projects.module.css'

const GITHUB_ICON = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2A10 10 0 0 0 8.84 21.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18a2.64 2.64 0 0 0-1.1-1.45c-.9-.62.07-.61.07-.61a2.08 2.08 0 0 1 1.52 1.02 2.11 2.11 0 0 0 2.89.83 2.1 2.1 0 0 1 .63-1.32c-2.22-.25-4.56-1.11-4.56-4.95a3.86 3.86 0 0 1 1.03-2.68 3.58 3.58 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.9-1.3 2.75-1.02 2.75-1.02.37.84.4 1.8.1 2.64a3.85 3.85 0 0 1 1.03 2.68c0 3.85-2.34 4.7-4.57 4.95a2.35 2.35 0 0 1 .67 1.82v2.7c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
    />
  </svg>
)

const METRICS = [
  { value: '738 msg/sec', label: 'Throughput' },
  { value: '400 ops/sec', label: 'Operational Rate' },
  { value: '105 concurrent users', label: 'Concurrency' },
  { value: '47,500+ ops under load', label: 'Stress Validation' },
]

export default function Projects() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>()

  return (
    <section id="projects" ref={ref} className={`section ${isVisible ? 'visible' : ''}`}>
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>What I&apos;ve Built</h2>
        <div className={styles.cards}>
          <article className={styles.card}>
            <header className={styles.cardHeader}>
              <h3>Realtime Collaborative Document Editor</h3>
              <p>Google Docs, from first principles.</p>
            </header>
            <p className={styles.body}>
              C++ OT engine with Lamport clocks, CGo FFI boundary, Go WebSocket server, Kafka
              event sourcing, RS256/JWKS auth, and Azure AKS deployment.
            </p>
            <div className={styles.metrics}>
              {METRICS.map((metric) => (
                <p key={metric.label}>
                  <span>{metric.value}</span>
                  {metric.label}
                </p>
              ))}
            </div>
            <div className={styles.bottomRow}>
              <ul className={styles.tags} aria-label="Tech stack">
                <li>C++</li>
                <li>Go</li>
                <li>Java</li>
                <li>Kafka</li>
                <li>React</li>
                <li>Azure AKS</li>
              </ul>
              <a
                className={styles.iconLink}
                href="https://github.com/GM-11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Collaborative editor repository"
              >
                {GITHUB_ICON}
              </a>
            </div>
          </article>
          <article className={styles.card}>
            <header className={styles.cardHeader}>
              <h3>Custom Decoder-only GPT</h3>
              <p>Transformers, from scratch.</p>
            </header>
            <p className={styles.body}>
              Built a GPT-style decoder Transformer in PyTorch. Multi-head attention, positional
              embeddings, causal masking. 6-layer model (384-dim, 6 heads, 1024 FFN). Full
              training pipeline with tiktoken.
            </p>
            <div className={styles.bottomRow}>
              <ul className={styles.tags} aria-label="Tech stack">
                <li>Python</li>
                <li>PyTorch</li>
                <li>Transformers</li>
              </ul>
              <a
                className={styles.iconLink}
                href="https://github.com/GM-11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Custom GPT repository"
              >
                {GITHUB_ICON}
              </a>
            </div>
          </article>
          <article className={`${styles.card} ${styles.secondary}`}>
            <header className={styles.cardHeader}>
              <h3>Siemens GenAI Platform</h3>
              <p>Enterprise RAG platform. Spring Boot + React + MongoDB. Multi-region production deployment.</p>
            </header>
            <p className={styles.label}>Professional · NDA applies · Details on request</p>
          </article>
        </div>
      </div>
    </section>
  )
}
