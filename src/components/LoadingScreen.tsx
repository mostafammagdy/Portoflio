"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<"logo" | "exit">("logo");

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase("exit"), 800);
    const doneTimer = setTimeout(() => onComplete(), 1200);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center pointer-events-none"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-6xl font-mono font-bold text-glow"
        >
          <span className="text-cyan-400">&lt;</span>
          <span className="text-neutral-100">MM</span>
          <span className="text-cyan-400">/&gt;</span>
        </motion.div>

        {/* Progress bar sweep */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.2 }}
          className="mt-8 w-32 h-px bg-neutral-800 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeInOut",
            }}
            className="h-full w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />
        </motion.div>

        {/* Terminal line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.2 }}
          className="mt-4 text-xs font-mono text-neutral-600 flex items-center gap-1"
        >
          <span className="text-cyan-400/40">&gt;</span> initializing
          <span className="cursor-blink text-cyan-400/60">|</span>
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
