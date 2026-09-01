"use client";

const projects = [
  {
    number: "01",
    visual: "agents",
    title: "Enterprise Multi-Agent AI Platform",
    subtitle: "Agentic AI, RAG, Evaluation & Observability",
    description:
      "Production-oriented multi-agent AI platform with LangGraph orchestration, retrieval, tool execution, memory, self-correction, runtime evaluation, and observability.",
    tech: [
      "Python",
      "FastAPI",
      "LangGraph",
      "FAISS",
      "Qwen",
      "Ollama",
      "Docker",
      "Pytest",
    ],
    proof: "76 automated tests · Hit@4 1.00 · Recall@4 1.00 · MRR 1.00",
    repo: "https://github.com/Lakan1509/enterprise-multi-agent-ai-platform",
  },
  {
    number: "02",
    visual: "benchmark",
    title: "GPU-Accelerated LLM Inference Benchmark",
    subtitle: "LLM Inference & Performance Engineering",
    description:
      "Reproducible benchmarking framework for measuring LLM inference latency, throughput, batching behavior, and device-aware execution.",
    tech: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "Apple MPS",
      "Docker",
      "GitHub Actions",
    ],
    proof: "44 tests · Up to 604.88 tok/s · 11.66× batching throughput gain",
    repo: "https://github.com/Lakan1509/gpu-llm-inference-benchmark",
  },
  {
    number: "03",
    visual: "streaming",
    title: "Real-Time Fraud Detection Platform",
    subtitle: "Streaming ML & Model Evaluation",
    description:
      "Production-style fraud detection platform combining Kafka, Spark Structured Streaming, machine-learning inference, PostgreSQL, FastAPI, and held-out model evaluation.",
    tech: [
      "Python",
      "Kafka",
      "Spark",
      "scikit-learn",
      "PostgreSQL",
      "FastAPI",
      "Docker",
    ],
    proof: "12 tests · ROC-AUC 0.9947 · PR-AUC 0.8292 on synthetic benchmark",
    repo: "https://github.com/Lakan1509/real-time-fraud-detection-platform",
  },
  {
    number: "04",
    visual: "integration",
    title: "Enterprise Reporting & Data Integration Platform",
    subtitle: ".NET Enterprise Backend & Data Workflows",
    description:
      "Enterprise reporting and data-integration platform with ASP.NET Core, EF Core, Blazor, SQL-backed workflows, validation, reporting APIs, and automated integration tests.",
    tech: [
      "C#",
      ".NET 10",
      "ASP.NET Core",
      "EF Core",
      "Blazor",
      "SQL Server",
      "Docker",
      "xUnit",
    ],
    proof: "14 automated tests · CI-backed CSV integration workflow",
    repo: "https://github.com/Lakan1509/enterprise-reporting-platform",
  },
];

const skills = [
  "Python",
  "C++",
  "C# / .NET",
  "PyTorch",
  "TensorFlow",
  "LLMs",
  "Generative AI",
  "RAG",
  "LangGraph",
  "LangChain",
  "FastAPI",
  "Distributed Systems",
  "Kafka",
  "Spark / PySpark",
  "Docker",
  "Kubernetes",
  "AWS",
  "MLOps / LLMOps",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top">
          LAKAN
        </a>

        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
          <a href="#skills">Skills</a>
        </nav>

        <a className="nav-cta" href="/resume.pdf" target="_blank">
          Resume
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-identity">
          <p className="hero-name">LAKAN SINGH DEGAVATH</p>

          <div className="hero-kicker">
            <span className="status-dot" />
            AI/ML & Software Engineer
          </div>
        </div>

        <h1>
          Building production
          <span>AI systems.</span>
        </h1>

        <p className="hero-copy">
          I engineer Generative AI, LLM, RAG, agentic AI, machine learning systems,
          inference, and distributed systems — from model evaluation and
          backend architecture to production infrastructure.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            View Featured Projects
          </a>

          <a
            className="secondary-button"
            href="https://github.com/Lakan1509"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            className="secondary-button"
            href="https://www.linkedin.com/in/lakan-singh-degavath-b88208165/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="hero-proof">
          <div>
            <strong>7+</strong>
            <span>Years Engineering</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Featured Systems</span>
          </div>
          <div>
            <strong>146+</strong>
            <span>Automated Tests Across Featured Repos</span>
          </div>
          <div>
            <strong>3.91</strong>
            <span>Graduate GPA</span>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p>SELECTED ENGINEERING</p>
          <h2>Systems backed by code, tests, and measurable results.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <span>{project.number}</span>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Repository ↗
                </a>
              </div>

              <p className="project-subtitle">{project.subtitle}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className={`project-visual project-visual-${project.visual}`}>
                {project.visual === "agents" && (
                  <div className="flow-row">
                    <span>User</span>
                    <b>→</b>
                    <span>Supervisor</span>
                    <b>→</b>
                    <span>Agents</span>
                    <b>→</b>
                    <span>Tools / RAG</span>
                  </div>
                )}

                {project.visual === "benchmark" && (
                  <div className="benchmark-bars">
                    <div>
                      <span>B1</span>
                      <i style={{ width: "9%" }} />
                      <strong>51.88</strong>
                    </div>
                    <div>
                      <span>B2</span>
                      <i style={{ width: "21%" }} />
                      <strong>126.47</strong>
                    </div>
                    <div>
                      <span>B4</span>
                      <i style={{ width: "48%" }} />
                      <strong>291.81</strong>
                    </div>
                    <div>
                      <span>B8</span>
                      <i style={{ width: "100%" }} />
                      <strong>604.88 tok/s</strong>
                    </div>
                  </div>
                )}

                {project.visual === "streaming" && (
                  <div className="flow-row">
                    <span>Kafka</span>
                    <b>→</b>
                    <span>Spark</span>
                    <b>→</b>
                    <span>ML Model</span>
                    <b>→</b>
                    <span>PostgreSQL</span>
                    <b>→</b>
                    <span>API</span>
                  </div>
                )}

                {project.visual === "integration" && (
                  <div className="flow-row">
                    <span>CSV</span>
                    <b>→</b>
                    <span>Validation</span>
                    <b>→</b>
                    <span>EF Core</span>
                    <b>→</b>
                    <span>SQL</span>
                    <b>→</b>
                    <span>Reporting API</span>
                  </div>
                )}
              </div>

              <div className="project-proof">{project.proof}</div>

              <div className="tech-list">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section" id="experience">
        <div className="section-heading">
          <p>EXPERIENCE</p>
          <h2>From software engineering to production AI systems.</h2>
        </div>

        <div className="timeline">
          <article>
            <div className="timeline-meta">
              <span>Apr 2026 — Present</span>
              <span>United States</span>
            </div>

            <h3>AI/ML Engineer</h3>
            <h4>EasyBee AI</h4>

            <p>
              Building production-oriented LLM, RAG, agentic AI, inference,
              evaluation, and MLOps systems using Python, FastAPI, LangGraph,
              PyTorch, AWS, vector retrieval, and distributed backend
              infrastructure.
            </p>

            <div className="experience-tags">
              <span>LLMs</span>
              <span>RAG</span>
              <span>Agentic AI</span>
              <span>PyTorch</span>
              <span>FastAPI</span>
              <span>AWS</span>
            </div>
          </article>

          <article>
            <div className="timeline-meta">
              <span>Feb 2026 — Apr 2026</span>
              <span>United States</span>
            </div>

            <h3>Software Developer</h3>
            <h4>EasyBee AI</h4>

            <p>
              Developed enterprise application and reporting workflows using
              C#, .NET, Blazor, REST APIs, SQL-backed systems, data integration,
              and CI/CD-oriented engineering practices.
            </p>

            <div className="experience-tags">
              <span>C#</span>
              <span>.NET</span>
              <span>Blazor</span>
              <span>REST APIs</span>
              <span>SQL</span>
              <span>CI/CD</span>
            </div>
          </article>

          <article>
            <div className="timeline-meta">
              <span>Apr 2024 — Dec 2025</span>
              <span>Avila University</span>
            </div>

            <h3>Graduate Research Assistant</h3>
            <h4>AI & Machine Learning Research</h4>

            <p>
              Built a reproducible NLP and machine-learning research pipeline
              for more than 205,000 product reviews, benchmarking traditional
              classifiers against GPT-4-based zero-shot classification and
              analyzing model behavior and prediction errors.
            </p>

            <div className="experience-tags">
              <span>Python</span>
              <span>NLP</span>
              <span>GPT-4</span>
              <span>Model Evaluation</span>
              <span>Research</span>
            </div>
          </article>

          <article>
            <div className="timeline-meta">
              <span>Sep 2019 — Dec 2023</span>
              <span>Enterprise Software Engineering</span>
            </div>

            <h3>Software Engineer · Associate Software Engineer</h3>
            <h4>Backend, Distributed Systems & Performance</h4>

            <p>
              Progressed from associate-level software engineering into broader
              backend and distributed systems work across C++, Java, Scala,
              Kafka, Spark, streaming data processing, machine-learning
              infrastructure, concurrency, performance optimization, testing,
              and production reliability.
            </p>

            <div className="experience-tags">
              <span>C++</span>
              <span>Java</span>
              <span>Scala</span>
              <span>Kafka</span>
              <span>Spark</span>
              <span>Distributed Systems</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="research-heading">
          <p className="eyebrow">RESEARCH</p>
          <h2>Large-Scale NLP & LLM Evaluation</h2>
          <p className="research-intro">
            Graduate research focused on reproducible sentiment-classification
            pipelines, model benchmarking, and comparative evaluation between
            traditional machine-learning approaches and GPT-4.
          </p>
        </div>

        <div className="research-card">
          <div className="research-metric">
            <strong>205K+</strong>
            <span>Product reviews analyzed</span>
          </div>

          <div className="research-details">
            <div>
              <span className="research-label">PIPELINE</span>
              <p>
                Preprocessing → feature engineering → model training →
                evaluation → comparative analysis
              </p>
            </div>

            <div>
              <span className="research-label">MODELS</span>
              <p>
                Random Forest · Naive Bayes · SVM · Deep Learning ·
                GPT-4 Zero-Shot
              </p>
            </div>

            <div>
              <span className="research-label">EVALUATION</span>
              <p>
                Accuracy · Precision · Recall · F1 · prediction-error analysis
              </p>
            </div>

            <div>
              <span className="research-label">OUTPUT</span>
              <p>
                Reproducible experimental workflow, comparative findings,
                research presentation, and co-authored academic work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p>TECHNICAL FOUNDATION</p>
          <h2>Engineering across models, infrastructure, and systems.</h2>
        </div>

        <div className="skills-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="closing-section">
        <p>BUILDING RELIABLE AI SYSTEMS</p>
        <h2>
          From model inference
          <br />
          to production infrastructure.
        </h2>

        <div className="hero-actions">
          <a
            className="primary-button"
            href="https://www.linkedin.com/in/lakan-singh-degavath-b88208165/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn
          </a>

          <a
            className="secondary-button"
            href="https://github.com/Lakan1509"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </div>
      </section>

      <footer>
        <span>© 2026 Lakan Singh Degavath</span>
        <span>AI/ML · Software · Systems</span>
      </footer>
    </main>
  );
}
