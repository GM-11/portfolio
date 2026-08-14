import useIntersectionObserver from '../hooks/useIntersectionObserver'
import styles from '../styles/Work.module.css'

export default function Work() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>()

  return (
    <section id="work" ref={ref} className={`section ${isVisible ? 'visible' : ''}`}>
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>Where I&apos;ve Shipped</h2>
        <div className={styles.timeline}>
          <article className={styles.item}>
            <header className={styles.header}>
              <h3>Siemens Technology and Services</h3>
              <p>Software Development Engineer Intern</p>
              <span>May 2025 – May 2026</span>
            </header>
            <ul>
              <li>Built Java/Spring Boot microservices and REST APIs, shipping production features across <strong className={styles.accent}>3 global regions</strong> through the full SDLC.</li>
              <li>Eliminated deployment downtime and reached <strong className={styles.accent}>85% automated test coverage</strong> via Azure DevOps CI/CD with JUnit/Mockito and structured code reviews.</li>
              <li>Cut REST API response times <strong className={styles.accent}>40%</strong> and sustained <strong className={styles.accent}>0% errors under 100 concurrent users</strong> via token-bucket rate limiting, validated with k6.</li>
              <li>Reduced enterprise content-development time <strong className={styles.accent}>40%</strong> for 100+ users with a RAG platform (LLM + Chroma), cutting latency 30% via Redis caching.</li>
            </ul>
          </article>
          <article className={styles.item}>
            <header className={styles.header}>
              <h3>Digital Asset Network</h3>
              <p>Software Development Engineer Intern</p>
              <span>Sep 2024 – Mar 2025</span>
            </header>
            <ul>
              <li>Delivered secure real-time transaction processing for <strong className={styles.accent}>700+ users</strong> at <strong className={styles.accent}>99.9% uptime</strong> and sub-200ms latency via Rust smart contracts on Solana and TON.</li>
              <li>Increased user engagement <strong className={styles.accent}>25%</strong> with a TypeScript/React dashboard with WebSocket real-time price feeds and multi-chain wallet integration, serving 200+ daily active users.</li>
            </ul>
          </article>
          <article className={styles.item}>
            <header className={styles.header}>
              <h3>Ezinore Private Limited</h3>
              <p>Software Development Engineer Intern</p>
              <span>Feb 2023 – Sep 2023</span>
            </header>
            <ul>
              <li>Architected an event-driven ingestion pipeline on AWS IoT Core, streaming telemetry from <strong className={styles.accent}>20+ edge devices</strong> into NoSQL storage for continuous industrial monitoring.</li>
              <li>Accelerated prototype delivery by <strong className={styles.accent}>3 weeks</strong> by building cross-platform dashboards with live monitoring, configurable alerts, and historical trend visualization.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
