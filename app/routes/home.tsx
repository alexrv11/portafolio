import nodemailer from "nodemailer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import About from "./about";
import Works from "./works";
import Services from "./services";
import Contact from "./contact";
import type { Route } from "./+types/home";
import ChatWidget from "~/components/ChatWidget";

const SITE_URL = "https://alex.ventulab.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export function meta({}: Route.MetaArgs) {
  const title = "Alex Ventura | Senior Software Engineer — Golang · TypeScript · React · AWS";
  const description =
    "Senior Software Engineer with 14+ years building scalable systems for fintech and gaming. Expert in Golang, TypeScript, React, Node.js, and AWS. Open to remote opportunities worldwide.";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "Alex Ventura, Senior Software Engineer, Golang Developer, TypeScript, React, Node.js, AWS, Serverless, Backend Engineer, Fullstack Developer, Remote Software Engineer, Fintech Engineer, Buenos Aires, Software Architect",
    },
    { name: "author", content: "Alex Ventura" },
    { name: "robots", content: "index, follow" },

    /* Canonical */
    { tagName: "link", rel: "canonical", href: SITE_URL },

    /* Open Graph */
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE_URL },
    { property: "og:site_name", content: "Alex Ventura" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Alex Ventura — Senior Software Engineer" },
    { property: "og:locale", content: "en_US" },

    /* Twitter / X Card */
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: OG_IMAGE },
    { name: "twitter:image:alt", content: "Alex Ventura — Senior Software Engineer" },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "All fields are required." };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px">
          <h2 style="color:#312450">New portfolio message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    return { ok: true };
  } catch (err) {
    console.error("Email send error:", err);
    return { ok: false, error: "Failed to send message. Please try again." };
  }
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function HeroSection() {
  const [title, setTitle] = useState("");
  const fullText = "Senior Backend Engineer";

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        setTitle(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) clearInterval(interval);
      }, 60);
      return () => clearInterval(interval);
    }, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex-1 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full py-16 md:py-0 flex flex-col md:flex-row md:items-center gap-10 md:gap-16">

        {/* Left — identity */}
        <div className="flex-1 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-xs font-medium uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--color-brand-text)", fontFamily: "var(--font-mono)" }}
            >
              // available for remote roles
            </p>
            <h1
              className="font-bold leading-[1.05] mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text)",
                fontSize: "clamp(2.6rem, 6vw, 4rem)",
              }}
            >
              alex ventura
            </h1>
            <h2
              className="text-lg md:text-xl font-medium tracking-wider"
              style={{ color: "var(--color-brand-text)", fontFamily: "var(--font-mono)" }}
            >
              {title}
              <span
                className="inline-block w-0.5 h-5 ml-0.5 align-middle"
                style={{
                  background: "var(--color-brand)",
                  animation: title === fullText ? "blink 1s step-end infinite" : "none",
                }}
              />
              <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg leading-relaxed max-w-md"
            style={{ color: "var(--color-text-muted)" }}
          >
            14+ years building high-throughput systems for fintech and gaming.
            Specialist in Go, Kafka, PostgreSQL, and Kubernetes on AWS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollToSection("works")}
              className="px-5 py-2.5 rounded-[10px] text-sm font-semibold transition-colors duration-150"
              style={{
                background: "var(--color-brand)",
                color: "var(--color-on-brand)",
                minHeight: 44,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--color-brand-hover)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--color-brand)"; }}
            >
              View experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2.5 rounded-[10px] text-sm font-semibold border transition-colors duration-150"
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                minHeight: 44,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--color-surface-2)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = ""; }}
            >
              Let&apos;s talk
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex gap-6 pt-2"
          >
            {[
              { value: "14+", label: "years exp." },
              { value: "8", label: "years Go" },
              { value: "30%", label: "cloud savings" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                >
                  {value}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — chat */}
        <motion.div
          className="w-full md:w-105 lg:w-115 shrink-0"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChatWidget />
        </motion.div>

      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <section id="home" className="min-h-screen flex flex-col relative" style={{ background: "var(--color-bg)" }}>
        <HeroSection />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="works">
        <Works />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
