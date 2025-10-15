"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Link from "next/link";

export default function ThankYouPage() {
  const [showReplay, setShowReplay] = useState(false);
  const [visibleHearts, setVisibleHearts] = useState([]);

  const messages = [
    "Thank you for being the most amazing best friend! 💖",
    "You make every moment special and unforgettable 🎂",
    "Hope this birthday surprise made you as happy as you make others 😊",
    "Wishing you endless joy, laughter, and beautiful memories 🌟",
    "You deserve all the happiness in the world! 🥳",
  ];

  // Create floating hearts
  useEffect(() => {
    const hearts = Array.from({ length: 15 }, (_, i) => i);
    setVisibleHearts(hearts);
  }, []);

  // Show replay button after typing completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowReplay(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {visibleHearts.map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-3xl"
            initial={{
              y: "120vh",
              x: Math.random() * 100,
              rotate: 0,
              scale: 0,
            }}
            animate={{
              y: "-20vh",
              x: Math.random() * 100,
              rotate: 360,
              scale: [0, 1, 0.8, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear",
            }}
          >
            {["💖", "💕", "💝", "🎀", "✨", "🌟"][i % 6]}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Central Celebration Emoji */}
        <motion.div
          className="mb-12"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.5,
          }}
        >
          <motion.div
            className="text-8xl md:text-9xl mb-4"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🎊
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Thank You! 🎉
            </span>
          </motion.h1>
        </motion.div>

        {/* Typing Messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-12"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl max-w-2xl mx-auto">
            <ReactTyped
              strings={messages}
              typeSpeed={30}
              backSpeed={20}
              backDelay={2000}
              loop
              className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-gray-100"
              cursorChar="✨"
            />

            {/* Typing Indicator */}
            <motion.div
              className="flex justify-center space-x-1 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  className="w-2 h-2 bg-pink-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: dot * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Celebration Emojis */}
        <motion.div
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          {["🎂", "🎁", "🎈", "🥳", "✨", "🌟"].map((emoji, index) => (
            <motion.div
              key={index}
              className="text-3xl md:text-4xl"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.3,
              }}
              whileHover={{
                scale: 1.5,
                rotate: 360,
                transition: { duration: 0.3 },
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>

        {/* Replay Button */}
        {showReplay && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex flex-col items-center space-y-6"
          >
            <motion.p
              className="text-xl text-gray-300 font-light"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Want to experience the magic again?
            </motion.p>

            <Link href="/">
              <motion.button
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-xl px-14 py-4 rounded-2xl shadow-2xl border border-white/30 relative overflow-hidden group"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 25px 50px rgba(236, 72, 153, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="relative z-10 flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <span>Replay Celebration</span>
                  <motion.span
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="text-xl"
                  >
                    🔄
                  </motion.span>
                </motion.span>

                {/* Button Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />

                {/* Pulse Glow Effect */}
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

        {/* Final Message */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <motion.p
            className="text-lg text-gray-400 font-light italic"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            Made with 💖 for the best friend in the world!
          </motion.p>
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <motion.div
        className="absolute top-8 left-8 text-4xl opacity-60 hidden md:block"
        animate={{
          rotate: 360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        💫
      </motion.div>
      <motion.div
        className="absolute top-8 right-8 text-4xl opacity-60 hidden md:block"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      >
        🌟
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-8 text-4xl opacity-60 hidden md:block"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute bottom-8 right-8 text-4xl opacity-60 hidden md:block"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      >
        🎀
      </motion.div>
    </div>
  );
}
