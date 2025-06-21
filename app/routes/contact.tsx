import { motion } from "framer-motion";
import Button from "~/components/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="bg-[#5e42a6] rounded-2xl shadow-lg w-full max-w-4xl p-8 md:p-12 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white mb-6">Get in touch</h2>
          <form method="post" action="#" className="space-y-6">
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
                  className="w-full rounded-lg border border-white/20 bg-white/10 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b74e91]"
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
                  className="w-full rounded-lg border border-white/20 bg-white/10 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b74e91]"
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
                className="w-full rounded-lg border border-white/20 bg-white/10 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b74e91]"
              ></textarea>
            </div>
            <div>
              <Button> <span>Send Message</span></Button>
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
                className="text-[#b74e91] hover:underline"
              >
                alex.rv11@gmail.com
              </a>
            </li>
            <li>
              <h3 className="font-bold text-lg">GitHub</h3>
              <a
                href="https://github.com/alexrv11"
                className="text-[#b74e91] hover:underline"
              >
                https://github.com/alexrv11
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
