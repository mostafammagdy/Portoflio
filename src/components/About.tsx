"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="about"
          title="About"
          subtitle="A little about me and what I do"
          sectionNumber={1}
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-neutral-300 leading-relaxed">
              I&apos;m a Software Engineer based in{" "}
              <span className="gradient-accent">Montreal, QC</span> with a
              Bachelor of Engineering in Software Engineering from{" "}
              <span className="text-neutral-200 font-medium">
                York University
              </span>{" "}
              (2023).
            </p>
            <p className="text-neutral-300 leading-relaxed">
              I have hands-on experience across the{" "}
              <span className="text-neutral-200 font-medium">
                full software development lifecycle
              </span>{" "}
              — from requirements gathering and system design to development,
              testing, and documentation. I&apos;ve worked on payment
              integrations, enterprise APIs, and modern web applications.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Proficient in{" "}
              <span className="gradient-accent">C++, C#, and Java</span>, with a
              proven ability to learn new technologies quickly and contribute
              effectively in both team-based and independent roles.
            </p>
          </motion.div>

          {/* Right - Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-3"
          >
            {[
              {
                label: "Location",
                value: "Montreal, QC",
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
              },
              {
                label: "Education",
                value: "B.Eng Software Engineering — York University",
                icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
              },
              {
                label: "Experience",
                value: "2+ years professional",
                icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
              },
              {
                label: "Languages",
                value: "English, French, Arabic",
                icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-4 p-4 bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/60 rounded-xl hover:border-cyan-400/15 transition-all duration-300 group card-hover"
              >
                <div className="p-2 bg-cyan-400/[0.07] rounded-lg shrink-0 group-hover:bg-cyan-400/[0.12] transition-colors">
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.icon}
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-neutral-200 text-sm mt-0.5">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
