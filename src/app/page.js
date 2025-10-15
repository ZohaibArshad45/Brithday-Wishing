"use client";
import TypingText from "@/components/TypingText";
import AnimatedButton from "@/components/AnimatedButton";
import ConfettiBackground from "@/components/ConfettiBackground";

export default function HomePage() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 to-purple-600 text-white overflow-hidden">
      <ConfettiBackground />
      <TypingText
        text="🎉 Happy Birthday Zohaib 🎂"
        className="text-3xl md:text-5xl font-bold mb-8 text-center"
      />
      <AnimatedButton href="/message">Start Celebration</AnimatedButton>
    </div>
  );
}
