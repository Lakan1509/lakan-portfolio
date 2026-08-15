"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const metrics = [
    { value: "7 Years", label: "Engineering Experience" },
    { value: "3M+", label: "Transactions Processed" },
    { value: "45%", label: "Latency Reduction" },
    { value: "205K+", label: "Reviews Analyzed" },
    { value: "$90K+", label: "Fraud Loss Prevention" },
    { value: "3.91", label: "Graduate GPA" },
  ];

  const projects = [
    {
      number: "01",
      title: "GPU-Accelerated LLM Inference & Performance Optimization",
      subtitle: "High-Performance AI Inference Engineering",
      tech: [
        "PyTorch",
        "CUDA",
        "TensorRT-LLM",
        "vLLM",
        "MLIR",
        "LLVM",
      ],
      description:
        "Designed and implemented GPU-accelerated LLM inference pipelines focused on latency, throughput, GPU memory utilization, batching, quantization, and hardware-aware performance optimization.",
      highlights: [
        "Benchmarked latency, throughput, and GPU memory utilization across inference backends.",
        "Optimized TensorRT-LLM configurations through batching, quantization, and engine-build tuning.",
        "Analyzed CUDA execution, GPU memory management, parallel computation, and kernel-level performance.",
        "Implemented GPU compiler optimization workflows using MLIR and LLVM.",
      ],
    },
    {
      number: "02",
      title: "Enterprise Multi-Agent AI Platform",
      subtitle: "Production-Oriented LLM, Retrieval & Agent Infrastructure",
      tech: [
        "Python",
        "FastAPI",
        "LangGraph",
        "FAISS",
        "Docker",
        "AWS",
        "CI/CD",
      ],
      description:
        "Designed a scalable enterprise AI platform combining LLM inference, retrieval, context assembly, tool execution, routing, memory, and production backend infrastructure.",
      highlights: [
        "Built scalable LLM inference and retrieval services using Python and FastAPI.",
        "Implemented LangGraph agent workflows, FAISS retrieval, context assembly, tool execution, routing, and memory.",
        "Designed backend components supporting concurrent requests and low-latency knowledge retrieval.",
        "Built containerized model-serving APIs with monitoring, automated testing, and AWS deployment.",
      ],
    },
    {
      number: "03",
      title: "Real-Time Machine Learning Fraud Detection Platform",
      subtitle: "Production ML at Financial Transaction Scale",
      tech: [
        "Python",
        "Kafka",
        "Spark",
        "Spark Streaming",
        "PySpark",
        "Dask",
        "Machine Learning",
      ],
      description:
        "Designed and optimized production real-time machine-learning infrastructure for financial fraud detection using distributed streaming, model inference, explainability, and performance optimization.",
      highlights: [
        "Processed more than 3 million financial transactions.",
        "Reduced near-real-time detection latency by 45%.",
        "Reduced false positives to fewer than 2 per 1,000 transactions.",
        "Contributed to more than $90K in annual fraud-loss prevention.",
      ],
    },
    {
      number: "04",
      title: "Large-Scale NLP & LLM Evaluation Research",
      subtitle: "Traditional Machine Learning vs GPT-4",
      tech: [
        "Python",
        "NLP",
        "GPT-4",
        "OpenAI API",
        "Random Forest",
        "Naive Bayes",
        "SVM",
      ],
      description:
        "Developed a reproducible NLP and machine-learning pipeline for more than 205,000 product reviews and compared traditional ML approaches with GPT-4 zero-shot classification.",
      highlights: [
        "Built preprocessing, normalization, feature-engineering, training, and evaluation workflows.",
        "Benchmarked Random Forest, Naive Bayes, and SVM.",
        "Evaluated GPT-4 zero-shot and mixed-sentiment classification.",
        "Performed model-behavior analysis, edge-case analysis, and prediction-error analysis.",
      ],
    },
  ];

  const skills = [
    {
      title: "Programming",
      items: [
        "C++",
        "Python",
        "C",
        "Java",
        "Scala",
        "Go",
        "SQL",
        "JavaScript",
        "TypeScript",
      ],
    },
    {
      title: "Deep Learning & AI",
      items: [
        "PyTorch",
        "JAX",
        "TensorFlow",
        "Keras",
        "Hugging Face",
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "NLP",
        "scikit-learn",
        "XGBoost",
      ],
    },
    {
      title: "LLM Systems",
      items: [
        "LLMs",
        "Transformers",
        "Embeddings",
        "Semantic Search",
        "RAG",
        "LangChain",
        "LangGraph",
        "Vector Databases",
        "Prompt Engineering",
        "Context Engineering",
      ],
    },
    {
      title: "Inference & Performance",
      items: [
        "LLM Inference",
        "Model Serving",
        "vLLM",
        "SGLang",
        "Quantization",
        "Batching",
        "Low-Latency Inference",
        "Performance Optimization",
        "CUDA",
        "TensorRT-LLM",
      ],
    },
    {
      title: "Backend & Systems",
      items: [
        "FastAPI",
        "REST APIs",
        "Microservices",
        "System Design",
        "Distributed Systems",
        "Concurrency",
        "Async Programming",
        "Fault Tolerance",
        "High Availability",
        "Linux",
      ],
    },
    {
      title: "Cloud & MLOps",
      items: [
        "AWS",
        "SageMaker",
        "S3",
        "EC2",
        "Lambda",
        "Docker",
        "Kubernetes",
        "MLflow",
        "CI/CD",
        "Monitoring",
        "Logging",
        "Tracing",
        "Observability",
      ],
    },
    {
      title: "Distributed Computing",
      items: [
        "PySpark",
        "Apache Spark",
        "Spark Streaming",
        "Kafka",
        "Dask",
        "Flink",
        "Pandas",
        "NumPy",
      ],
    },
    {
      title: "AI Evaluation & Reliability",
      items: [
        "LLM Evaluation",
        "Model Evaluation",
        "Model Benchmarking",
        "Failure-Mode Analysis",
        "Edge-Case Testing",
        "Error Analysis",
        "Model Monitoring",
        "Automated Testing",
        "Debugging",
        "Production Reliability",
      ],
    },
  ];

  const experience = [
    {
      role: "AI/ML Engineer",
      company: "Naav Tech",
      location: "United States",
      period: "Feb 2026 – Present",
      points: [
        "Evaluate and debug production AI/LLM workflows through automated testing, edge-case testing, failure-mode analysis, performance analysis, monitoring, and systematic validation.",
        "Architect and deploy production-grade RAG applications using LangGraph, LangChain, OpenAI APIs, FastAPI, embeddings, and vector databases.",
        "Design and optimize low-latency model-inference services and scalable inference backend components for real-time AI applications.",
        "Apply distributed systems, concurrency, fault tolerance, debugging, and performance-optimization techniques.",
        "Design AWS AI architectures using SageMaker, S3, Lambda, REST APIs, monitoring, deployment, and lifecycle management.",
        "Build reusable MLOps and LLMOps platforms using Docker, CI/CD, model versioning, monitoring, and experiment tracking.",
      ],
    },
    {
      role: "Graduate Research Assistant",
      company: "Avila University",
      location: "United States",
      period: "Apr 2024 – Dec 2025",
      points: [
        "Built a reproducible Python NLP and machine-learning pipeline for more than 205K product reviews.",
        "Designed model-evaluation and benchmarking workflows for Random Forest, Naive Bayes, and SVM.",
        "Evaluated GPT-4 through the OpenAI API for zero-shot and mixed-sentiment classification.",
        "Analyzed model behavior, prediction errors, edge cases, and performance trade-offs.",
        "Surveyed BERT, CNN/RNN/Bi-LSTM, Llama 2, Word2Vec, GloVe, FastText, and ELMo.",
      ],
    },
    {
      role: "Software Engineer",
      company: "HCLTech",
      location: "Hyderabad, India",
      period: "Sep 2020 – Dec 2023",
      points: [
        "Designed and built a production real-time machine-learning inference platform processing more than 3M financial transactions.",
        "Integrated model inference, Kafka, Spark Streaming, and distributed backend components into scalable production pipelines.",
        "Reduced near-real-time detection latency by 45% by identifying and resolving performance bottlenecks.",
        "Reduced false positives to fewer than 2 per 1,000 transactions using ROC-AUC, Precision-Recall, SHAP, and LIME.",
        "Conducted A/B testing between rule-based and ML-based fraud detection approaches and contributed to more than $90K in annual fraud-loss prevention.",
      ],
    },
    {
      role: "Associate Software Engineering",
      company: "HCLTech",
      location: "Hyderabad, India",
      period: "Sep 2019 – Aug 2020",
      points: [
        "Developed and maintained C++, Java, and Scala components within a large enterprise codebase.",
        "Applied object-oriented design, code reviews, automated testing, debugging, and production-engineering practices.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
<nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
    <a href="#" className="text-xl font-bold tracking-tight">
      Lakan<span className="text-gray-500">.</span>
    </a>

    {/* DESKTOP MENU */}
    <div className="hidden items-center gap-7 text-sm text-gray-400 md:flex">
      <a className="transition hover:text-white" href="#about">
        About
      </a>

      <a className="transition hover:text-white" href="#projects">
        Projects
      </a>

      <a className="transition hover:text-white" href="#experience">
        Experience
      </a>

      <a className="transition hover:text-white" href="#skills">
        Skills
      </a>

      <a className="transition hover:text-white" href="#education">
        Education
      </a>

      <a className="transition hover:text-white" href="#contact">
        Contact
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-white/20 px-4 py-2 text-white transition hover:bg-white hover:text-black"
      >
        Resume
      </a>
    </div>

    {/* MOBILE MENU BUTTON */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
      aria-label="Toggle navigation menu"
    >
      <div className="space-y-1.5">
        <span className="block h-0.5 w-5 bg-white" />
        <span className="block h-0.5 w-5 bg-white" />
        <span className="block h-0.5 w-5 bg-white" />
      </div>
    </button>
  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
      <div className="flex flex-col gap-5 text-gray-400">
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="transition hover:text-white"
        >
          About
        </a>

        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="transition hover:text-white"
        >
          Projects
        </a>

        <a
          href="#experience"
          onClick={() => setMenuOpen(false)}
          className="transition hover:text-white"
        >
          Experience
        </a>

        <a
          href="#skills"
          onClick={() => setMenuOpen(false)}
          className="transition hover:text-white"
        >
          Skills
        </a>

        <a
          href="#education"
          onClick={() => setMenuOpen(false)}
          className="transition hover:text-white"
        >
          Education
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="transition hover:text-white"
        >
          Contact
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/20 px-4 py-3 text-center text-white"
        >
          Resume
        </a>
      </div>
    </div>
  )}
</nav>

      {/* HERO */}
      <section className="flex min-h-screen items-center justify-center px-6 pt-24">
        <div className="max-w-6xl text-center">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-gray-400">
            Software & AI/ML Engineer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            LAKAN SINGH DEGAVATH
          </h1>

          <h2 className="mx-auto mt-7 max-w-5xl text-2xl font-semibold leading-tight text-gray-300 md:text-4xl">
            Building production AI systems that reason, retrieve, and scale.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Software and AI/ML Engineer with 7 years of experience building
            production-grade AI systems, LLM applications, scalable inference
            services, distributed systems, real-time machine learning platforms,
            and AI infrastructure.
          </p>

          <p className="mt-7 text-sm text-gray-500 md:text-base">
            Deep Learning Inference • LLM Systems • Distributed Systems •
            Performance Optimization
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-white px-7 py-3 font-semibold text-black transition hover:bg-gray-200"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-7 py-3 font-semibold transition hover:border-white"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/20 px-7 py-3 font-semibold transition hover:border-white"
            >
              Contact Me
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-8 flex justify-center gap-6 text-sm text-gray-500">
            <a
              href="https://www.linkedin.com/in/lakan-singh-degavath-b88208165/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Lakan1509"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="border-white/10 px-5 py-10 text-center lg:border-r"
            >
              <p className="text-3xl font-bold md:text-4xl">
                {metric.value}
              </p>

              <p className="mt-2 text-xs uppercase tracking-wider text-gray-500">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <div className="grid gap-14 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              About
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Engineering AI for
              <span className="block text-gray-500">production.</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-400">
            <p>
              I&apos;m a Software and AI/ML Engineer with 7 years of experience
              designing, developing, evaluating, and deploying production-grade
              software, machine-learning, and artificial-intelligence systems.
            </p>

            <p>
              My engineering interests sit at the intersection of AI models,
              high-performance inference, backend engineering, and distributed
              systems.
            </p>

            <p>
              I build production AI applications using Python, C++, PyTorch,
              TensorFlow, JAX, FastAPI, LangGraph, LangChain, AWS, Docker,
              Kubernetes, Kafka, and Spark.
            </p>

            <p>
              My focus is not only getting AI models to work, but making them
              scalable, reliable, observable, testable, and production-ready.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-white/10 bg-white/[0.02] px-6 py-28 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-3xl text-lg text-gray-400">
            Selected AI, machine-learning, inference, and distributed-systems
            projects focused on production performance, reliability, and scale.
          </p>

          <div className="mt-14 grid gap-6">
            {projects.map((project) => (
              <article
                key={project.number}
                className="rounded-2xl border border-white/10 bg-black p-7 transition duration-300 hover:-translate-y-1 hover:border-white/30 md:p-10"
              >
                <div className="grid gap-8 md:grid-cols-[0.15fr_0.85fr]">
                  <div>
                    <p className="text-4xl font-bold text-gray-700">
                      {project.number}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                      {project.subtitle}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-4xl leading-7 text-gray-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-7 space-y-3 text-gray-400">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="mx-auto max-w-7xl px-6 py-28 md:py-36"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Career
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Professional Experience
        </h2>

        <div className="mt-14 space-y-8">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="rounded-2xl border border-white/10 p-7 transition hover:border-white/20 md:p-9"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-2xl font-bold">
                    {job.role}
                  </h3>

                  <p className="mt-1 text-lg text-gray-400">
                    {job.company}
                  </p>
                </div>

                <div className="md:text-right">
                  <p className="text-gray-300">
                    {job.period}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {job.location}
                  </p>
                </div>
              </div>

              <ul className="mt-7 space-y-3 text-gray-400">
                {job.points.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    <span className="leading-7">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-y border-white/10 bg-white/[0.02] px-6 py-28 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Technical Stack
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Technical Skills
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl border border-white/10 bg-black p-6 transition hover:border-white/20"
              >
                <h3 className="text-xl font-semibold">
                  {skill.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Research
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          AI & NLP Research
        </h2>

        <div className="mt-12 rounded-2xl border border-white/10 p-8 md:p-10">
          <h3 className="text-2xl font-bold">
            Large-Scale Sentiment Analysis Using Machine Learning & LLMs
          </h3>

          <p className="mt-5 max-w-4xl leading-8 text-gray-400">
            Conducted graduate research comparing traditional machine-learning
            approaches with GPT-4 for sentiment classification across more than
            205,000 product reviews. The work focused on reproducible model
            evaluation, traditional ML baselines, zero-shot LLM classification,
            model behavior, edge cases, prediction errors, and performance
            trade-offs.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "NLP",
              "GPT-4",
              "LLM Evaluation",
              "Model Benchmarking",
              "Sentiment Analysis",
              "Error Analysis",
              "Machine Learning",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="border-y border-white/10 bg-white/[0.02] px-6 py-28 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Education
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Academic Background
          </h2>

          <div className="mt-12 rounded-2xl border border-white/10 bg-black p-8 md:p-10">
            <div className="flex flex-col justify-between gap-5 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold">
                  Avila University
                </h3>

                <p className="mt-2 text-xl text-gray-300">
                  M.S. Computer Science — AI/ML Specialization
                </p>

                <p className="mt-3 text-gray-500">
                  United States
                </p>
              </div>

              <div className="md:text-right">
                <p className="text-3xl font-bold">
                  3.99 / 4.0
                </p>

                <p className="mt-2 text-sm uppercase tracking-wider text-gray-500">
                  GPA
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-semibold">
                Relevant Coursework
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Distributed Systems",
                  "Machine Learning",
                  "Artificial Intelligence",
                  "Cloud Computing",
                  "Data Structures & Algorithms",
                  "Computer Networks",
                  "Software Engineering",
                  "Big Data Analytics",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-28 md:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Contact
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Let&apos;s build production AI systems.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-400">
            I&apos;m interested in Software Engineering, AI/ML Engineering,
            Generative AI, ML Systems, LLM Infrastructure, AI Infrastructure,
            and Distributed Systems opportunities.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:lakansingh53@gmail.com"
              className="rounded-lg bg-white px-7 py-3 font-semibold text-black transition hover:bg-gray-200"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/lakan-singh-degavath-b88208165/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-7 py-3 font-semibold transition hover:border-white hover:bg-white hover:text-black"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Lakan1509"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-7 py-3 font-semibold transition hover:border-white hover:bg-white hover:text-black"
            >
              GitHub
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-7 py-3 font-semibold transition hover:border-white hover:bg-white hover:text-black"
            >
              Resume
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-600">
            United States • lakansingh53@gmail.com
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Lakan Singh Degavath</p>

          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/lakan-singh-degavath-b88208165/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Lakan1509"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
          </div>

          <p>Software & AI/ML Engineer</p>
        </div>
      </footer>
    </main>
  );
}