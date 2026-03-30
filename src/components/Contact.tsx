"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const contactLinks = [
  {
    label: "Email",
    value: "mostafa.magdy.moussa@gmail.com",
    href: "mailto:mostafa.magdy.moussa@gmail.com",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    label: "LinkedIn",
    value: "Mostafa Mohamed",
    href: "https://www.linkedin.com/in/mostafa-mohamed-558586155/",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"
      />
    ),
  },
  {
    label: "GitHub",
    value: "mostafammagdy",
    href: "https://github.com/mostafammagdy",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    ),
  },
  {
    label: "Phone",
    value: "514-649-3137",
    href: "tel:+15146493137",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
  },
];

const FORMSPREE_URL = "https://formspree.io/f/mdapgger";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          id="contact"
          title="Contact"
          subtitle="Let's work together"
          sectionNumber={6}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/60 rounded-xl hover:border-cyan-400/20 transition-all duration-300 group card-hover"
            >
              <div className="p-2.5 bg-cyan-400/[0.07] rounded-lg group-hover:bg-cyan-400/[0.12] transition-colors shrink-0">
                <svg
                  className="w-5 h-5 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  {link.icon}
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  {link.label}
                </p>
                <p className="text-neutral-200 text-sm mt-0.5 truncate group-hover:text-cyan-400 transition-colors">
                  {link.value}
                </p>
              </div>
              <svg
                className="w-4 h-4 text-neutral-700 group-hover:text-cyan-400/60 group-hover:translate-x-0.5 transition-all ml-auto shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="p-6 sm:p-8 bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/60 rounded-xl">
            <h3 className="text-lg font-mono font-semibold text-neutral-200 mb-6">
              <span className="text-cyan-400/40">&gt; </span>
              send_message
            </h3>

            {status === "success" ? (
              <div className="py-8 text-center">
                <p className="font-mono text-sm text-cyan-400">
                  <span className="text-neutral-500">&gt; </span>
                  message sent successfully
                </p>
                <p className="text-neutral-500 text-sm mt-2">
                  I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-xs font-mono text-neutral-500 hover:text-cyan-400 transition-colors"
                >
                  send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-neutral-900/30 border border-neutral-800/60 rounded-lg font-mono text-sm text-neutral-200 placeholder-neutral-600 focus:border-cyan-400/30 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-neutral-900/30 border border-neutral-800/60 rounded-lg font-mono text-sm text-neutral-200 placeholder-neutral-600 focus:border-cyan-400/30 focus:outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-neutral-900/30 border border-neutral-800/60 rounded-lg font-mono text-sm text-neutral-200 placeholder-neutral-600 focus:border-cyan-400/30 focus:outline-none transition-colors resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>

                {status === "error" && (
                  <p className="font-mono text-sm text-red-400/80">
                    <span className="text-neutral-500">&gt; </span>
                    error: failed to send. Please try again or email directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex items-center gap-2 px-8 py-3.5 bg-cyan-500 rounded-lg font-mono text-sm font-semibold text-[#0a0a0a] hover:bg-cyan-400 transition-all duration-300 glow-cyan disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Send Message
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
