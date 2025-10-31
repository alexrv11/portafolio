import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Button from "~/components/Button";
import Snackbar from "../components/Snackbar";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("https://api.portafolio.ventulab.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
        setSnackbarOpen(true);
      } else {
        setStatus("Error sending message.");
      }
    } catch {
      setStatus("Network error.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-2 lg:px-4"
    >
      <div className=" w-full max-w-4xl flex flex-col md:flex-row gap-2 text-[#312450]">

        <div className="flex-1 flex flex-col justify-center rounded-2xl gap-6">
          <div>
            <h2 className="text-sm uppercase font-bold leading-loose opacity-40">I'm here to help you</h2>
            <div className="text-5xl mt-2">
              <span className="font-bold">Discuss </span>
              <span>Your Software Solution Needs</span>
            </div>
          </div>
          <div>
            <span className="opacity-60">Are you looking for top quality software solutions tailored to your needs? Reach out with a message</span>
          </div>
        </div>
        <div className="flex-1 border-[0.2px] border-[#312450]/20 rounded-2xl p-6 shadow-lg">
          <form method="post" action="#" className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name} onChange={handleChange}
                  className="w-full rounded-lg border-[0.8px]  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00c896] focus:border-0"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block  font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={form.email} onChange={handleChange}
                  className="w-full rounded-lg border-[0.8px] focus:border-0  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00c896]"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={form.message} onChange={handleChange}
                className="w-full rounded-lg border-[0.8px] focus:border-0  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00c896]"
              ></textarea>
            </div>
            <div>
              <Button type="submit" disabled={status === "Sending..."} className="bg-[#312450] hover:bg-[#00c896]">
                <span>{status === "Sending..." ? "Sending" : "Send Message"}</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Snackbar
        message="Your message has been sent!"
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
      />
    </section>
  );
}
