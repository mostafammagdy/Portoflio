"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id: string;
  sectionNumber?: number;
}

export default function SectionHeading({
  title,
  subtitle,
  id,
  sectionNumber,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      id={id}
      className="mb-14 scroll-mt-24"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-3">
          {sectionNumber !== undefined && (
            <span className="text-cyan-400/40 font-mono text-xs tabular-nums">
              {sectionNumber.toString().padStart(2, "0")}
            </span>
          )}
          <span className="text-cyan-400 font-mono text-sm">
            &lt;{title.toLowerCase()} /&gt;
          </span>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-neutral-800 to-transparent" />
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold font-mono tracking-tight">
        {title}
        <span className="text-cyan-400/60">.</span>
      </h2>
      {subtitle && (
        <p className="text-neutral-500 mt-3 max-w-xl text-sm">{subtitle}</p>
      )}
    </motion.div>
  );
}
