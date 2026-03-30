"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Integration Engineer",
    company: "Al Ahly Momkn for e-Payments Solutions",
    period: "Aug 2023 — May 2025",
    location: "Remote",
    description: [
      "Gathered and analyzed requirements related to data exchange, security, and performance, leading to a 15% improvement in data processing efficiency.",
      "Engineered and deployed modular software components using CI/CD pipelines, ensuring rigorous API testing and high availability.",
      "Mapped data for seamless flow, reducing integration errors by 20%.",
      "Created comprehensive integration documents (API specifications, authentication, data structures) to improve development time by 30%.",
      "Implemented Low Code Development (Apache Camel, Spring Boot) to streamline service creation and reduce development time.",
    ],
    tech: ["Spring Boot", "Apache Camel", "CI/CD", "REST APIs"],
  },
  {
    role: "Back-end Developer",
    company: "TechTack",
    type: "Freelance",
    period: "Mar 2024 — Jul 2024",
    location: "Remote",
    description: [
      "Implemented secure backend payment integration with the PayTabs API for the Darbi application.",
      "Developed wallet functionality enabling users to top up their account balance and manage funds securely.",
      "Contributed to architectural discussions, ensuring adherence to best practices for system scalability and reliability.",
      "Designed and implemented escrow payment system, ensuring trust and reliability in the platform.",
    ],
    tech: ["Node.js", "PayTabs API", "PostgreSQL", "REST APIs"],
  },
  {
    role: "Front-End Developer",
    company: "PixelPusher",
    type: "Freelance",
    period: "Feb 2023 — Jul 2023",
    location: "Remote",
    description: [
      "Collaborated with backend developers to integrate APIs, achieving seamless data retrieval and processing with <100ms average response time.",
      "Developed a responsive user interface in Angular, boosting website loading speed by 20%.",
      "Utilized CSS and Material UI to enhance user experience through improved design and functionalities.",
      "Implemented agile development methodologies, leading daily Scrum meetings, and using BugHerd to track and resolve bugs.",
    ],
    tech: ["Angular", "Material UI", "CSS", "Agile/Scrum"],
  },
];

export default function Experience() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="experience"
          title="Experience"
          subtitle="Where I've worked and what I've built"
          sectionNumber={3}
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-neutral-800/60 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot — static, no ping */}
                <div className="absolute left-0 md:left-8 top-6 -translate-x-[5px]">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#0a0a0a]" />
                </div>

                <div className="p-6 bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/60 rounded-xl hover:border-cyan-400/15 transition-all duration-300 group card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-100">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 font-mono text-sm flex items-center gap-2">
                        {exp.company}
                        {"type" in exp && (
                          <span className="text-xs px-2 py-0.5 bg-cyan-400/[0.07] border border-cyan-400/15 rounded-full text-cyan-400/70">
                            {exp.type}
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <p className="text-neutral-400 font-mono text-sm">
                        {exp.period}
                      </p>
                      <p className="text-neutral-600 text-xs">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, j) => (
                      <li
                        key={j}
                        className="text-neutral-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-cyan-400/30 mt-0.5 shrink-0 font-mono group-hover:text-cyan-400/60 transition-colors">
                          &gt;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-800/40">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono text-cyan-400/70 bg-cyan-400/[0.04] border border-cyan-400/[0.08] rounded hover:border-cyan-400/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
