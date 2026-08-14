import useIntersectionObserver from '../hooks/useIntersectionObserver'
import styles from '../styles/Stack.module.css'

const STACK_GROUPS = [
  {
    title: 'Languages',
    items: ['Java', 'TypeScript', 'JavaScript', 'Go', 'Rust', 'C++', 'Python', 'SQL'],
  },
  {
    title: 'Backend',
    items: ['Spring Boot', 'Microservices', 'REST APIs', 'GraphQL', 'gRPC', 'WebSockets', 'Node.js', 'Kafka', 'Event-Driven Architecture'],
  },
  {
    title: 'Infrastructure',
    items: ['Docker', 'Kubernetes', 'Azure AKS', 'Azure DevOps CI/CD', 'AWS Lambda', 'AWS S3', 'GitHub Actions'],
  },
  {
    title: 'AI/ML',
    items: ['RAG Pipelines', 'LLM Integration', 'Pinecone', 'Chroma', 'Vector Search', 'PyTorch', 'Transformer Architecture'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    title: 'Testing & SDLC',
    items: ['JUnit', 'Mockito', 'Jest', 'k6', 'TDD', 'Integration Testing', 'Code Reviews'],
  },
  {
    title: 'AI Dev Tools',
    items: ['GitHub Copilot', 'Claude Code', 'Cursor', 'Codex'],
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
