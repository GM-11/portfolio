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
              <h3>Siemens Technology</h3>
              <p>Software Development Engineer Intern</p>
              <span>May 2025 – Present</span>
            </header>
            <ul>
              <li>GenAI RAG platform: PoC → production, 3 regions (India, US, Germany)</li>
              <li>
                700+ users, <strong className={styles.accent}>40%</strong> reduction in training
                content development time
              </li>
              <li>Stack: Spring Boot · React · MongoDB · Docker · Azure CI/CD · RAG Pipelines</li>
              <li>Featured internally as flagship AI adoption initiative</li>
            </ul>
          </article>
          <article className={styles.item}>
            <header className={styles.header}>
              <h3>Digital Asset Network</h3>
              <p>Smart Contract Engineer Intern</p>
              <span>Sep 2024 – Mar 2025</span>
            </header>
            <ul>
              <li>Production Rust smart contracts on 2 blockchain protocols</li>
              <li>
                <strong className={styles.accent}>700+ users</strong> adoption, 15% customer base
                growth via DeFi primitives
              </li>
              <li>TypeScript SDK for third-party integrations</li>
            </ul>
          </article>
          <article className={styles.item}>
            <header className={styles.header}>
              <h3>Ezinore Private Limited</h3>
              <p>Full Stack Developer</p>
              <span>Feb 2023 – Sep 2023</span>
            </header>
            <ul>
              <li>
                ESP32 → AWS IoT Core real-time pipelines in C++,{' '}
                <strong className={styles.accent}>20+ devices</strong>
              </li>
              <li>Full-stack prototypes (Flutter + SvelteKit) for investor demos</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
