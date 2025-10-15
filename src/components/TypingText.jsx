"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function TypingText({ text, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      <ReactTyped
        strings={[text]}
        typeSpeed={60}
        backSpeed={40}
        showCursor={false}
      />
    </motion.div>
  );
}
