"use client";
import React from "react";
import Confetti from "react-confetti";

export default function ConfettiBackground() {
  return <Confetti numberOfPieces={150} recycle={false} />;
}
