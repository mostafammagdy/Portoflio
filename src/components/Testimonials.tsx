"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "Mostafa delivered a beautiful e-commerce platform that exceeded our expectations. His attention to detail with the payment integration and product customization was impressive.",
    name: "Sherine Salem",
    role: "Founder",
    company: "La Floree Creations",
    initials: "SS",
  },
  {
    quote:
      "A reliable and skilled developer who quickly adapts to new challenges. Mostafa's contributions to our enterprise APIs and payment systems were critical to our delivery timelines.",
    name: "Ahmed K.",
    role: "Tech Lead",
    company: "Al Ahly Momkn",
    initials: "AK",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="testimonials"
          title="Testimonials"
          subtitle="What people say about working with me"
          sectionNumber={5}
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-6 bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/60 rounded-xl hover:border-cyan-400/15 transition-all duration-300 group card-hover"
            >
              {/* Terminal-styled quote mark */}
              <span className="absolute top-4 right-5 text-4xl font-mono text-cyan-400/10 leading-none select-none group-hover:text-cyan-400/20 transition-colors">
                &ldquo;
              </span>

              {/* Quote */}
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 relative z-10">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-800/40">
                <div className="w-10 h-10 rounded-full bg-cyan-400/[0.07] border border-cyan-400/15 flex items-center justify-center shrink-0">
                  <span className="text-xs font-mono font-semibold text-cyan-400">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-200">
                    {t.name}
                  </p>
                  <p className="text-xs font-mono text-neutral-500">
                    {t.role} — {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
