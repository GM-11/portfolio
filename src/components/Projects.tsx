import useIntersectionObserver from "../hooks/useIntersectionObserver";
import styles from "../styles/Projects.module.css";

const GITHUB_ICON = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2A10 10 0 0 0 8.84 21.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18a2.64 2.64 0 0 0-1.1-1.45c-.9-.62.07-.61.07-.61a2.08 2.08 0 0 1 1.52 1.02 2.11 2.11 0 0 0 2.89.83 2.1 2.1 0 0 1 .63-1.32c-2.22-.25-4.56-1.11-4.56-4.95a3.86 3.86 0 0 1 1.03-2.68 3.58 3.58 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.9-1.3 2.75-1.02 2.75-1.02.37.84.4 1.8.1 2.64a3.85 3.85 0 0 1 1.03 2.68c0 3.85-2.34 4.7-4.57 4.95a2.35 2.35 0 0 1 .67 1.82v2.7c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
    />
  </svg>
);

const EDITOR_METRICS = [
  { value: "738 msg/sec", label: "Kafka Throughput" },
  { value: "400+ ops/sec", label: "Concurrent Ops" },
  { value: "100 concurrent users", label: "AKS Load" },
  { value: "0% error rate", label: "Under Full Load" },
];

const LEGAL_AI_METRICS = [
  { value: "15,000+", label: "Search Requests" },
  { value: "711ms p95", label: "Search Latency" },
  { value: "1,900+", label: "Uploads Sustained" },
  { value: "850ms p95", label: "Ingestion Latency" },
];

export default function Projects() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className={`section ${isVisible ? "visible" : ""}`}
    >
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>What I&apos;ve Built</h2>
        <div className={styles.cards}>
          <article className={styles.card}>
            <header className={styles.cardHeader}>
              <h3>Legal AI Assistant Platform</h3>
              <p>Distributed microservices for legal document search and RAG.</p>
            </header>
            <p className={styles.body}>
              5 independently deployable microservices with Kafka event-driven
              async document processing, RAG-based semantic search via Pinecone,
              JWT auth with refresh token rotation, and k6-validated load testing.
            </p>
            <div className={styles.metrics}>
              {LEGAL_AI_METRICS.map((metric) => (
                <p key={metric.label}>
                  <span>{metric.value}</span>
                  {metric.label}
                </p>
              ))}
            </div>
            <div className={styles.bottomRow}>
              <ul className={styles.tags} aria-label="Tech stack">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Go</li>
                <li>Kafka</li>
                <li>Pinecone</li>
                <li>PostgreSQL</li>
              </ul>
              <a
                className={styles.iconLink}
                href="https://github.com/GM-11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Legal AI Assistant repository"
              >
                {GITHUB_ICON}
              </a>
            </div>
          </article>
          <article className={styles.card}>
            <header className={styles.cardHeader}>
              <h3>Realtime Collaborative Document Editor</h3>
              <p>Google Docs, from first principles.</p>
            </header>
            <p className={styles.body}>
              C++ Operational Transformation engine integrated with a Go
              WebSocket server, Kafka event sourcing at 738 msg/sec, Spring Boot
              JWT/JWKS auth, and Azure AKS deployment with horizontal pod
              autoscaling.
            </p>
            <div className={styles.metrics}>
              {EDITOR_METRICS.map((metric) => (
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
              Built a GPT-style decoder Transformer in PyTorch. Multi-head
              attention, positional embeddings, causal masking. 6-layer model
              (384-dim, 6 heads, 1024 FFN). Full training pipeline with
              tiktoken.
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
              <h3>Siemens Enterprise RAG Platform</h3>
              <p>
                Production RAG platform across 3 global regions. Java/Spring Boot
                microservices, Chroma vector search, Redis caching.
              </p>
            </header>
            <p className={styles.label}>
              Professional · NDA applies · Details on request
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
