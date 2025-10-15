"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const wishes = [
  "May your day be filled with laughter, joy, and cake! 🎂",
  "You’re not just older, you’re better! 😉",
  "Keep smiling, keep shining, and keep being amazing 💫",
  "More memories, more adventures, more happiness to come 🎉",
  "You deserve all the love in the world ❤️",
];

export default function WishesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-10">
        Birthday Wishes 💌
      </h1>

      <div className="flex flex-col gap-6 max-w-2xl w-full">
        {wishes.map((wish, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg text-center border border-white/20"
          >
            <p className="text-lg">{wish}</p>
          </motion.div>
        ))}
      </div>

      {/* Next Button */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <Link
          href="/thank-you"
          className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform"
        >
          Next →
        </Link>
      </motion.div>
    </div>
  );
}
