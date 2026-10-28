import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Space+Grotesk:wght@500;700&display=swap",
  },
  { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alex Ventura",
  url: "https://alex.ventulab.com",
  image: "https://alex.ventulab.com/og-image.png",
  jobTitle: "Senior Software Engineer",
  description:
    "Senior Software Engineer with 14+ years building scalable systems for fintech and gaming. Expert in Golang, TypeScript, React, Node.js, and AWS. Open to remote opportunities worldwide.",
  email: "mailto:alex.rv11@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  sameAs: [
    "https://www.linkedin.com/in/alexventuraq/",
    "https://github.com/alexrv11",
  ],
  knowsAbout: [
    "Golang", "TypeScript", "JavaScript", "Java",
    "ReactJS", "Next.js", "React Native",
    "Node.js", "GraphQL", "gRPC", "WebSockets",
    "AWS Lambda", "API Gateway", "DynamoDB", "S3", "SQS", "EKS", "SST",
    "PostgreSQL", "MongoDB", "Redis", "ElasticSearch",
    "Kafka", "RabbitMQ", "Docker", "GitHub Actions",
    "Microservices", "Domain-Driven Design", "Serverless Architecture",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Senior Software Engineer",
    occupationLocation: {
      "@type": "City",
      name: "Remote / Buenos Aires, Argentina",
    },
    skills: "Full-Stack Development, Cloud Architecture, Backend Systems, Real-Time Systems",
  },
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#1A1210" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
