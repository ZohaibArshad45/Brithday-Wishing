"use client";
import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Link from "next/link";

export default function MessagePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 text-white text-center p-4">
      {/* Typing Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl"
      >
        <ReactTyped
          strings={[
            "Hey there 🎉",
            "Wishing you the happiest birthday ever! 🎂",
            "You deserve all the love, laughter, and blessings today ❤️",
            "Let’s relive some amazing memories next!",
          ]}
          typeSpeed={40}
          backSpeed={20}
          backDelay={1200}
          loop
        />
      </motion.div>

      {/* Next Button */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <Link
          href="/memories"
          className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform"
        >
          Next →
        </Link>
      </motion.div>
    </div>
  );
}
