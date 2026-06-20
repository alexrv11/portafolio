import { useState } from "react";

const worksData = [
  {
    company: "Blaze",
    role: "Senior Fullstack Developer",
    tech: "NodeJS · ReactJS · React Native · TypeScript · AWS",
    location: "Remote – Brazil",
    period: "Dec 2024 – Present",
    url: "https://blaze.com",
    highlights: [
      "Integrated multiple third-party game providers, expanding the catalog and improving reliability of the integration layer.",
      "Optimized AWS cloud infrastructure by right-sizing resources, reducing cloud costs by ~30%.",
      "Led migration from a legacy Node.js codebase to TypeScript, adopting Drizzle ORM for type-safe database schema management.",
      "Designed and implemented player engagement features: raffles, mystery boxes, and reward systems.",
      "Scaled critical backend processes for payments, winner distribution, and push notifications under high-traffic conditions.",
      "Implemented a KYC verification flow using third-party identity providers to ensure regulatory compliance.",
      "Built WebSocket-based real-time event handling for instant in-game notifications and live game state updates.",
    ],
    tags: ["NodeJS", "TypeScript", "ReactJS", "React Native", "AWS", "WebSockets", "KYC"],
  },
  {
    company: "Kambda – Contractor for GoodLeap",
    role: "Senior Fullstack Developer",
    tech: "Golang · TypeScript · ReactJS · NextJS · AWS Serverless",
    location: "Remote – United States",
    period: "Nov 2021 – Nov 2024",
    url: "https://goodleap.com",
    highlights: [
      "Developed APIs and web applications using the AWS Serverless Framework for rapid development and seamless infrastructure configuration.",
      "Integrated with the Stripe payment platform, leveraging webhooks to process events and trigger automated email notifications.",
      "Performed data transformation and DynamoDB schema migration to transition from monolithic services to microservices using Domain-Driven Design.",
      "Implemented a feature to analyze contract documents in PDF format, identifying potential issues using AWS Textract.",
      "Migrated and built new features within micro-frontend architectures using ReactJS for scalable modular development.",
      "Implemented WebSocket connections between backend APIs and ReactJS web apps.",
    ],
    tags: ["Golang", "TypeScript", "NextJS", "ReactJS", "AWS Serverless", "DynamoDB", "Stripe"],
  },
  {
    company: "Deviget – Contractor for HookArt",
    role: "Senior Software Developer",
    tech: "Golang · TypeScript · ReactJS · GraphQL · Web3",
    location: "Remote – United States",
    period: "Oct 2020 – Oct 2021",
    url: "https://hookart.io",
    highlights: [
      "Implemented real-time communication for virtual art exhibitions via video calls using GraphQL subscriptions in Golang integrated with Agora.",
      "Integrated OAuth 2.0 with Google authentication in the ReactJS client and Golang server.",
      "Incorporated WalletConnect for Web3 authentication, enabling Ethereum blockchain sign-ins.",
      "Migrated a ReactJS SPA to Server-Side Rendering (SSR) using ExpressJS as middleware server with Razzle.",
      "Integrated Google Cloud Messaging for push notifications to a React Native mobile app.",
      "Implemented passwordless authentication via magic links with session state managed in Redis.",
    ],
    tags: ["Golang", "TypeScript", "ReactJS", "GraphQL", "RabbitMQ", "Redis", "Web3", "GCP"],
  },
  {
    company: "Mercadolibre",
    role: "Software Developer",
    tech: "Golang · Java · ReactJS · AWS S3 · BigQuery",
    location: "Buenos Aires, Argentina",
    period: "Aug 2018 – Sep 2020",
    url: "https://mercadolibre.com",
    highlights: [
      "Worked at Mercado Pago developing reconciliation reports for merchants and third-party integrators.",
      "Implemented streaming functionality in Java and Golang for file uploads and downloads from AWS S3.",
      "Developed a data API service to retrieve and deliver information from BigQuery.",
      "Implemented a reverse proxy in Golang to manage traffic and enable report access based on users and sites.",
      "Developed an SDK client in Java to connect with the Mercado Pago report service platform.",
      "Designed a data streaming pipeline to collect, process, and generate comprehensive reports from multiple sources.",
    ],
    tags: ["Golang", "Java", "ReactJS", "AWS S3", "BigQuery", "Streaming", "SDK"],
  },
  {
    company: "Globant",
    role: "Backend Software Developer",
    tech: "NodeJS · Java · SOA",
    location: "Buenos Aires, Argentina",
    period: "Aug 2017 – Jul 2018",
    highlights: [
      "Automated user account creation with document validation flows.",
      "Extended SOA web services as internal REST API services in Java.",
      "Worked on a middleware client application for Athena's trading platform at JP Morgan Chase.",
      "Developed a complete new payment workflow and improved code quality and test coverage.",
    ],
    tags: ["NodeJS", "Java", "REST", "SOA", "JP Morgan Chase"],
  },
];

function WorkCard({
  company,
  role,
  tech,
  location,
  period,
  url,
  highlights,
  tags,
  isLast,
}: (typeof worksData)[0] & { isLast: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative flex gap-6 group">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-[#312450] mt-1.5 flex-shrink-0 ring-2 ring-[#312450] ring-offset-2" />
        {!isLast && <div className="w-0.5 bg-[#312450]/20 flex-1 mt-1" />}
      </div>

      {/* Card */}
      <div className="mb-10 flex-1 pb-2">
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
            <div>
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-[#312450] hover:text-[#5e42a6] transition-colors"
                >
                  {company}
                </a>
              ) : (
                <h3 className="text-xl font-bold text-[#312450]">{company}</h3>
              )}
              <p className="text-[#5e42a6] font-semibold text-sm mt-0.5">{role}</p>
            </div>
            <div className="text-right text-sm text-gray-500 flex-shrink-0">
              <p className="font-medium">{period}</p>
              <p>{location}</p>
            </div>
          </div>

          <p className="text-xs text-gray-400 italic mb-4">{tech}</p>

          <ul className="space-y-1.5 text-sm text-gray-700">
            {(expanded ? highlights : highlights.slice(0, 3)).map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#5e42a6] mt-1 flex-shrink-0">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {highlights.length > 3 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 text-xs text-[#5e42a6] hover:text-[#312450] font-medium transition-colors"
            >
              {expanded ? "Show less ↑" : `Show ${highlights.length - 3} more ↓`}
            </button>
          )}

          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-[#312450]/8 text-[#312450] px-2.5 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Works() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="text-3xl font-bold mb-2 text-[#312450]">Work Experience</h2>
      <p className="text-gray-500 mb-10 text-sm">14+ years building production systems across fintech, gaming, and e-commerce.</p>
      <div>
        {worksData.map((work, idx) => (
          <WorkCard
            key={idx}
            {...work}
            isLast={idx === worksData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
