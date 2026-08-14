# Gopal Mathur

**Software Development Engineer | Distributed Systems · AI Infrastructure · Backend**  
Noida, India · Available immediately

I build production systems, not prototypes. My work spans distributed backend architecture, AI/RAG infrastructure, and systems-level engineering across Java, Go, Rust, and C++.

## Experience

### Siemens Technology and Services — Software Development Engineer Intern
**May 2025 – May 2026**
- Built Java/Spring Boot microservices and REST APIs, shipping production features across **3 global regions** through the full SDLC.
- Eliminated deployment downtime and reached **85% automated test coverage** via Azure DevOps CI/CD with JUnit/Mockito and structured code reviews.
- Cut REST API response times **40%** and sustained **0% errors under 100 concurrent users** via token-bucket rate limiting, validated with k6.
- Reduced enterprise content-development time **40%** for 100+ users with a RAG platform (LLM + Chroma), cutting latency 30% via Redis caching.

### Digital Asset Network — Software Development Engineer Intern
**Sep 2024 – Mar 2025**
- Delivered secure real-time transaction processing for **700+ users** at **99.9% uptime** and sub-200ms latency via Rust smart contracts on Solana and TON.
- Increased user engagement **25%** with a TypeScript/React dashboard with WebSocket real-time price feeds and multi-chain wallet integration, serving **200+ daily active users**.

### Ezinore Private Limited — Software Development Engineer Intern
**Feb 2023 – Sep 2023**
- Architected an event-driven ingestion pipeline on AWS IoT Core, streaming telemetry from **20+ edge devices** into NoSQL storage for continuous industrial monitoring.
- Accelerated prototype delivery by **3 weeks** by building cross-platform dashboards with live monitoring, configurable alerts, and historical trend visualization.

## Projects

### Legal AI Assistant Platform
Distributed microservices platform for legal document search and RAG-based semantic retrieval.

- 5 independently deployable microservices with Kafka event-driven async document processing
- **15,000+ search requests** served at **711ms p95 latency** via semantic + metadata-aware filtering
- **1,900+ uploads** sustained at **850ms p95** through an async ingestion pipeline
- JWT auth with refresh token rotation and RBAC, validated at **100% login success under 100 virtual users**
- Stack: Java · Spring Boot · Go · Kafka · PostgreSQL · Pinecone · WebSocket · JWT · k6

### Realtime Collaborative Document Editor
Google Docs-style collaborative editor built from first principles.

- C++ Operational Transformation engine — **400+ concurrent ops/sec with zero conflicts**
- Kafka event sourcing scaled to **738 msg/sec at 0% error rate**
- Spring Boot auth service with JWT validation and JWKS key rotation
- Deployed to Azure AKS with Dockerized microservices, horizontal pod autoscaling, and automated failover for **100 concurrent users**
- Stack: C++ · Go · Java/Spring Boot · React · Kafka · PostgreSQL · Azure AKS · WebSockets

### Custom Decoder-only GPT
GPT-style decoder Transformer built from scratch in PyTorch.

- Multi-head attention, positional embeddings, causal masking
- 6-layer model (384-dim, 6 heads, 1024 FFN)
- End-to-end training pipeline with tiktoken
- Stack: Python · PyTorch · Transformers

### Siemens Enterprise RAG Platform
Production RAG platform across 3 global regions. Java/Spring Boot microservices, Chroma vector search, Redis caching. NDA applies.

## Technical Stack

- **Languages:** Java, TypeScript, JavaScript, Go, Rust, C++, Python, SQL
- **Backend:** Spring Boot, Microservices, REST APIs, GraphQL, gRPC, WebSockets, Node.js, Kafka, Event-Driven Architecture
- **Infrastructure:** Docker, Kubernetes, Azure AKS, Azure DevOps CI/CD, AWS Lambda, AWS S3, GitHub Actions
- **AI/ML:** RAG Pipelines, LLM Integration, Pinecone, Chroma, Vector Search, PyTorch, Transformer Architecture
- **Databases:** PostgreSQL, MongoDB, Redis, Elasticsearch
- **Testing & SDLC:** JUnit, Mockito, Jest, k6, TDD, Integration Testing, Code Reviews
- **AI Dev Tools:** GitHub Copilot, Claude Code, Cursor, Codex
- **Frontend:** React, Next.js, Vite, Slate.js

## Education

**Delhi Technological University** — B.Tech, Automotive Engineering (2022–2026) · CGPA: 7.9  
Coursework: Data Structures & Algorithms, Computer Networks, Database Management, Operating Systems

## Achievements

- President, WEB3DTU (DTU Blockchain Society) — grew community to 150+ members
- 3rd Place, Blockbash Hackathon (Open Category), Crewsphere ICP Hub India
- Certifications: Software Architecture Patterns (LinkedIn Learning) · PyTorch for Deep Learning (DeepLearning.AI)

## Contact

- **Email:** [mathurgopal1001@gmail.com](mailto:mathurgopal1001@gmail.com)
- **GitHub:** [github.com/GM-11](https://github.com/GM-11)
- **LinkedIn:** [linkedin.com/in/gopalmathur](https://linkedin.com/in/gopalmathur)
