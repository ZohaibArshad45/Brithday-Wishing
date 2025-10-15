"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const memories = [
  { id: 1, img: "/mem1.jpg", text: "The laugh that never fades 😄" },
  { id: 2, img: "/mem2.jpg", text: "Best day ever 🎉" },
  { id: 3, img: "/mem3.jpg", text: "Always good vibes 💫" },
  { id: 4, img: "/mem4.jpg", text: "Unforgettable moments ❤️" },
];

export default function MemoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-8">
        Beautiful Memories 💖
      </h1>

      {/* Memory Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {memories.map((memory) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: memory.id * 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer"
          >
            <img
              src={memory.img}
              alt={memory.text}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black/60 text-center py-2 text-sm">
              {memory.text}
            </div>
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
          href="/wishes"
          className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform"
        >
          Next →
        </Link>
      </motion.div>
    </div>
  );
}
