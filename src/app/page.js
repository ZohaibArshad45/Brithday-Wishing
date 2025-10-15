"use client";
import { motion } from "framer-motion";
import TypingText from "@/components/TypingText";
import AnimatedButton from "@/components/AnimatedButton";
import ConfettiBackground from "@/components/ConfettiBackground";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-y-auto py-8">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-gradient-to-r from-rose-500/20 to-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>
      </div>

      {/* Enhanced Confetti */}
      <ConfettiBackground />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-3xl"
            initial={{
              y: "120vh",
              x: Math.random() * 100,
              rotate: 0,
            }}
            animate={{
              y: "-20vh",
              x: Math.random() * 100,
              rotate: 360,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {["💖", "✨", "🎀", "🌟", "🎉", "🎁"][i % 6]}
          </motion.div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto w-full my-auto">
        {/* Central Main Content - Compact Layout */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          {/* Animated Birthday Emoji */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
          >
            <motion.div
              className="text-6xl md:text-8xl lg:text-9xl mb-2"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🎂
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypingText
              text="Happy Birthday My Friend! 💝"
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-rose-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent leading-tight"
              speed={40}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            To the most wonderful person in my life (Aqas Arif)
          </motion.p>

          {/* Friendship Card */}
          <motion.div
            className="max-w-2xl mx-auto mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <motion.div
              className="text-sm md:text-lg bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-white/10 shadow-2xl mx-2"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(192, 132, 252, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p
                className="text-gray-200 leading-relaxed text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
                &quot;You&apos;re an amazing friend who brings so much joy and
                laughter into my life. Today we celebrate you - the wonderful,
                kind-hearted person who makes every day better. This is your
                special day! 🎉&quot;
              </motion.p>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            className="pt-2 md:pt-4"
          >
            <AnimatedButton
              href="/message"
              className="relative overflow-hidden group bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold text-base md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-2xl border border-white/20 w-full max-w-xs mx-auto"
            >
              <motion.span
                className="relative z-10 flex items-center justify-center space-x-2 md:space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm md:text-base">Begin Our Journey</span>
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-lg md:text-xl"
                >
                  💫
                </motion.span>
              </motion.span>

              {/* Button Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.8 }}
              />
            </AnimatedButton>
          </motion.div>

          {/* Bottom Floating Emojis */}
          <motion.div
            className="flex justify-center space-x-4 md:space-x-6 pt-4 md:pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            {["🎈", "🎁", "✨", "🥳", "💫", "🌸"].map((emoji, index) => (
              <motion.div
                key={index}
                className="text-xl md:text-2xl lg:text-3xl"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.3 },
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Corner Decorations - Hidden on mobile */}
      <motion.div
        className="hidden md:block absolute top-4 md:top-8 left-4 md:left-8 text-2xl md:text-3xl opacity-60"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        💖
      </motion.div>
      <motion.div
        className="hidden md:block absolute top-4 md:top-8 right-4 md:right-8 text-2xl md:text-3xl opacity-60"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        ✨
      </motion.div>
      <motion.div
        className="hidden md:block absolute bottom-4 md:bottom-8 left-4 md:left-8 text-2xl md:text-3xl opacity-60"
        animate={{
          y: [0, -8, 0],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        🌟
      </motion.div>
      <motion.div
        className="hidden md:block absolute bottom-4 md:bottom-8 right-4 md:right-8 text-2xl md:text-3xl opacity-60"
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [360, 0, 360],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
      >
        🎀
      </motion.div>
    </div>
  );
}
