const stats = [
  { value: "14+", label: "Years of experience" },
  { value: "5", label: "Companies & clients" },
  { value: "30%", label: "Cloud cost reduction at Blaze" },
];

const skills = [
  {
    category: "Languages",
    color: "bg-violet-50 text-violet-700 border-violet-200",
    dot: "bg-violet-400",
    items: ["Golang", "TypeScript", "JavaScript", "Java"],
  },
  {
    category: "Frontend",
    color: "bg-sky-50 text-sky-700 border-sky-200",
    dot: "bg-sky-400",
    items: ["ReactJS", "Next.js", "React Native"],
  },
  {
    category: "Backend",
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    dot: "bg-indigo-400",
    items: ["Node.js", "Express.js", "GraphQL", "gRPC", "Spring Boot", "Gin Gonic", "Gorilla Mux", "WebSockets"],
  },
  {
    category: "Cloud & Infra",
    color: "bg-orange-50 text-orange-700 border-orange-200",
    dot: "bg-orange-400",
    items: ["AWS Lambda", "API Gateway", "S3", "SQS", "CloudFront", "DynamoDB", "EKS", "Cognito", "Docker", "SST"],
  },
  {
    category: "Databases",
    color: "bg-teal-50 text-teal-700 border-teal-200",
    dot: "bg-teal-400",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "ElasticSearch", "Oracle", "DynamoDB"],
  },
  {
    category: "Messaging & CI/CD",
    color: "bg-rose-50 text-rose-700 border-rose-200",
    dot: "bg-rose-400",
    items: ["Kafka", "RabbitMQ", "EventBridge", "GitHub Actions", "GitLab CI", "Docker Compose"],
  },
];

export default function About() {
  return (
    <div className="bg-gray-50 flex-1">
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row md:items-center gap-12">
          {/* Text */}
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest uppercase text-[#5e42a6] mb-4">
              About me
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#312450] leading-tight mb-6">
              Developer.
              <br />
              Architect.
              <br />
              <span className="text-[#5e42a6]">Creator.</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
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
                className="flex-1 md:flex-none bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 text-center md:text-left min-w-[100px]"
              >
                <p className="text-3xl md:text-4xl font-bold text-[#312450]">{value}</p>
                <p className="text-xs text-gray-500 mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-xs font-bold tracking-widest uppercase text-[#5e42a6] mb-2">
          Tech stack
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#312450] mb-10">Skills & Technologies</h2>

        <div className="flex flex-col gap-8">
          {skills.map(({ category, color, dot, items }) => (
            <div key={category}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-2 h-2 rounded-full ${dot}`} />
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`text-sm font-medium px-3 py-1.5 rounded-full border ${color}`}
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
