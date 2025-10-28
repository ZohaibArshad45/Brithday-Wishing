"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TrailEffect from "@/components/ConfettiBackground";

const memories = [
  {
    id: 1,
    img: "/mem1.jpg",
    text: "The laugh that never fades 😄",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    img: "/mem2.jpg",
    text: "Best day ever 🎉",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    img: "/mem3.jpg",
    text: "Always good vibes 💫",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    img: "/mem4.jpg",
    text: "Unforgettable moments ❤️",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    img: "/mem5.jpg",
    text: "Adventures together 🌟",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 6,
    img: "/mem6.jpg",
    text: "Pure happiness 🥰",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function MemoriesPage() {
  const [visible, setVisible] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [imageError, setImageError] = useState({});
  const router = useRouter();

  const memoizedMemories = useMemo(() => memories, []);

  useEffect(() => {
    if (visible < memoizedMemories.length) {
      const timer = setTimeout(() => setVisible((v) => v + 1), 500);
      return () => clearTimeout(timer);
    } else {
      setLoaded(true);
    }
  }, [visible, memoizedMemories.length]);

  const handleImageError = useCallback((id) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      router.push("/wishes");
    }
  };

  const floatingEmojis = ["💖", "✨", "🌸", "🌟", "🎀", "💕"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 text-white flex flex-col items-center py-16 px-4 relative overflow-hidden">
      <TrailEffect />
      {/* Floating Emojis */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            {floatingEmojis[i % floatingEmojis.length]}
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <div className="text-6xl mb-4 animate-bounce">📸</div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
          Cherished Memories, Aqsa 🌷
        </h1>
        <p className="text-gray-300 mt-2">Reliving our best times 💫</p>
      </div>

      {/* Memories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl z-10">
        {memoizedMemories.slice(0, visible).map((memory, index) => (
          <div
            key={memory.id}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {!imageError[memory.id] ? (
              <div className="w-full h-64 relative">
                <Image
                  src={memory.img}
                  alt={memory.text}
                  fill
                  className="object-cover"
                  onError={() => handleImageError(memory.id)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ) : (
              <div
                className={`w-full h-64 flex flex-col items-center justify-center bg-gradient-to-br ${memory.color} text-white`}
              >
                <span className="text-4xl mb-2">📸</span>
                <p className="text-sm opacity-80">Memory #{memory.id}</p>
                <p className="text-xs opacity-60 mt-1">Image not available</p>
              </div>
            )}

            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-center">
              <p className="text-sm md:text-base font-semibold">
                {memory.text}
              </p>
            </div>

            <span
              className={`absolute top-3 right-3 w-3 h-3 rounded-full bg-gradient-to-br ${memory.color} animate-pulse`}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      {/* Skeleton Loading */}
      {visible < memoizedMemories.length && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl z-10 mt-8">
          {Array.from({ length: memoizedMemories.length - visible }).map(
            (_, index) => (
              <div
                key={`skeleton-${index}`}
                className="bg-white/5 animate-pulse rounded-2xl h-80 border border-white/10"
              />
            )
          )}
        </div>
      )}

      {/* Loading / Completion State */}
      <div className="mt-12 text-center z-10">
        {!loaded ? (
          <div
            className="bg-white/10 px-6 py-3 rounded-2xl border border-white/20 animate-pulse"
            aria-live="polite"
            aria-atomic="true"
          >
            <p>
              Loading {visible}/{memoizedMemories.length} memories...
            </p>
            <div className="w-48 h-2 bg-white/20 rounded-full mt-2 mx-auto overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500"
                style={{
                  width: `${(visible / memoizedMemories.length) * 100}%`,
                }}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-pink-200 text-xl font-semibold animate-pulse">
              All memories loaded! 🎉
            </p>
            <Link href="/wishes" legacyBehavior>
              <button
                className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50"
                onKeyPress={handleKeyPress}
                aria-label="Continue to birthday wishes"
              >
                Continue to Wishes 🎂
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(3deg);
          }
          66% {
            transform: translateY(-5px) rotate(-3deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
