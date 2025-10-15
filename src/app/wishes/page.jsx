"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

  // Auto-reveal wishes every 1 second
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-y-auto">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl"
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

        {/* Floating Envelopes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, 15, -15, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {["💌", "✉️", "🎀", "💝", "💫", "✨"][i % 6]}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto min-h-screen flex flex-col items-center py-20">
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
            💌
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
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Birthday Wishes
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
            Special wishes just for you! 🎊
          </motion.p>
        </motion.div>

        {/* Wishes Container */}
        <div className="w-full px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {wishes.map((wish, index) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                animate={{
                  opacity: visibleWishes.includes(index) ? 1 : 0,
                  y: visibleWishes.includes(index) ? 0 : 60,
                  scale: visibleWishes.includes(index) ? 1 : 0.8,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className={`relative ${
                  visibleWishes.includes(index) ? "block" : "hidden"
                } w-full max-w-md`}
              >
                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${wish.color} rounded-3xl blur-xl opacity-0 -z-10`}
                  animate={{
                    opacity: visibleWishes.includes(index) ? [0, 0.4, 0] : 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />

                {/* Wish Card */}
                <motion.div
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20 relative overflow-hidden group hover:scale-105 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                >
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header with Emoji */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className="text-4xl"
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                        whileHover={{
                          scale: 1.5,
                          rotate: 360,
                          transition: { duration: 0.5 },
                        }}
                      >
                        {wish.emoji}
                      </motion.div>

                      {/* Wish Number */}
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      >
                        <span className="text-white text-sm font-bold">
                          {wish.id}
                        </span>
                      </motion.div>
                    </div>

                    {/* Wish Text */}
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: visibleWishes.includes(index) ? 1 : 0,
                      }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      <p className="text-lg text-white/95 leading-relaxed font-medium text-center">
                        {wish.text}
                      </p>
                    </motion.div>

                    {/* Progress Dots */}
                    <motion.div
                      className="flex justify-center space-x-1"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: visibleWishes.includes(index) ? 1 : 0,
                      }}
                      transition={{ delay: index * 0.15 + 0.5 }}
                    >
                      {[...Array(3)].map((_, dotIndex) => (
                        <motion.div
                          key={dotIndex}
                          className="w-2 h-2 bg-white/50 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: dotIndex * 0.3,
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>

                  {/* Hover Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
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
                Loading wishes... {visibleWishes.length}/{wishes.length}
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
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <div className="w-2 h-2 bg-pink-400 rounded-full" />
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
              <p className="text-2xl text-cyan-200 font-semibold">
                All wishes delivered! 🎉
              </p>
              <p className="text-gray-300 mt-2">
                Ready for the final surprise?
              </p>
            </motion.div>

            <Link href="/thank-you">
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-xl px-16 py-5 rounded-2xl shadow-2xl border border-white/30 relative overflow-hidden group"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 25px 50px rgba(34, 211, 238, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="relative z-10 flex items-center space-x-4"
                  whileHover={{ x: 8 }}
                >
                  <span className="text-2xl">Final Surprise</span>
                  <motion.span
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl"
                  >
                    🎁
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
        💝
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
        ✨
      </motion.div>
    </div>
  );
}
