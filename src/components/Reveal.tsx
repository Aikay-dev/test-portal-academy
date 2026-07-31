"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Fades content up as it enters the viewport. Deliberately restrained —
 * a tuition site should feel steady, not animated for its own sake.
 * framer-motion honours prefers-reduced-motion automatically.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
