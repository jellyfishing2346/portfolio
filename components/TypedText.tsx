"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = [
  "Software Engineer",
  "Data Scientist",
  "AI Builder",
  "Full Stack Developer",
];

export default function TypedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-block min-w-[280px] h-9 relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-2xl"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
