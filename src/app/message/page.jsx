"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Confetti from "react-confetti";
import TrailEffect from "@/components/ConfettiBackground";

export default function MessagePage() {
  const [revealed, setRevealed] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const messages = [
    "🎉 You make every day brighter with your smile.",
    "💫 You’re the kind of person who turns moments into memories.",
    "🌈 Keep shining — the world needs your light.",
    "💖 You’re beautiful inside and out.",
    "🌟 May your dreams grow as big as your heart.",
    "🎈 Never stop laughing — it’s your superpower!",
    "💎 Your kindness makes you glow differently.",
    "🎁 You bring calm even in chaos — pure magic!",
    "💜 You make the world softer just by being you.",
    "🌸 Happiness looks great on you.",
    "💌 Keep chasing what sets your soul on fire.",
    "✨ You’re loved — more than you realize.",
    "🎶 Life’s better with you in it.",
    "💙 Every day is special because you exist.",
    "🌷 You inspire without even trying.",
    "🎀 You are rare — never forget that.",
    "🔥 You’ve come so far — keep going.",
    "🌻 The stars envy your shine tonight.",
    "💫 Today, everything feels lighter because of you.",
    "🎂 Here’s to more laughter, love, and magic moments!",
  ];

  const handleClick = () => {
    if (revealed < messages.length) {
      setRevealed((prev) => prev + 1);
      if (revealed + 1 === messages.length) {
        setTimeout(() => setShowConfetti(true), 800);
      }
    }
  };

  const visibleMessages = messages.slice(
    Math.max(0, revealed - 3),
    Math.min(revealed, messages.length)
  );

  return (
    <div
      onClick={!showConfetti ? handleClick : undefined}
      className="relative h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden cursor-pointer"
    >
      {/* Background Gradient */}
      <TrailEffect />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(236,72,153,0.25), transparent 60%), radial-gradient(circle at 70% 80%, rgba(139,92,246,0.25), transparent 60%)",
          }}
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-xl opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          {["✨", "💖", "🌸", "🌟"][Math.floor(Math.random() * 4)]}
        </motion.span>
      ))}

      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={500}
          recycle={false}
        />
      )}

      {/* Title */}
      <motion.h1
        className="absolute top-10 text-3xl md:text-4xl font-extrabold text-center  "
        animate={{
          y: [0, -6, 0],
          textShadow: [
            "0 0 10px #ec4899",
            "0 0 20px #a855f7",
            "0 0 10px #22d3ee",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ✨ A Few Words Just for You 🌷{" "}
      </motion.h1>

      {/* Messages */}
      {!showConfetti && (
        <div className="relative z-20 flex flex-col items-center gap-4 mt-24 mb-10 px-6 w-full max-w-md h-[50vh] justify-center">
          <AnimatePresence>
            {visibleMessages.map((msg) => (
              <motion.div
                key={msg}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  boxShadow: "0 0 35px rgba(236,72,153,0.25)",
                }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="w-full text-center text-sm md:text-lg bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-6 py-4 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {msg}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Hint */}
      {!showConfetti && revealed < messages.length && (
        <motion.p
          className="absolute bottom-14 text-white/70 text-sm z-30"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Tap anywhere to reveal the next message 🎁
        </motion.p>
      )}

      {/* Final Celebration */}
      {showConfetti && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-50"
        >
          <motion.h2
            className="text-xl md:text-2xl font-bold "
            animate={{
              textShadow: [
                "0 0 20px #ec4899",
                "0 0 35px #a855f7",
                "0 0 20px #22d3ee",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🎊 You’ve unlocked all!
          </motion.h2>

          <motion.p
            className="text-white/90 mt-4 text-base md:text-lg tracking-wide"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Let’s relive the best memories together 💖
          </motion.p>

          <Link href="/memories">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 40px rgba(236,72,153,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 px-8 py-3 rounded-xl text-white font-semibold text-base md:text-lg shadow-lg"
            >
              Memories Page →
            </motion.button>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
