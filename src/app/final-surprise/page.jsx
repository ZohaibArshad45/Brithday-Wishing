"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import TrailEffect from "@/components/ConfettiBackground";

export default function FinalSurprise() {
  const [step, setStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Step animation - faster transitions
  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1500),
      setTimeout(() => setStep(2), 3000),
      setTimeout(() => setStep(3), 4500),
      setTimeout(() => {
        setStep(4);
        setShowConfetti(true);
      }, 6000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const surpriseContent = [
    {
      emoji: "🎁",
      title: "A Special Surprise Awaits...",
      description: "Get ready for something magical!",
      color: "from-purple-500 to-pink-500",
    },
    {
      emoji: "✨",
      title: "You're Amazing!",
      description: "Just wanted to remind you how wonderful you are",
      color: "from-cyan-500 to-blue-500",
    },
    {
      emoji: "💝",
      title: "Made with Love",
      description: "Every moment with you is precious",
      color: "from-rose-500 to-red-500",
    },
    {
      emoji: "🎊",
      title: "Happy Birthday!",
      description: "This is your special day to shine!",
      color: "from-amber-500 to-orange-500",
    },
    {
      emoji: "🌟",
      title: "The Final Reveal!",
      description: "You've unlocked the ultimate birthday message!",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const specialMemories = [
    {
      text: "That jeep ride in Naran… memories that never fade.",
      emoji: "🚙",
      bgColor: "from-blue-500/20 to-cyan-500/20",
    },
    {
      text: "It was just a meeting excuse, but my eyes couldn't stop looking at you.",
      emoji: "😍",
      bgColor: "from-pink-500/20 to-rose-500/20",
    },
  ];

  const finalMessage =
    "Every moment with you becomes a beautiful memory that I'll cherish forever. You're not just special, you're everything. 💖";

  const restartCelebration = () => {
    setStep(0);
    setShowConfetti(false);
    setTimeout(() => setStep(1), 1500);
    setTimeout(() => setStep(2), 3000);
    setTimeout(() => setStep(3), 4500);
    setTimeout(() => {
      setStep(4);
      setShowConfetti(true);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
      <TrailEffect />
      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={150}
          recycle={false}
          gravity={0.15}
        />
      )}

      {/* Minimal Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xl opacity-40"
            animate={{
              y: [0, -30],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {["✨", "⭐", "💫"][i % 3]}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Step Content */}
        <AnimatePresence mode="wait">
          {step < surpriseContent.length && (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6 max-w-2xl mx-auto"
            >
              <motion.div
                className="text-7xl md:text-8xl mb-4"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {surpriseContent[step].emoji}
              </motion.div>

              <motion.h1
                className={`text-3xl md:text-5xl font-bold bg-gradient-to-r ${surpriseContent[step].color} bg-clip-text text-transparent mb-4`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {surpriseContent[step].title}
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {surpriseContent[step].description}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Final Stage */}
        {step === 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center w-full max-w-3xl mx-auto space-y-8"
          >
            {/* Birthday Header */}
            <div className="space-y-4">
              <motion.h2
                className="text-4xl md:text-6xl font-bold"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                🎂 Happy Birthday Aqsa! 🎂
              </motion.h2>

              <motion.p
                className="text-xl text-cyan-200 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                You're truly special! 🌷
              </motion.p>
            </div>

            {/* Special Memories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-pink-200 mb-4">
                💖 Special Memories
              </h3>

              {specialMemories.map((memory, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.2 }}
                  className={`bg-gradient-to-br ${memory.bgColor} rounded-2xl p-4 border border-white/20`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{memory.emoji}</div>
                    <p className="text-white/90 text-left text-sm md:text-base leading-relaxed flex-1">
                      {memory.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Final Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-white/20"
            >
              <p className="text-lg text-white/90 italic leading-relaxed">
                {finalMessage}
              </p>
            </motion.div>

            {/* Replay Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.button
                onClick={restartCelebration}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-base px-6 py-3 rounded-xl border border-white/20 hover:scale-105 transition-transform"
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <span>Replay Celebration</span>
                  <span>🔄</span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
