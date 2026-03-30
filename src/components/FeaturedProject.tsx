"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import VideoModal from "./VideoModal";

interface FeaturedProjectProps {
  title: string;
  subtitle: string;
  description: string;
  features: Array<{ title: string; description: string; icon: string }>;
  techStack: string[];
  videoSrc?: string;
  badges: string[];
  links: { github?: string; liveSite?: string };
  screenshot?: string;
}

export default function FeaturedProject({
  title,
  subtitle,
  description,
  features,
  techStack,
  videoSrc,
  badges,
  links,
  screenshot,
}: FeaturedProjectProps) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative mb-12 p-8 bg-neutral-900/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden group hover:border-cyan-400/30 card-hover"
      >
        {/* Featured badge row */}
        <div className="flex items-center gap-3 mb-6">
          {badges.map((badge, i) => (
            <span
              key={badge}
              className={
                i === 0
                  ? "px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#0a0a0a] bg-cyan-400 rounded-full"
                  : "px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 border border-cyan-400/15 rounded-full"
              }
            >
              {badge}
            </span>
          ))}
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/20 to-transparent" />
        </div>

        {/* Title row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-mono text-neutral-100 mb-1">
              {title}
            </h3>
            <p className="text-cyan-400/80 font-mono text-sm">{subtitle}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {videoSrc && (
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 rounded-lg font-mono text-sm font-semibold text-[#0a0a0a] hover:bg-cyan-400 transition-all duration-300 glow-cyan"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </button>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-800/60 border border-neutral-700/60 rounded-lg font-mono text-sm text-neutral-300 hover:border-neutral-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Code
              </a>
            )}
            {links.liveSite && (
              <a
                href={links.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-800/60 border border-neutral-700/60 rounded-lg font-mono text-sm text-neutral-300 hover:border-neutral-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Live Site
              </a>
            )}
          </div>
        </div>

        {/* Screenshot */}
        {screenshot && (
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8 border border-neutral-800/40">
            <Image
              src={screenshot}
              alt={`${title} screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1100px"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-neutral-400 leading-relaxed mb-8 max-w-3xl">
          {description}
        </p>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="p-4 bg-neutral-800/20 border border-neutral-800/60 rounded-lg hover:border-cyan-400/15 transition-all duration-300"
            >
              <div className="p-2 bg-cyan-400/[0.07] rounded-lg w-fit mb-3">
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
                    d={feature.icon}
                  />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-neutral-200 mb-1">
                {feature.title}
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-800/40">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-mono text-cyan-400/70 bg-cyan-400/[0.04] border border-cyan-400/[0.08] rounded hover:border-cyan-400/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Subtle corner glow — more organic shape */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-400/[0.03] rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-cyan-400/[0.02] rounded-full blur-[60px] pointer-events-none" />
      </motion.div>

      {videoSrc && (
        <VideoModal
          isOpen={videoOpen}
          onClose={() => setVideoOpen(false)}
          src={videoSrc}
        />
      )}
    </>
  );
}
