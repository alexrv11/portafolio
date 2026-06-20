import nodemailer from "nodemailer";
import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import { motion } from "framer-motion";
import ArrowUpLeftIcon from "~/icons/arrow-up-left";
import About from "./about";
import Works from "./works";
import Services from "./services";
import Contact from "./contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alex Ventura - Senior Software Engineer" },
    {
      name: "description",
      content:
        "Discover Alex Ventura's portfolio showcasing expertise in software engineering, web development, and innovative solutions.",
    },
    {
      name: "keywords",
      content:
        "Alex Ventura, Software Engineer, Web Developer, Portfolio, React, JavaScript, Tailwind CSS",
    },
    { name: "author", content: "Alex Ventura" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "robots", content: "index, follow" },
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

function HeroSection() {
  const [title, setTitle] = useState("");
  const [shortTitle, setShortTitle] = useState("");
  const shortTitleLabel = "Sr. Software Engineer";
  const fullText = "Senior Software Engineer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTitle(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setShortTitle(shortTitleLabel.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center flex-1 px-4">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="font-bold md:text-8xl text-4xl text-[#312450]"
        >
          Alex Ventura
        </motion.div>
        <h2 className="md:text-3xl text-xl tracking-widest font-semibold mt-4 mb-4 text-center md:text-left text-[#312450]">
          <span className="hidden md:inline">{title}</span>
          <span className="inline md:hidden">{shortTitle}</span>
        </h2>
      </div>
      <div className="flex flex-col items-center md:mt-10 mt-1 mx-4">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-4 md:text-lg text-md text-gray-700 text-center"
          >
            Innovative Software Engineer skilled in full-stack development, cloud computing, and
            scalable solutions. Passionate about delivering high-quality code and enhancing user
            experiences.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <section id="home" className="min-h-screen flex flex-col bg-white relative">
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
