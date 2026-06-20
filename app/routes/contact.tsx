import { useFetcher } from "react-router";
import Button from "~/components/Button";
import Snackbar from "../components/Snackbar";
import { useEffect, useState } from "react";

const inputClass =
  "w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#312450]/30 focus:border-[#312450] transition-all duration-200";

const contactDetails = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Location",
    value: "Buenos Aires, Argentina",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "alex.rv11@gmail.com",
    href: "mailto:alex.rv11@gmail.com",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Phone",
    value: "(+54) 911-34034426",
    href: "tel:+5491134034426",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/alexrv11",
    href: "https://github.com/alexrv11",
  },
];

export default function Contact() {
  const fetcher = useFetcher<{ ok: boolean; error?: string }>();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const isSubmitting = fetcher.state === "submitting";
  const result = fetcher.data;

  useEffect(() => {
    if (result?.ok) {
      setSnackbarOpen(true);
    }
  }, [result]);

  return (
    <section className="flex-1 flex items-center justify-center py-16 px-4 bg-gray-50">
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row">

        {/* Left panel — info */}
        <div className="bg-[#312450] md:w-80 shrink-0 flex flex-col justify-between">

          {/* Mobile: compact header row */}
          <div className="flex md:hidden items-center justify-between px-6 py-5">
            <div>
              <h2 className="text-base font-bold text-white leading-tight">Alex Ventura</h2>
              <p className="text-white/50 text-xs font-medium tracking-widest uppercase mt-0.5">
                Senior Fullstack Developer
              </p>
            </div>
            <div className="flex items-center gap-3">
              {contactDetails
                .filter(({ href }) => !!href)
                .map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href!.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white/50 hover:text-[#00c896] transition-colors"
                  >
                    {icon}
                  </a>
                ))}
            </div>
          </div>

          {/* Desktop: full detail list */}
          <div className="hidden md:flex flex-col justify-between flex-1 p-10">
            <div>
              <h2 className="text-2xl font-bold text-white leading-tight">Alex Ventura</h2>
              <p className="text-white/50 text-sm font-medium tracking-widest uppercase mt-1 mb-8">
                Senior Fullstack Developer
              </p>
              <ul className="space-y-5">
                {contactDetails.map(({ icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="text-white/40 mt-0.5 shrink-0">{icon}</span>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-white text-sm hover:text-[#00c896] transition-colors break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-white/20 text-xs mt-10">Open to remote opportunities worldwide.</p>
          </div>
        </div>

        {/* Right panel — form */}
        <div className="flex-1 bg-white p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-[#312450] mb-1">Get in touch</h3>
          <p className="text-gray-400 text-sm mb-8">
            Have a project in mind or want to connect? Send a message.
          </p>

          <fetcher.Form method="post" className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Alex Doe"
                  required
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="alex@example.com"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
                className={`${inputClass} resize-none`}
              />
            </div>

            {result?.ok === false && (
              <p className="text-red-500 text-sm">{result.error}</p>
            )}

            <div className="flex items-center justify-between gap-4 pt-1">
              <p className="text-gray-400 text-xs">I usually reply within 24 hours.</p>
              <Button type="submit" disabled={isSubmitting}>
                <span>{isSubmitting ? "Sending…" : "Send Message"}</span>
              </Button>
            </div>
          </fetcher.Form>
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
