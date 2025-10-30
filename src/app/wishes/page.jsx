"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import TrailEffect from "@/components/ConfettiBackground";

const wishes = [
  {
    id: 1,
    text: "May your day be filled with laughter, joy, and cake! 🎂",
    emoji: "🎂",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    text: "You're not just older, you're better! 😉",
    emoji: "😊",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    text: "Keep smiling, keep shining, and keep being amazing 💫",
    emoji: "✨",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    text: "More memories, more adventures, more happiness to come 🎉",
    emoji: "🎊",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    text: "You deserve all the love in the world ❤️",
    emoji: "💖",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 6,
    text: "Wishing you endless happiness and success 🌟",
    emoji: "⭐",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function WishesPage() {
  const [visibleWishes, setVisibleWishes] = useState([0]);
  const [allVisible, setAllVisible] = useState(false);

  // Auto-reveal wishes
  useEffect(() => {
    const timer = setInterval(() => {
      if (visibleWishes.length < wishes.length) {
        setVisibleWishes((prev) => [...prev, prev.length]);
      } else {
        setAllVisible(true);
        clearInterval(timer);
      }
    }, 800);

    return () => clearInterval(timer);
  }, [visibleWishes.length]);

  const handleRevealNext = () => {
    if (visibleWishes.length < wishes.length) {
      setVisibleWishes((prev) => [...prev, prev.length]);
    } else {
      setAllVisible(true);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-y-auto cursor-pointer"
      onClick={handleRevealNext}
    >
      <TrailEffect />
      {/* Simplified Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Reduced floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xl opacity-50"
            animate={{
              y: [0, -40, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {["💫", "✨", "🎉", "🌟"][i % 4]}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto min-h-screen flex flex-col items-center py-16 px-4">
        {/* Simplified Header */}
        <div className="text-center mb-12">
          <motion.div
            className="text-6xl mb-4"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            💌
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Birthday Wishes
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Special wishes just for you! 🎊
          </p>

          {/* Click Instruction */}
          {!allVisible && (
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 border border-white/20 mt-4"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <span className="text-sm text-cyan-200">
                Click to reveal wishes
              </span>
              <span>👆</span>
            </motion.div>
          )}
        </div>

        {/* Simplified Wishes Grid */}
        <div className="w-full mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wishes.map((wish, index) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: visibleWishes.includes(index) ? 1 : 0,
                  y: visibleWishes.includes(index) ? 0 : 30,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                className={`${
                  visibleWishes.includes(index) ? "block" : "hidden"
                }`}
              >
                <div
                  className={`bg-gradient-to-br ${wish.color} bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 border border-white/20 h-full flex flex-col`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl">{wish.emoji}</div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {wish.id}
                      </span>
                    </div>
                  </div>

                  <p className="text-white/90 leading-relaxed text-center flex-1 flex items-center">
                    {wish.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Simplified Progress */}
        {!allVisible && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-3 bg-white/10 rounded-xl px-6 py-3 border border-white/20">
              <span className="text-gray-200">
                {visibleWishes.length}/{wishes.length} wishes
              </span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        )}

        {/* Simplified Next Button */}
        {allVisible && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-cyan-200 font-semibold mb-6">
              All wishes delivered! 🎉
            </p>

            <Link href="/final-surprise">
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg px-12 py-4 rounded-xl border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <span>Final Surprise</span>
                  <span>🎁</span>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
