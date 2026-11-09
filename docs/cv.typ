#import "silver-dev-cv.typ": *

#show: cv.with(
  font-type: "PT Serif",
  continue-header: "false",
  name: "Alex Ventura Quiroz",
  address: "Buenos Aires, Argentina  ·  alex.rv11@gmail.com  ·  (+54) 911-3403-4426",
  lastupdated: "false",
  pagecount: "false",
  date: "2026",
  contacts: (
    (text: "alex.ventulab.com",            link: "https://alex.ventulab.com"),
    (text: "linkedin.com/in/alexventuraq", link: "https://linkedin.com/in/alexventuraq"),
    (text: "github.com/alexrv11",          link: "https://github.com/alexrv11"),
  ),
)

// Spacing
#set list(spacing: 0.6em, body-indent: 1em)
#set par(leading: 0.65em)
#set text(size: 10pt)

// ─── SUMMARY ────────────────────────────────────────────────────────────────

#section("Summary")
#descript([
  Senior Backend Engineer with 14+ years building large-scale cloud-native systems across fintech,
  gaming, and marketplace platforms. Proficient in Go and Java; deep hands-on experience with AWS,
  Kubernetes (EKS), Kafka, and PostgreSQL. Led platform engineering initiatives — monorepo architecture,
  CI/CD pipelines with GitHub Actions and Terraform, observability with DataDog/New Relic — and built
  AI-driven backend workflows to automate operational processes.
])
#sectionsep

// ─── SKILLS ─────────────────────────────────────────────────────────────────

#section("Skills")
#oneline-title-item(
  title: "Languages",
  content: "Go (Golang), TypeScript, JavaScript, Java, Solidity",
)
#oneline-title-item(
  title: "Backend",
  content: "Node.js, Express.js, GraphQL, gRPC, Spring Boot, Gin Gonic, Gorilla Mux, WebSockets",
)
#oneline-title-item(
  title: "Cloud & Infra",
  content: "AWS (EKS, EC2, Lambda, SQS, API Gateway, S3, CloudFront, Cognito, EventBridge), GCP (Cloud Run, GKE), Terraform, Kubernetes, Docker",
)
#oneline-title-item(
  title: "CI/CD",
  content: "GitHub Actions, GitLab CI, Monorepo architecture, Jenkins, TravisCI, Codecov, Maven, Gradle",
)
#oneline-title-item(
  title: "Observability",
  content: "DataDog, New Relic, Kibana, Opsgenie, SLA/SLO definition, distributed tracing",
)
#oneline-title-item(
  title: "Data & Messaging",
  content: "PostgreSQL, DynamoDB, MySQL, Redis, MongoDB, ElasticSearch, Oracle, Kafka, RabbitMQ, EventBridge",
)
#oneline-title-item(
  title: "AI & Automation",
  content: "LLM integration (OpenAI, Claude), AI-driven workflow automation, AWS Textract, Ollama",
)
#sectionsep

// ─── EXPERIENCE ─────────────────────────────────────────────────────────────

#section("Experience")

#job(
  position: "Senior Backend Engineer",
  institution: "Blaze — Virtual Casino",
  location: "Remote",
  date: "Dec 2024 – Jun 2026",
  description: [
    - Architected monorepo + CI/CD pipelines (GitHub Actions, Terraform) to deploy services on EKS, standardising delivery across all backend teams.
    - Built cryptocurrency payment infra from ethers.js MVP to Fireblocks for multi-currency support with enterprise-grade key management.
    - Established observability standards (DataDog): SLOs and alert thresholds across payment and game services providers.
    - Led Node.js-to-TypeScript modernization using Drizzle ORM, integrated third-party gaming providers, engineered scalable payment processing pipelines in Golang, and implemented KYC workflows for secure user onboarding and identity verification.
    - Right-sized AWS/Kubernetes resources and tuned autoscaling — cut cloud costs by *30%* with no loss of headroom.
    - Architected and developed a scalable, real-time WebSocket infrastructure using Golang and Redis Cluster, enabling distributed connection management, shared session state, and low-latency event delivery to gamers across multiple server instances.
    - Improved the reliability and operational efficiency of background job processing by implementing configurable retry strategies, defining maximum retry limits, and strengthening failure handling. Established AWS CloudWatch log retention policies to optimize storage costs and improve observability.
  ],
)

#job(
  position: "Senior Backend Engineer",
  institution: "Kambda — Contractor for GoodLeap",
  location: "Remote",
  date: "Nov 2021 – Nov 2024",
  description: [
    - Led the modernization of a monolithic Node.js/GraphQL lending platform into a DDD-based microservices architecture, owning critical domains such as payments, event processing, and document automation, while adopting serverless solutions for customer settings, loan options, and personalized offers.
    - Built Stripe integrations with webhook-driven notifications service with nestjs and real-time WebSocket delivery.
    - Implemented Kafka/EventBridge pipelines and a DynamoDB→OpenSearch CDC pipeline.
    - Automated contract compliance with AWS Textract: extraction, normalisation, and validation against US state lending regulations.
    - Optimized PostgreSQL schemas for loan origination and payment processing data, improving data organization and query efficiency. Leveraged AWS SST with TypeScript to design and deploy cost-efficient serverless services.
  ],
)

#job(
  position: "Senior Backend Developer",
  institution: "Deviget — Contractor for HookArt (Virtual Gallery)",
  location: "Remote",
  date: "Oct 2020 – Oct 2021",
  description: [
    - Built core GraphQL API in Go with real-time subscriptions and Agora video streaming provider for virtual art exhibitions.
    - Managed EKS infrastructure; dockerised full stack for local development.
    - Deployed Solidity smart contracts for decentralised auctions; integrated WalletConnect + 2FA for Web3 auth.
    - Migrated React SPA to SSR with ExpressJS/Razzle; used RabbitMQ and Redis for async messaging and sessions.
    - Implemented passwordless authentication using Auth0, enabling secure and seamless user sign-in without traditional passwords.
    - Developed seed and data hydration services to synchronize relational database records for artists, collectors, followers, and artwork with Dgraph and OpenSearch, enabling graph-based relationships and efficient search capabilities.
  ],
)

#job(
  position: "Software Developer",
  institution: "Mercado Libre / Mercado Pago",
  location: "Buenos Aires, Argentina",
  date: "Aug 2018 – Sep 2020",
  description: [
    - Built Go/Java data pipelines for merchant settlement: extracted from BigQuery/Oracle/Redshift, streamed to S3 — millions of transactions.
    - Implemented a Go reverse proxy to handle high-traffic reporting load; defined and tracked SLAs for report delivery.
    - Designed report delivery pipeline (email, SFTP, webhooks); developed a Java SDK adopted by other teams.
    - Migrated applications from the Apache Grails framework to RESTful APIs built with Golang and the Gin-Gonic web framework.
    - Integrated PayPal into Mercado Pago's payment checkout flow and enabled Mercado Pago as a payment option within PayPal's checkout process. Extended the payment reconciliation reporting system to support PayPal transactions, ensuring accurate transaction tracking and financial reconciliation across both payment platforms.
    - Developed a subscription management service using Java and RESTful APIs, enabling users to subscribe to streaming platforms such as HBO, Paramount+, and Disney+
    - Designed and implemented observability strategies using Datadog, establishing custom metrics, distributed tracing, and service-level indicators (SLIs) to define and monitor SLAs and SLOs, ensuring reliability and performance across merchant-facing services.
  ],
)

#job(
  position: "Backend Software Developer",
  institution: "Globant — Contractor for JP Morgan Chase (Athena)",
  location: "Buenos Aires, Argentina",
  date: "Aug 2017 – Dec 2017",
  description: [
    - Developed a complete new payment workflow on the Athena trading platform.
    - Extended SOA web services as internal REST APIs; automated document validation for account creation flows.
  ],
)

#job(
  position: "Core Engineer",
  institution: "Jalasoft",
  location: "Cochabamba, Bolivia",
  date: "Jul 2014 – Jul 2017",
  description: [
    - Led the migration of a legacy C++ desktop accounting system to a modern web-based architecture using .NET, Spring Boot, and Angular, modernizing core business workflows and improving maintainability and scalability.
    - Developed an open-source Gradle plugin for Salesforce to streamline local development and CI workflows.
  ],
)

#job(
  position: ".NET Developer",
  institution: "IdeaSoft",
  location: "Cochabamba, Bolivia",
  date: "Sep 2012 – Apr 2014",
  description: [
    - Built financial reporting web applications with ASP.NET MVC 3, Razor, and DevExpress backed by SQL Server and Entity Framework.
    - Built a testing framework for automated report comparison — data-quality regression testing on financial figures.
  ],
)

#sectionsep

// ─── EDUCATION ───────────────────────────────────────────────────────────────

#section("Education")

#education(
  institution: "Universidad de San Andrés (UDESA)",
  major: "Master in Finance",
  date: "Buenos Aires, Argentina",
  location: "",
  description: "",
)

#education(
  institution: "Universidad Mayor de San Simón (UMSS)",
  major: "Degree in Systems Engineering — ICPC 1st place, 2012 South American Regional",
  date: "Bolivia · 2007–2012",
  location: "",
  description: "",
)

#education(
  institution: "Linux Academy",
  major: "AWS Certified Solutions Architect",
  date: "Online",
  location: "",
  description: "",
)

#sectionsep

