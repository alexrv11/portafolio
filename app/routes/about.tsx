const stats = [
  { value: "14+", label: "Years of experience" },
  { value: "5", label: "Companies & clients" },
  { value: "30%", label: "Cloud cost reduction at Blaze" },
];

const skills = [
  {
    category: "Languages",
    items: ["Golang", "TypeScript", "JavaScript", "Java"],
  },
  {
    category: "Frontend",
    items: ["ReactJS", "Next.js", "React Native"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "GraphQL", "gRPC", "Spring Boot", "Gin Gonic", "Gorilla Mux", "WebSockets"],
  },
  {
    category: "Cloud & Infra",
    items: ["AWS Lambda", "API Gateway", "S3", "SQS", "CloudFront", "DynamoDB", "EKS", "Cognito", "Docker", "SST"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "ElasticSearch", "Oracle", "DynamoDB"],
  },
  {
    category: "Messaging & CI/CD",
    items: ["Kafka", "RabbitMQ", "EventBridge", "GitHub Actions", "GitLab CI", "Docker Compose"],
  },
  {
    category: "AI Tools",
    items: ["Apify/scraping", "Claude Code", "OpenAI", "Ollama", "NotebookLM", "Tesseract OCR", "AWS Textract"],
  },
];

export default function About() {
  return (
    <div style={{ background: "var(--color-surface)" }}>
      {/* Hero */}
      <section className="border-b" style={{ background: "var(--color-bg)", borderColor: "var(--color-border)" }}>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row md:items-center gap-12">
          {/* Text */}
          <div className="flex-1">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "var(--color-brand-text)", fontFamily: "var(--font-mono)" }}
            >
              // About me
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
            >
              Developer.
              <br />
              Architect.
              <br />
              <span style={{ color: "var(--color-brand-text)" }}>Creator.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: "var(--color-text-muted)" }}>
              Software Developer with 14+ years of experience building high-quality web
              applications for the fintech and gaming industries. Specializes in cloud
              architecture and backend systems, with solid experience delivering performant
              and accessible user interfaces end-to-end. Proven track record of establishing
              engineering standards, leading code reviews, and mentoring teams.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-row md:flex-col gap-4 md:gap-6 flex-shrink-0">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex-1 md:flex-none rounded-2xl px-6 py-5 text-center md:text-left min-w-[100px] border"
                style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
              >
                <p
                  className="text-3xl md:text-4xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                >
                  {value}
                </p>
                <p className="text-xs mt-1 leading-snug" style={{ color: "var(--color-text-muted)" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p
          className="text-xs font-bold tracking-widest uppercase mb-2"
          style={{ color: "var(--color-brand-text)", fontFamily: "var(--font-mono)" }}
        >
          // Tech stack
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold mb-10"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          Skills &amp; Technologies
        </h2>

        <div className="flex flex-col gap-8">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full" style={{ background: "var(--color-brand)" }} />
                <h3
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}
                >
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-2.5 py-1 rounded-full uppercase tracking-[0.12em]"
                    style={{
                      background: "var(--color-brand-soft)",
                      color: "var(--color-brand-text)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
