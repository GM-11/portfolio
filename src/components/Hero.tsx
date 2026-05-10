import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <p
          className={`${styles.meta} ${styles.loadIn}`}
          style={{ animationDelay: "0ms" }}
        >
          Available Immediately · Noida, India
        </p>
        <h1
          className={`${styles.headline} ${styles.loadIn}`}
          style={{ animationDelay: "100ms" }}
        >
          I build production systems, not prototypes.
        </h1>
        <p
          className={`${styles.subline} ${styles.loadIn}`}
          style={{ animationDelay: "200ms" }}
        >
          Distributed systems. AI infrastructure. Systems-level engineering.
        </p>
        <div
          className={`${styles.actions} ${styles.loadIn}`}
          style={{ animationDelay: "300ms" }}
        >
          <a className={styles.ghostButton} href="#projects">
            See My Work
          </a>
          <a
            className={styles.ghostButton}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read My Resume
          </a>
        </div>
        <p
          className={`${styles.edgeText} ${styles.loadIn}`}
          style={{ animationDelay: "400ms" }}
        >
          Go · Rust · C++ · Java · Python
        </p>
      </div>
    </section>
  );
}
