# Alex Ventura Quiroz — Résumé

**Location:** Buenos Aires, Argentina
**Email:** alex.rv11@gmail.com
**Phone:** (+54) 911 3403 4426
**GitHub:** github.com/alexrv11
**Website:** alex.ventulab.com
**Languages:** Spanish (Native), English (Advanced — C1)

---

## Summary

Senior Backend Engineer with 14+ years of experience and 8 years writing production Go, specialised in transaction processing and financial infrastructure. Has built payment services, settlement and reporting pipelines, and compliance automation at Mercado Pago, GoodLeap, and Blaze — systems where a wrong number costs money, not just uptime.

Deep hands-on experience with Kafka and event-driven architecture, PostgreSQL schema design and query optimisation, and containerised workloads and scheduled jobs on Kubernetes. Equally comfortable decomposing a monolith, migrating infrastructure to Terraform, or sitting with finance and product to turn a settlement rule into a specification.

---

## Technical Skills

### Go
8 years in production. Gin Gonic, Gorilla Mux, gRPC & Protocol Buffers, GraphQL, REST, WebSockets, concurrency patterns, pprof profiling.

### Payments & Fintech
Stripe, Fireblocks, crypto payment rails (Ethereum / ethers.js), KYC/AML compliance flows, webhook-driven settlement, idempotent transaction processing, reconciliation pipelines.

### Event Streaming & Distributed Systems
Kafka, RabbitMQ, EventBridge, SQS, DynamoDB Streams, change data capture (CDC), event-driven microservices, monolith decomposition.

### Relational & Analytical Data
PostgreSQL (schema design, indexing strategy, query optimisation, EXPLAIN analysis), Oracle, MySQL. Also DynamoDB, Redis, MongoDB, OpenSearch/ElasticSearch, BigQuery, Redshift.

### Containers & Orchestration
Kubernetes (EKS, GKE), Kubernetes CronJobs for scheduled financial workloads, Docker, Docker Compose, containerised CI runners, Helm-style service templating.

### Cloud & Infrastructure as Code
AWS: EKS, EC2, Lambda, SQS, API Gateway, S3, CloudFront, Cognito, EventBridge, CloudWatch, Textract, VPC, Route 53.
GCP: GKE, Cloud Run, Firebase.
IaC: Terraform, AWS Serverless Stack (SST), CloudFormation.

### Observability & Reliability
DataDog, New Relic, Prometheus, Kibana, Opsgenie, distributed tracing, SLA/SLO definition and alerting.

### CI/CD & Developer Platforms
GitHub Actions, GitLab CI, monorepo architecture, Jenkins, TravisCI, Codecov, Maven, Gradle, docs-as-code.

### Additional Languages & Frameworks
Java (Spring Boot), TypeScript, Node.js, React, Solidity, ASP.NET MVC, AngularJS, Angular 2.

### AI & Automation
LLM integration (OpenAI, Claude Code, Ollama), AI-driven workflow automation, AWS Textract, Tesseract OCR.

---

## Work Experience

### Blaze — Virtual Casino
**Senior Backend Engineer** | Dec 2024 – Jun 2026
*Go, TypeScript, Kubernetes, Terraform, AWS*

Blaze is an online gaming platform. Role focused on mission-critical backend services for payment processing, KYC compliance, and real-time game state, running as containerised workloads on Kubernetes (EKS) under strict latency and availability targets.

- Built and evolved the cryptocurrency payment infrastructure, from an ethers.js MVP for Ethereum to Fireblocks for multi-currency support with enterprise-grade key management — moving custody of customer funds onto an auditable, policy-controlled platform.
- Designed scheduled and background workflows as Kubernetes CronJobs for recurring financial processing, with idempotent execution so a retried or duplicated run could not double-process a transaction.
- Migrated manually provisioned AWS infrastructure into Terraform, bringing out-of-band resources under version control and making environments reproducible across dev, staging, and production.
- Architected a monorepo structure and built CI/CD pipelines with GitHub Actions that build Docker images, run the test suite in containers, and deploy to EKS — standardising the deployment path for every backend team.
- Led the migration of a legacy JavaScript codebase to a modern TypeScript stack with Drizzle ORM; integrated third-party game providers and scaled payment and notification pipelines.
- Established observability standards with DataDog and New Relic, defining SLOs, alert thresholds, and distributed tracing to hold reliability SLAs across payment and game services.
- Identified and removed system bottlenecks across AWS and Kubernetes — right-sizing requests and limits, tuning autoscaling — cutting cloud costs by roughly 30% with no loss of headroom.

---

### Kambda — Contractor for GoodLeap (US Residential Loan Origination Platform)
**Senior Backend Engineer** | Nov 2021 – Nov 2024
*Go, Kafka, PostgreSQL, EventBridge, AWS, Serverless*

GoodLeap is a US residential solar and home-improvement loan origination platform. Led the platform's migration from a monolith to Domain-Driven microservices, owning backend development across payments, event processing, and document automation.

- Built Stripe payment integrations with webhook-driven notifications and real-time WebSocket delivery to web clients, handling out-of-order and duplicate webhooks so payment state stayed correct under retry.
- Implemented real-time event-driven pipelines with Kafka and EventBridge to decouple services, replacing synchronous coupling with durable, replayable event flows that could be re-processed after a failure.
- Built a change data capture pipeline streaming DynamoDB writes into OpenSearch, separating the write path from the query path so full-text and faceted search added no read load to the operational store.
- Designed an end-to-end contract data pipeline for loan origination: AWS Textract extraction of tables and sensitive fields, normalisation into structured records, and rule-based validation against state- and city-level lending regulations across US jurisdictions — automating a previously manual compliance review.
- Designed and tuned relational schemas and queries for origination and payment data — indexing strategy, query plan analysis and partitioning of high-growth tables — to keep read latency flat as volume grew.
- Containerised services with Docker and deployed them to Kubernetes, with GitLab CI pipelines handling image builds, test execution, and rollout across all services.
- Defined and monitored SLOs for payment and notification services in DataDog; used AWS Serverless Stack (SST) with TypeScript for cost-efficient scaling of lower-traffic services.

---

### Deviget — Contractor for HookArt (NFT Marketplace)
**Senior Backend Developer** | Oct 2020 – Oct 2021
*Go, GraphQL, RabbitMQ, Kubernetes, Redis*

HookArt was an NFT marketplace for digital art. Role covered the core Go backend, real-time features, and the full Kubernetes infrastructure.

- Developed the core GraphQL API for platform entities in Go, with subscriptions for real-time updates and Agora integration for video calls in virtual art exhibitions.
- Built an event-driven image processing pipeline in Go generating multiple resolution variants on upload, decoupling transcoding latency from the upload request path.
- Managed the Kubernetes (EKS) infrastructure for core backend services — deployments, service discovery, resource limits, rolling releases — and dockerised the stack so the team could run the full environment locally with Docker Compose.
- Used RabbitMQ for asynchronous messaging between services and Redis for session state management.
- Configured CI/CD pipelines and automated continuous integration; built notification pipelines with Google Cloud Messaging.
- Deployed Solidity smart contracts on Ethereum for a decentralised auction system, and integrated WalletConnect with OAuth 2.0 and 2FA for Web3 authentication.
- Integrated OAuth 2.0 with Google authentication for both the ReactJS client and the Go server.
- Implemented passwordless authentication via magic links with session state managed in Redis.

---

### Mercado Libre / Mercado Pago
**Software Developer** | Aug 2018 – Sep 2020
*Go, Java, Node.js, React*

Mercado Pago is Latin America's largest payments platform. Worked on the merchant settlement and reporting layer through a period when payment transaction count more than doubled year over year and off-platform volume overtook marketplace volume.

- Built transaction data pipelines in Go and Java for merchant settlement and reporting, extracting from BigQuery, Oracle, and Redshift, transforming and streaming results to S3 — handling millions of payment transactions for merchants and third-party integrators.
- Implemented a Go reverse proxy to absorb high-traffic access patterns against the reporting layer, and defined and tracked SLAs for report delivery to merchants.
- Designed the end-to-end report generation pipeline with automated delivery via email, SFTP, and webhooks — an integration surface used by external merchants and partners.
- Created API services delivering analytical insights from the data platform, and developed a Java SDK for internal platform connectivity adopted by other teams.
- Packaged services as Docker containers on Mercado Libre's internal Kubernetes platform, inside a large multi-tenant infrastructure with strict reliability requirements.

---

### Globant — Contractor for JP Morgan Chase (Athena Trading Platform)
**Backend Software Developer** | Aug 2017 – Dec 2017
*.NET, AngularJS*

Worked on the Athena trading platform at JP Morgan Chase, a regulated financial environment.

- Developed a complete new payment workflow for the Athena trading platform.
- Extended SOA web services as internal REST APIs.
- Automated document validation to improve account creation flows.
- Used Docker to containerise local development dependencies and standardise environments across the team.
- Improved code quality through test coverage increases and bug fixes, working directly with product management.

---

### Jalasoft
**Core Engineer** | Jul 2014 – Jul 2017
*Java, .NET, Angular 2*

- Led a migration transitioning legacy C++ desktop accounting software to a modern Spring Boot and Angular 2 architecture, contributing to both backend APIs and frontend.
- Developed an open-source Gradle plugin for Salesforce to streamline local development and CI workflows.

---

### IdeaSoft
**.NET Developer** | Sep 2012 – Apr 2014
*ASP.NET MVC, SQL Server*

- Built financial reporting web applications with ASP.NET MVC 3, Razor, and DevExpress, backed by SQL Server and Entity Framework.
- Built a testing framework for automated report comparison — effectively data-quality regression testing on financial figures.

---

### UMSS, University of San Simón — Cochabamba, Bolivia
**Java Programming Teaching Assistant** | Sep 2009 – Apr 2013

- Mentored students in data structures, dynamic programming, and recursion.
- Participated in ICPC (International Collegiate Programming Contest) programming contests.

---

## Education

### Master in Finance
**Universidad de San Andrés (UDESA)** — Buenos Aires, Argentina
Topics: asset management, equities and bonds, market analysis, capital structure, risk management, corporate finance.

### Degree in Systems Engineering
**Universidad Mayor de San Simón (UMSS)** — Cochabamba, Bolivia | 2007 – 2012
- ICPC programming contests — **1st place, 2012 South American Regional**.
- Teaching assistant in Java, data structures, and dynamic programming.

### AWS Certified Solutions Architect
**Linux Academy** — Online
Topics: Well-Architected Framework, VPC, Route 53, EC2, ECS, Lambda, API Gateway, S3.

---

## Key Achievements & Numbers

- **30% cloud cost reduction** at Blaze by right-sizing AWS/Kubernetes resources and tuning autoscaling — with no loss of headroom.
- **14+ years** of professional software engineering experience across fintech, gaming, and marketplace platforms.
- **8 years** of production Go in increasingly senior roles.
- Worked at **Mercado Pago** through a period when payment transaction count more than doubled year over year.
- **ICPC 1st place** — 2012 South American Regional programming contest.
- Led migration of an entire engineering organisation's deployment path to a standardised monorepo + CI/CD pipeline at Blaze.
- Automated a previously manual compliance review process at GoodLeap, validating loan contracts against US state and city-level lending regulations.

---

## Contact & Availability

- **Email:** alex.rv11@gmail.com
- **Phone:** (+54) 911 3403 4426
- **LinkedIn:** linkedin.com/in/alexventuraq
- **GitHub:** github.com/alexrv11
- **Website / Portfolio:** alex.ventulab.com
- **Location:** Buenos Aires, Argentina
- **Open to:** Remote opportunities worldwide. Available for full-time roles, long-term contracts, and consulting engagements.
