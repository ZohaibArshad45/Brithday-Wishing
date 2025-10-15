"use client";
import { motion } from "framer-motion";

export default function ConfettiBackground() {
  const confettiColors = [
    "#ff6b6b",
    "#ffd93d",
    "#6bcf7f",
    "#4d96ff",
    "#c780e8",
  ];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-4 opacity-70"
          style={{
            backgroundColor:
              confettiColors[Math.floor(Math.random() * confettiColors.length)],
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ["0vh", "100vh"],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
            opacity: [1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
