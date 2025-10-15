"use client";
import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 text-white text-center p-6 relative overflow-hidden">
      {/* Typing Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-bold mb-10"
      >
        <ReactTyped
          strings={[
            "Thank you for being part of this special day 💖",
            "You are truly one of a kind 🎂",
            "Hope this little surprise made you smile 😊",
          ]}
          typeSpeed={40}
          backSpeed={25}
          loop
        />
      </motion.div>

      {/* Floating Heart Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1], rotate: [0, 20, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        className="text-6xl mb-12"
      >
        ❤️
      </motion.div>

      {/* Replay Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <Link
          href="/"
          className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform"
        >
          Replay 🎉
        </Link>
      </motion.div>
    </div>
  );
}
