"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MessagePage() {
  const [visibleBoxes, setVisibleBoxes] = useState([0]);
  const [allBoxesVisible, setAllBoxesVisible] = useState(false);

  const messages = [
    {
      id: 1,
      title: "🎉 Happy Birthday!",
      content:
        "You're not just my best friend, you're family! Wishing you the most amazing birthday filled with joy, laughter, and all the things you love the most.",
      emoji: "🎂",
      color: "from-cyan-500 to-blue-500",
      bgGlow: "bg-cyan-500/20",
    },
    {
      id: 2,
      title: "🌟 You're Amazing!",
      content:
        "Your positive energy, kind heart, and amazing sense of humor make you such a special person. The world is brighter because you're in it!",
      emoji: "✨",
      color: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/20",
    },
    {
      id: 3,
      title: "💫 Best Friend Goals!",
      content:
        "From our crazy adventures to our deep conversations - every moment with you is precious. Thanks for being the best partner in crime!",
      emoji: "🤝",
      color: "from-green-500 to-teal-500",
      bgGlow: "bg-green-500/20",
    },
    {
      id: 4,
      title: "🎁 Special Wishes!",
      content:
        "May this year bring you endless opportunities, beautiful memories, and all the success you deserve. You've got this!",
      emoji: "🎈",
      color: "from-orange-500 to-red-500",
      bgGlow: "bg-orange-500/20",
    },
    {
      id: 5,
      title: "🚀 Let's Celebrate!",
      content:
        "Get ready for an amazing year ahead! More adventures, more laughter, and more unforgettable memories together!",
      emoji: "🥳",
      color: "from-yellow-500 to-amber-500",
      bgGlow: "bg-yellow-500/20",
    },
  ];

  // Show boxes every 1 second
  useEffect(() => {
    const timer = setInterval(() => {
      if (visibleBoxes.length < messages.length) {
        setVisibleBoxes((prev) => [...prev, prev.length]);
      } else {
        setAllBoxesVisible(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [visibleBoxes.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-y-auto">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
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

        {/* Floating Stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Birthday Wishes!
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
            Special messages just for you! 💫
          </motion.p>
        </motion.div>

        {/* Messages Grid */}
        <div className="w-full px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                animate={{
                  opacity: visibleBoxes.includes(index) ? 1 : 0,
                  y: visibleBoxes.includes(index) ? 0 : 60,
                  scale: visibleBoxes.includes(index) ? 1 : 0.8,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                }}
                className={`relative ${
                  visibleBoxes.includes(index) ? "block" : "hidden"
                } ${
                  index === 4 ? "md:col-span-2 md:max-w-xl" : "w-full max-w-md"
                }`}
              >
                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 ${message.bgGlow} rounded-3xl blur-xl opacity-0`}
                  animate={{
                    opacity: visibleBoxes.includes(index) ? [0, 0.6, 0] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />

                {/* Main Box */}
                <div
                  className={`bg-gradient-to-br ${message.color} rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
                >
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header Section */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.h3
                        className="text-3xl font-bold text-white drop-shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {message.title}
                      </motion.h3>
                      <motion.div
                        className="text-5xl"
                        animate={{
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.3, 1],
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
                        {message.emoji}
                      </motion.div>
                    </div>

                    {/* Message Content */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: visibleBoxes.includes(index) ? 1 : 0,
                      }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <p className="text-lg text-white/95 leading-relaxed font-medium drop-shadow">
                        {message.content}
                      </p>
                    </motion.div>

                    {/* Footer */}
                    <motion.div
                      className="flex items-center justify-between pt-4 border-t border-white/30"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: visibleBoxes.includes(index) ? 1 : 0,
                      }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <motion.div
                        className="flex items-center space-x-2"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      >
                        <span className="text-white/80 text-sm font-semibold bg-white/10 px-3 py-1 rounded-full">
                          Message {index + 1}
                        </span>
                      </motion.div>

                      <div className="flex items-center space-x-2">
                        <span className="text-white/60 text-sm">
                          {index + 1}/5
                        </span>
                        <motion.div
                          className="w-2 h-2 bg-green-400 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Next Section Button */}
        {allBoxesVisible && (
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
                All messages revealed! 🎊
              </p>
              <p className="text-gray-300 mt-2">
                Ready to continue the celebration?
              </p>
            </motion.div>

            <Link href="/memories">
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xl px-16 py-5 rounded-2xl shadow-2xl border border-white/30 relative overflow-hidden group"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 25px 50px rgba(192, 132, 252, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="relative z-10 flex items-center space-x-4"
                  whileHover={{ x: 8 }}
                >
                  <span className="text-2xl">Continue to Memories</span>
                  <motion.span
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl"
                  >
                    🎉
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

        {/* Loading Progress */}
        {!allBoxesVisible && (
          <motion.div
            className="text-center mt-8"
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
                Loading messages... {visibleBoxes.length}/5
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
        🎈
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
        🎁
      </motion.div>
    </div>
  );
}
