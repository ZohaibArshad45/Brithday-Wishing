"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimatedButton({ href, children }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className="bg-white text-purple-700 px-6 py-3 rounded-2xl font-semibold shadow-lg"
      >
        {children}
      </Link>
    </motion.div>
  );
}
