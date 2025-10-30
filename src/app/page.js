"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import TypingText from "@/components/TypingText";
import AnimatedButton from "@/components/AnimatedButton";
import Link from "next/link";
import TrailEffect from "@/components/ConfettiBackground";

export default function HomePage() {
  const [cakeCut, setCakeCut] = useState(false);

  const handleCakeClick = () => {
    setCakeCut(true);
    setTimeout(() => setCakeCut(false), 2500);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white flex flex-col items-center justify-center">
      {/* Soft Glow Background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]"
        animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center sm:justify-between justify-center px-8 h-full py-10 w-full max-w-3xl mx-auto">
        {/* Title */}
        <div className="text-center space-y-2 mt-4">
          <TypingText
            text="Happy Birthday"
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent"
          />
          <TypingText
            text="Aqsa Arif 🎉"
            // text="Ahtisham🎉"
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-200 via-pink-200 to-purple-200 bg-clip-text text-transparent"
          />
          <p className="text-base text-purple-200">
            Wishing you love, joy, and magic today ✨
          </p>
        </div>
        <TrailEffect />

        {/* Cake Section */}
        <motion.div
          onClick={handleCakeClick}
          whileTap={{ scale: 0.95 }}
          className="relative cursor-pointer mt-2"
        >
          <motion.div
            className="relative w-36 h-36"
            animate={{ rotate: [0, 1.5, -1.5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {/* Cake Base */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-18 bg-gradient-to-b from-pink-500 to-purple-700 rounded-2xl shadow-lg border border-pink-300/30" />
            {/* Top Layer */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-20 h-8 bg-gradient-to-b from-purple-400 to-indigo-600 rounded-xl border border-purple-300/30 shadow-md" />
            {/* Candles (lower bounce now) */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 flex space-x-3">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-6 bg-gradient-to-b from-cyan-200 to-blue-500 rounded-t-lg"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.1 + i * 0.3, repeat: Infinity }}
                >
                  <motion.div
                    className="w-2 h-2 bg-yellow-300 rounded-full -mt-1"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Cake Click Wishing Line */}
        {cakeCut && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-4 text-pink-200 text-lg font-medium"
          >
            🎂 Wishing you the happiest birthday, Aqsa Arif! 💖
          </motion.div>
        )}

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-center text-purple-100 text-base md:text-lg leading-relaxed max-w-lg mt-6"
        >
          “May this year bring you everything you’ve been dreaming of. You
          deserve it all — happiness, success, and endless light.” 💫
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 mb-6">
          <AnimatedButton
            href="/message"
            className="px-5 py-2 text-base font-semibold rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 hover:scale-105 transition-transform shadow-lg"
          >
            🎁 Discover Your Surprise
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
}
