"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Confetti from "react-confetti";

export default function FinalSurprise() {
  const [step, setStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showSecretMessage, setShowSecretMessage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Step animation
  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 2000),
      setTimeout(() => setStep(2), 4000),
      setTimeout(() => setStep(3), 6000),
      setTimeout(() => {
        setStep(4);
        setShowConfetti(true);
      }, 8000),
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

  const secretMessages = [
    "You light up every room you walk into 💫",
    "Your smile could power a small city 😄",
    "The world is better with you in it 🌍",
    "You're someone's reason to smile today 🌸",
    "Keep being your amazing self! 🎀",
    "Today is about celebrating YOU! 🎉",
  ];

  const restartCelebration = () => {
    setStep(0);
    setShowConfetti(false);
    setShowSecretMessage(false);

    // Restart the step animation
    setTimeout(() => setStep(1), 2000);
    setTimeout(() => setStep(2), 4000);
    setTimeout(() => setStep(3), 6000);
    setTimeout(() => {
      setStep(4);
      setShowConfetti(true);
    }, 8000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={250}
          recycle={false}
          gravity={0.1}
        />
      )}

      {/* Floating background hearts */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {["💖", "💕", "💓", "💗", "💘"][i % 5]}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Progress Dots */}
        <motion.div
          className="flex space-x-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {surpriseContent.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index <= step ? "bg-white" : "bg-white/30"
              }`}
              animate={{
                scale: index === step ? [1, 1.5, 1] : 1,
              }}
              transition={{
                duration: 1,
                repeat: index === step ? Infinity : 0,
              }}
            />
          ))}
        </motion.div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {step < surpriseContent.length && (
            <motion.div
              key={step}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.2, y: -50 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              <motion.div
                className="text-8xl md:text-9xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                  y: [0, -20, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {surpriseContent[step].emoji}
              </motion.div>

              <motion.h1
                className={`text-4xl md:text-6xl font-bold bg-gradient-to-r ${surpriseContent[step].color} bg-clip-text text-transparent`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {surpriseContent[step].title}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
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
            transition={{ duration: 1 }}
            className="space-y-10 mt-10 text-center"
          >
            <motion.h2
              className="text-5xl md:text-7xl font-bold"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎂 Happy Birthday Aqsa! 🎂
            </motion.h2>

            <motion.p
              className="text-2xl text-cyan-200 font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              You're truly special! 🌷
            </motion.p>

            {/* Secret Message Button */}
            <motion.button
              onClick={() => setShowSecretMessage(!showSecretMessage)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl border border-white/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💌 Click for a Secret Message
            </motion.button>

            <AnimatePresence>
              {showSecretMessage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl max-w-2xl mx-auto"
                >
                  <h3 className="text-2xl font-bold text-pink-200 mb-4">
                    Just for you... 💫
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    {
                      secretMessages[
                        Math.floor(Math.random() * secretMessages.length)
                      ]
                    }
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* Thank You Button */}
              {/* <Link href="/thank-you">
                <motion.button
                  className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg border border-white/20 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Next....</span>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    💝
                  </motion.span>
                </motion.button>
              </Link> */}

              {/* Replay Celebration Button */}
              <motion.button
                onClick={restartCelebration}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg border border-white/20 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
