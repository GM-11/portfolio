import useIntersectionObserver from '../hooks/useIntersectionObserver'
import styles from '../styles/Stack.module.css'

const STACK_GROUPS = [
  {
    title: 'Languages',
    items: ['Go', 'Rust', 'C++', 'Java', 'Python', 'TypeScript'],
  },
  {
    title: 'Backend',
    items: ['Spring Boot', 'gRPC', 'Kafka', 'WebSockets', 'REST', 'Microservices'],
  },
  {
    title: 'Infrastructure',
    items: ['Docker', 'Kubernetes', 'Azure', 'AWS', 'Nginx', 'CI/CD'],
  },
  {
    title: 'AI/ML',
    items: ['PyTorch', 'RAG Pipelines', 'Vector DBs', 'LLM Integration', 'Transformer Architecture'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'Slate.js'],
  },
]

export default function Stack() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>()

  return (
    <section id="stack" ref={ref} className={`section ${isVisible ? 'visible' : ''}`}>
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>The Stack</h2>
        <div className={styles.groups}>
          {STACK_GROUPS.map((group) => (
            <article key={group.title} className={styles.group}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
