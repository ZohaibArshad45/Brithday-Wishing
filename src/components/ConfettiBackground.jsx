"use client";
import React, { useState, useEffect, useRef } from "react";

export default function TrailEffect() {
  const [trail, setTrail] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMuted, setIsMuted] = useState(true); // Start muted on live site
  const [userInteracted, setUserInteracted] = useState(false);
  const playerRef = useRef(null);
  const youtubeIframeRef = useRef(null);
  const userInteractionRef = useRef(false);

  const emojiSets = {
    birthday: ["🎂", "🎈", "🎁", "✨", "🌟", "💫", "🎉", "🥳", "🎊", "💝"],
    nature: ["🌸", "🌺", "🌼", "🦋", "🐦", "🌿", "💐", "🌙", "⭐", "☁️"],
    magic: ["🔮", "💎", "🌠", "⚡", "💖", "💫", "✨", "🌟", "🕯️", "🎇"],
    love: ["💕", "💖", "💗", "💓", "💞", "💘", "❤️", "🧡", "💛", "💚"],
  };

  const [currentSet, setCurrentSet] = useState("birthday");
  const trailLength = 15;

  // Track user interaction for autoplay
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!userInteractionRef.current) {
        userInteractionRef.current = true;
        setUserInteracted(true);

        // Unmute when user interacts (optional)
        if (isMuted && playerRef.current) {
          playerRef.current.unMute();
          playerRef.current.setVolume(100);
          setIsMuted(false);
        }

        // Try to play if paused
        if (playerRef.current && playerRef.current.playVideo) {
          playerRef.current.playVideo();
        }
      }
    };

    // Add event listeners for user interaction
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [isMuted]);

  // YouTube IFrame API setup - SIMPLIFIED for production
  useEffect(() => {
    // Load YouTube IFrame API script
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Initialize player
    const initializePlayer = () => {
      // Always start muted on production for autoplay to work
      const startMuted = true;

      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: "sqkzN2Ye_pk",
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: "sqkzN2Ye_pk",
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          mute: startMuted ? 1 : 0, // MUTED by default for autoplay
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
        },
        events: {
          onReady: (event) => {
            console.log("YouTube player ready on production");
            // Play video (muted as per browser requirements)
            event.target.playVideo();

            // Set initial mute state in UI
            setIsMuted(startMuted);
          },
          onStateChange: (event) => {
            console.log("YouTube player state:", event.data);
          },
          onError: (error) => {
            console.error("YouTube player error:", error);
          },
        },
      });
    };

    // Wait for YouTube API to load
    if (window.YT && window.YT.Player) {
      initializePlayer();
    } else {
      window.onYouTubeIframeAPIReady = initializePlayer;
    }

    return () => {
      // Clean up
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, []);

  // Handle mute/unmute
  const toggleMute = () => {
    if (!playerRef.current) return;

    const newMutedState = !isMuted;
    setIsMuted(newMutedState);

    if (newMutedState) {
      playerRef.current.mute();
    } else {
      // Only unmute if user has interacted
      if (userInteractionRef.current) {
        playerRef.current.unMute();
        playerRef.current.setVolume(100);
      } else {
        // If no interaction yet, show instruction
        alert(
          "Please click/tap anywhere on the page first to enable sound, then click the unmute button."
        );
        setIsMuted(true); // Keep muted
      }
    }
  };

  useEffect(() => {
    let animationFrameId;
    let lastTime = 0;
    const throttleDelay = 16; // ~60fps

    const handleMove = (e) => {
      const currentTime = Date.now();

      if (currentTime - lastTime >= throttleDelay) {
        setMousePosition({ x: e.clientX, y: e.clientY });

        const newPoint = {
          x: e.clientX,
          y: e.clientY,
          id: Date.now() + Math.random(),
          rotation: Math.random() * 360,
          scale: 0.8 + Math.random() * 0.4,
          emojiSet: currentSet,
        };

        setTrail((prev) => {
          const updated = [...prev, newPoint];
          if (updated.length > trailLength) updated.shift();
          return updated;
        });

        lastTime = currentTime;
      }
    };

    // Auto-cycle through emoji sets
    const cycleInterval = setInterval(() => {
      const sets = Object.keys(emojiSets);
      const currentIndex = sets.indexOf(currentSet);
      const nextIndex = (currentIndex + 1) % sets.length;
      setCurrentSet(sets[nextIndex]);
    }, 4000);

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      clearInterval(cycleInterval);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [currentSet]);

  // Calculate smooth trail with physics
  const getTrailStyle = (index, total) => {
    const progress = index / total;
    const reverseIndex = total - index - 1;

    // Smooth size decay
    const sizeScale = 0.3 + (1 - progress) * 0.7;

    // Opacity decay with curve
    const opacity = Math.pow(1 - progress, 1.5);

    // Color variation based on position
    const hue = (progress * 60 + 280) % 360; // Purple to pink spectrum

    // Smooth delay for wave effect
    const delay = reverseIndex * 0.03;

    return {
      opacity,
      transform: `translate(-50%, -50%) scale(${sizeScale})`,
      filter: `hue-rotate(${hue}deg) brightness(1.2)`,
      animationDelay: `${delay}s`,
      zIndex: reverseIndex,
    };
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* YouTube IFrame - Hidden but plays audio */}
      <div
        id="youtube-player"
        ref={youtubeIframeRef}
        className="fixed top-0 left-0 w-1 h-1 opacity-0 overflow-hidden pointer-events-none"
        style={{ zIndex: -9999 }}
      />

      {/* Instruction for user (appears only on first load) */}
      {!userInteracted && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-lg text-sm z-60 pointer-events-auto animate-pulse">
          🔊 Click anywhere to enable sound
        </div>
      )}

      {/* Mute/Unmute Coin Button */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-60 pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-300"
        style={{
          width: "60px",
          height: "60px",
        }}
        aria-label={isMuted ? "Unmute sound" : "Mute sound"}
      >
        {/* Coin design */}
        <div className="relative w-full h-full">
          {/* Coin outer ring */}
          <div
            className={`absolute inset-0 rounded-full ${
              isMuted
                ? "bg-gradient-to-br from-gray-400 to-gray-600"
                : "bg-gradient-to-br from-yellow-400 to-yellow-600"
            } shadow-lg`}
          ></div>

          {/* Coin inner design */}
          <div
            className={`absolute inset-2 rounded-full ${
              isMuted
                ? "bg-gradient-to-br from-gray-300 to-gray-500"
                : "bg-gradient-to-br from-yellow-300 to-yellow-500"
            } flex items-center justify-center`}
          >
            {/* Speaker icon */}
            <div className="relative w-8 h-8">
              <div
                className={`absolute inset-0 ${
                  isMuted ? "bg-gray-400" : "bg-amber-700"
                } rounded-full`}
              ></div>
              <div
                className={`absolute left-2 top-2 w-4 h-4 ${
                  isMuted ? "bg-gray-300" : "bg-amber-600"
                } rounded-full`}
              ></div>

              {/* Mute/Unmute symbol */}
              {isMuted ? (
                // Muted symbol (cross)
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-1 bg-red-500 transform rotate-45"></div>
                  <div className="absolute w-6 h-1 bg-red-500 transform -rotate-45"></div>
                </div>
              ) : (
                // Sound waves
                <>
                  <div className="absolute -right-1 top-1 w-2 h-2 bg-amber-500 rounded-full opacity-70"></div>
                  <div className="absolute -right-3 top-3 w-3 h-3 bg-amber-400 rounded-full opacity-50"></div>
                  <div className="absolute -right-5 top-5 w-4 h-4 bg-amber-300 rounded-full opacity-30"></div>
                </>
              )}
            </div>
          </div>

          {/* Coin shine effect */}
          <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white/30 blur-sm"></div>

          {/* Tooltip text */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {isMuted ? "🔇 Click page first to unmute" : "🔊 Sound On"}
          </div>
        </div>
      </button>

      {/* Mouse highlight effect */}
      <div
        className="absolute w-8 h-8 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-xl transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
      />

      {/* Enhanced trail with smooth animations */}
      {trail.map((point, index, array) => {
        const emojiList = emojiSets[point.emojiSet || currentSet];
        const emojiIndex = Math.floor(
          (index / array.length) * emojiList.length
        );
        const emoji = emojiList[emojiIndex % emojiList.length];

        return (
          <div
            key={point.id}
            className="absolute animate-float-trail"
            style={{
              left: point.x,
              top: point.y,
              ...getTrailStyle(index, array.length),
            }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div
                className="absolute inset-0 animate-pulse-glow"
                style={{
                  filter: "blur(8px)",
                  opacity: 0.6,
                  transform: "scale(1.3)",
                }}
              >
                {emoji}
              </div>

              {/* Main emoji */}
              <div
                className="relative transform transition-all duration-200"
                style={{
                  transform: `rotate(${point.rotation}deg) scale(${point.scale})`,
                }}
              >
                {emoji}
              </div>
            </div>
          </div>
        );
      })}

      {/* Floating background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-10 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            {emojiSets.birthday[i % emojiSets.birthday.length]}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float-trail {
          0% {
            transform: translate(-50%, -50%) scale(0.8) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1) rotate(5deg);
          }
          80% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(0.9) rotate(-3deg);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.6) rotate(0deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1.3);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.5);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        .animate-float-trail {
          animation: float-trail 0.8s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 1.5s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
