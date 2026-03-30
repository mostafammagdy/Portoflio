"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 font-mono relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center"
      >
        {/* 404 number */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.7 }}
          className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-600 mb-8"
        >
          404
        </motion.h1>

        {/* Terminal block */}
        <div className="relative max-w-md mx-auto p-6 bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/60 rounded-xl scanlines">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-neutral-400 text-left"
          >
            <span className="text-cyan-400">guest@portfolio</span>
            <span className="text-neutral-600">:</span>
            <span className="text-cyan-400/60">~</span>
            <span className="text-neutral-600">$ </span>
            cd /requested-page
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-red-400/80 text-left mt-2"
          >
            bash: cd: /requested-page: No such file or directory
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-neutral-400 text-left mt-4"
          >
            <span className="text-cyan-400">guest@portfolio</span>
            <span className="text-neutral-600">:</span>
            <span className="text-cyan-400/60">~</span>
            <span className="text-neutral-600">$ </span>
            <span className="cursor-blink text-cyan-400">|</span>
          </motion.p>
        </div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="text-neutral-500 text-sm mt-6"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>

        {/* Home button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg font-mono text-sm text-cyan-400 hover:bg-cyan-500/15 hover:border-cyan-400/40 transition-all duration-300"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            cd ~
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
