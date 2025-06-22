import { useState } from "react";
import Button from "~/components/Button";
import Snackbar from "../components/Snackbar";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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
      className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="bg-[#5e42a6] rounded-2xl shadow-lg w-full max-w-4xl p-8 md:p-12 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white mb-6">Get in touch</h2>
          <form method="post" action="#" className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name} onChange={handleChange}
                  className="w-full rounded-lg border border-white/20 bg-white/10 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00c896]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={form.email} onChange={handleChange}
                  className="w-full rounded-lg border border-white/20 bg-white/10 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00c896]"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-white font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={form.message} onChange={handleChange}
                className="w-full rounded-lg border border-white/20 bg-white/10 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00c896]"
              ></textarea>
            </div>
            <div>
              <Button type="submit" disabled={status === "Sending..."} className="bg-[#312450] hover:bg-[#00c896]">
                <span>{status === "Sending..." ? "Sending" : "Send Message"}</span>
              </Button>
            </div>
          </form>
        </div>
        <div className="flex-1 flex flex-col justify-center bg-[#312450] rounded-2xl p-6">
          <ul className="space-y-4 text-white">
            <li>
              <h3 className="font-bold text-lg">Name</h3>
              <span>Alex Ventura Quiroz</span>
            </li>
            <li>
              <h3 className="font-bold text-lg">Title</h3>
              <span>SENIOR FULLSTACK DEVELOPER</span>
            </li>
            <li>
              <h3 className="font-bold text-lg">Location</h3>
              <span>Buenos Aires, Argentina</span>
            </li>
            <li>
              <h3 className="font-bold text-lg">Phone</h3>
              <span>(+54)911-34034426</span>
            </li>
            <li>
              <h3 className="font-bold text-lg">Email</h3>
              <a
                href="mailto:alex.rv11@gmail.com"
                className="text-[#00c896] hover:underline"
              >
                alex.rv11@gmail.com
              </a>
            </li>
            <li>
              <h3 className="font-bold text-lg">GitHub</h3>
              <a
                href="https://github.com/alexrv11"
                className="text-[#00c896] hover:underline"
              >
                https://github.com/alexrv11
              </a>
            </li>
          </ul>
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
