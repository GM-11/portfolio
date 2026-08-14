import useIntersectionObserver from '../hooks/useIntersectionObserver'
import styles from '../styles/Contact.module.css'

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.14-.75 6.86 5.72L18.86 6H5.14Zm13.86 1.3-6.36 5.3a1 1 0 0 1-1.28 0L5 7.3v9.95c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V7.3Z"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2A10 10 0 0 0 8.84 21.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18a2.64 2.64 0 0 0-1.1-1.45c-.9-.62.07-.61.07-.61a2.08 2.08 0 0 1 1.52 1.02 2.11 2.11 0 0 0 2.89.83 2.1 2.1 0 0 1 .63-1.32c-2.22-.25-4.56-1.11-4.56-4.95a3.86 3.86 0 0 1 1.03-2.68 3.58 3.58 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.9-1.3 2.75-1.02 2.75-1.02.37.84.4 1.8.1 2.64a3.85 3.85 0 0 1 1.03 2.68c0 3.85-2.34 4.7-4.57 4.95a2.35 2.35 0 0 1 .67 1.82v2.7c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.5 8.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM5 10h3v9H5v-9Zm5 0h2.9v1.23h.04c.4-.76 1.4-1.56 2.88-1.56C18.5 9.67 20 11.1 20 14.03V19h-3v-4.41c0-1.05-.02-2.39-1.46-2.39-1.46 0-1.69 1.14-1.69 2.32V19h-3v-9Z"
      />
    </svg>
  )
}

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>()

  return (
    <section id="contact" ref={ref} className={`section ${isVisible ? 'visible' : ''}`}>
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>Let&apos;s Talk</h2>
        <ul className={styles.links}>
          <li>
            <a href="mailto:mathurgopal1001@gmail.com">
              <MailIcon />
              mathurgopal1001@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/GM-11" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
              github.com/GM-11
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/gopalmathur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              linkedin.com/in/gopalmathur
            </a>
          </li>
        </ul>
        <p className={styles.copy}>Open to SDE roles. Available immediately.</p>
      </div>
    </section>
  )
}
