"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Primary Stack",
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Payments & Integrations",
    skills: ["Stripe", "PayPal", "PayTabs", "Apache Camel", "REST APIs", "Webhooks"],
  },
  {
    title: "Backend & Systems",
    skills: ["Java", "Spring Boot", "Express.js", "JWT", "C#"],
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "CI/CD", "Azure DevOps", "Git", "Vercel", "Railway", "Cloudinary"],
  },
  {
    title: "Foundations",
    skills: ["C++", "OOP", "System Design", "Agile/Scrum"],
  },
];

export default function Skills() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="skills"
          title="Skills"
          subtitle="Technologies and tools I work with"
          sectionNumber={2}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/60 rounded-xl hover:border-cyan-400/15 transition-all duration-300 group card-hover"
            >
              <h3 className="text-sm font-mono text-cyan-400/80 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-30 group-hover:opacity-80 transition-opacity" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono text-neutral-300 bg-neutral-800/40 border border-neutral-700/40 rounded-lg hover:border-cyan-400/20 hover:text-cyan-400 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
