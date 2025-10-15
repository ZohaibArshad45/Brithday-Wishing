"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const memories = [
  {
    id: 1,
    img: "/mem1.jpg",
    text: "The laugh that never fades 😄",
    emoji: "😂",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    img: "/mem2.jpg",
    text: "Best day ever 🎉",
    emoji: "🥳",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    img: "/mem3.jpg",
    text: "Always good vibes 💫",
    emoji: "✨",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    img: "/mem4.jpg",
    text: "Unforgettable moments ❤️",
    emoji: "💖",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    img: "/mem5.jpg",
    text: "Adventures together 🌟",
    emoji: "🚀",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 6,
    img: "/mem6.jpg",
    text: "Pure happiness 🥰",
    emoji: "😊",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function MemoriesPage() {
  const [visibleMemories, setVisibleMemories] = useState([]);
  const [allVisible, setAllVisible] = useState(false);
  const [imageError, setImageError] = useState({});

  // Auto-reveal memories every 1 second
  useEffect(() => {
    const timer = setInterval(() => {
      if (visibleMemories.length < memories.length) {
        setVisibleMemories((prev) => [...prev, prev.length]);
      } else {
        setAllVisible(true);
        clearInterval(timer);
      }
    }, 800);

    return () => clearInterval(timer);
  }, [visibleMemories.length]);

  const handleImageError = (id) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-y-auto">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Hearts */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {["💖", "💕", "💫", "✨", "🌟", "🎀"][i % 6]}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-8xl mb-6"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            📸
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Beautiful Memories
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Reliving our best moments together! 💫
          </motion.p>
        </motion.div>

        {/* Memories Grid */}
        <div className="w-full px-4 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, y: 60, scale: 0.8, rotateY: 90 }}
                animate={{
                  opacity: visibleMemories.includes(index) ? 1 : 0,
                  y: visibleMemories.includes(index) ? 0 : 60,
                  scale: visibleMemories.includes(index) ? 1 : 0.8,
                  rotateY: visibleMemories.includes(index) ? 0 : 90,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className={`relative ${
                  visibleMemories.includes(index) ? "block" : "hidden"
                } w-full max-w-sm`}
              >
                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${memory.color} rounded-3xl blur-xl opacity-0 -z-10`}
                  animate={{
                    opacity: visibleMemories.includes(index) ? [0, 0.4, 0] : 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />

                {/* Memory Card */}
                <motion.div
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-1 shadow-2xl border border-white/20 relative overflow-hidden group hover:scale-105 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                >
                  {/* Image Container */}
                  <div className="relative rounded-2xl overflow-hidden">
                    {/* Actual Image with Fallback */}
                    {!imageError[memory.id] ? (
                      <img
                        src={memory.img}
                        alt={memory.text}
                        className="w-full h-64 object-cover rounded-2xl"
                        onError={() => handleImageError(memory.id)}
                      />
                    ) : (
                      // Fallback when image fails to load
                      <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                        <div className="text-center relative z-10">
                          <motion.div
                            className="text-6xl mb-2"
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          >
                            {memory.emoji}
                          </motion.div>
                          <p className="text-white/70 text-sm">
                            Memory {memory.id}
                          </p>
                        </div>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                    )}

                    {/* Overlay Text */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 + 0.5 }}
                    >
                      <p className="text-white font-semibold text-lg text-center">
                        {memory.text}
                      </p>
                    </motion.div>

                    {/* Corner Accent */}
                    <motion.div
                      className={`absolute top-3 right-3 w-3 h-3 bg-gradient-to-br ${memory.color} rounded-full`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>

                {/* Memory Number */}
                <motion.div
                  className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border border-white/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: visibleMemories.includes(index) ? 1 : 0 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <span className="text-white text-sm font-bold">
                    {memory.id}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        {!allVisible && (
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-3 border border-white/20"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <span className="text-gray-200 font-medium">
                Loading memories... {visibleMemories.length}/{memories.length}
              </span>
              <motion.div
                className="flex space-x-1"
                animate={{
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-2 h-2 bg-pink-400 rounded-full" />
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* Next Button */}
        {allVisible && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="mb-8"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <p className="text-2xl text-pink-200 font-semibold">
                All memories loaded! 🎉
              </p>
              <p className="text-gray-300 mt-2">Ready for birthday wishes?</p>
            </motion.div>

            <Link href="/wishes">
              <motion.button
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-xl px-16 py-5 rounded-2xl shadow-2xl border border-white/30 relative overflow-hidden group"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 25px 50px rgba(236, 72, 153, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="relative z-10 flex items-center space-x-4"
                  whileHover={{ x: 8 }}
                >
                  <span className="text-2xl">Continue to Wishes</span>
                  <motion.span
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl"
                  >
                    🎂
                  </motion.span>
                </motion.span>

                {/* Button Effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />

                {/* Pulse Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-white/40"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Floating Decorations */}
      <motion.div
        className="fixed top-8 left-8 text-4xl opacity-70 hidden md:block"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        💖
      </motion.div>
      <motion.div
        className="fixed top-8 right-8 text-4xl opacity-70 hidden md:block"
        animate={{
          y: [0, 25, 0],
          rotate: [360, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      >
        📷
      </motion.div>
    </div>
  );
}
