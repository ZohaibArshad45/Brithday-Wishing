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
    bgColor: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 2,
    text: "You're not just older, you're better! 😉",
    emoji: "😊",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    text: "Keep smiling, keep shining, and keep being amazing 💫",
    emoji: "✨",
    color: "from-green-500 to-teal-500",
    bgColor: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 4,
    text: "More memories, more adventures, more happiness to come 🎉",
    emoji: "🎊",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 5,
    text: "You deserve all the love in the world ❤️",
    emoji: "💖",
    color: "from-yellow-500 to-amber-500",
    bgColor: "from-yellow-500/20 to-amber-500/20",
  },
  {
    id: 6,
    text: "Wishing you endless happiness and success 🌟",
    emoji: "⭐",
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-500/20 to-purple-500/20",
  },
  {
    id: 7,
    text: "May all your dreams and wishes come true! 🌈",
    emoji: "🌈",
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 8,
    text: "Here's to another year of amazing experiences! 🥂",
    emoji: "🥂",
    color: "from-emerald-500 to-cyan-500",
    bgColor: "from-emerald-500/20 to-cyan-500/20",
  },
];

export default function WishesPage() {
  const [visibleWishes, setVisibleWishes] = useState([0]);
  const [allVisible, setAllVisible] = useState(false);
  const [currentWishIndex, setCurrentWishIndex] = useState(0);

  // Auto-reveal wishes every 1 second
  useEffect(() => {
    const timer = setInterval(() => {
      if (visibleWishes.length < wishes.length) {
        setVisibleWishes((prev) => [...prev, prev.length]);
        setCurrentWishIndex(visibleWishes.length);
      } else {
        setAllVisible(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [visibleWishes.length]);

  // Manual click to reveal next wish
  const handleRevealNext = () => {
    if (visibleWishes.length < wishes.length) {
      setVisibleWishes((prev) => [...prev, prev.length]);
      setCurrentWishIndex(visibleWishes.length);
    } else {
      setAllVisible(true);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-y-auto cursor-pointer"
      onClick={handleRevealNext}
    >
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-70"
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {
              ["💌", "✉️", "🎀", "💝", "💫", "✨", "🎉", "🎊", "🌟", "⭐"][
                i % 10
              ]
            }
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center py-20 px-4">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16 mt-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-8xl mb-6"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 10, -10, 0],
              y: [0, -10, 0],
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
            className="text-5xl md:text-7xl font-bold mb-6"
            animate={{
              scale: [1, 1.05, 1],
              textShadow: [
                "0 0 20px rgba(34, 211, 238, 0.5)",
                "0 0 30px rgba(192, 132, 252, 0.5)",
                "0 0 20px rgba(236, 72, 153, 0.5)",
              ],
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
            className="text-xl md:text-2xl text-gray-300 mb-4"
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

          {/* Click Instruction */}
          {!allVisible && (
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 mt-4"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <span className="text-sm text-cyan-200">
                Click anywhere to reveal wishes
              </span>
              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                👆
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Enhanced Wishes Container */}
        <div className="w-full mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
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
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className={`relative ${
                  visibleWishes.includes(index) ? "block" : "hidden"
                } w-full max-w-sm`}
              >
                {/* Enhanced Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${wish.color} rounded-3xl blur-xl opacity-0 -z-10`}
                  animate={{
                    opacity: visibleWishes.includes(index) ? [0, 0.6, 0] : 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />

                {/* Enhanced Wish Card */}
                <motion.div
                  className={`bg-gradient-to-br ${wish.bgColor} backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20 relative overflow-hidden group h-full flex flex-col`}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Header with Emoji */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className="text-4xl"
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
                        {wish.emoji}
                      </motion.div>

                      {/* Enhanced Wish Number */}
                      <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border border-white/30"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 3,
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
                      className="flex-1 flex items-center mb-4"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: visibleWishes.includes(index) ? 1 : 0,
                      }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      <p className="text-lg text-white/95 leading-relaxed font-medium text-center w-full">
                        {wish.text}
                      </p>
                    </motion.div>

                    {/* Enhanced Progress Dots */}
                    <motion.div
                      className="flex justify-center space-x-2 mt-auto"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: visibleWishes.includes(index) ? 1 : 0,
                      }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                    >
                      {[...Array(3)].map((_, dotIndex) => (
                        <motion.div
                          key={dotIndex}
                          className={`w-2 h-2 rounded-full bg-gradient-to-br ${wish.color}`}
                          animate={{
                            scale: [1, 1.8, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: dotIndex * 0.3 + index * 0.1,
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>

                  {/* Enhanced Hover Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      opacity: [0, 0.5, 0],
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

        {/* Enhanced Progress Indicator */}
        {!allVisible && (
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-4 border border-white/20 shadow-lg"
              animate={{
                scale: [1, 1.05, 1],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <span className="text-gray-200 font-medium text-lg">
                {visibleWishes.length}/{wishes.length} wishes revealed
              </span>
              <motion.div
                className="flex space-x-2"
                animate={{
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                <div className="w-3 h-3 bg-purple-400 rounded-full" />
                <div className="w-3 h-3 bg-pink-400 rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* Enhanced Next Button */}
        {allVisible && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="mb-8"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <p className="text-3xl text-cyan-200 font-bold mb-2">
                All wishes delivered! 🎉
              </p>
            </motion.div>

            <Link href="/final-surprise">
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-xl px-20 py-6 rounded-2xl shadow-2xl border border-white/30 relative overflow-hidden group"
                whileHover={{
                  scale: 1.1,
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
                    animate={{
                      x: [0, 12, 0],
                      scale: [1, 1.3, 1],
                    }}
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
                    scale: [1, 1.02, 1],
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

      {/* Enhanced Floating Decorations */}
      <motion.div
        className="fixed top-8 left-8 text-4xl opacity-70 hidden md:block"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.4, 1],
          y: [0, 20, 0],
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
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      >
        ✨
      </motion.div>
      <motion.div
        className="fixed bottom-8 left-8 text-3xl opacity-60 hidden md:block"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
      >
        🌟
      </motion.div>
      <motion.div
        className="fixed bottom-8 right-8 text-3xl opacity-60 hidden md:block"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
      >
        🎀
      </motion.div>
    </div>
  );
}
