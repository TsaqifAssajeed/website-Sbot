"use client";

import { useEffect, useState } from "react";

// Function to generate a random number between min and max
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
const randomFloat = (min: number, max: number) => Math.random() * (max - min) + min;

interface Snowflake {
  id: number;
  left: number;
  size: number;
  speedY: number;
  opacity: number;
  delay: number;
}

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Create 150 smaller particle-like snowflakes
    const flakes = Array.from({ length: 150 }).map((_, index) => ({
      id: index,
      left: random(1, 99), // Random horizontal position (percentage)
      size: randomFloat(0.1, 0.3), // Very small sizes for particle effect
      speedY: randomFloat(15, 35), // Varied fall speeds
      opacity: randomFloat(0.1, 0.4), // Lower opacity for subtle particles
      delay: randomFloat(0, 20), // Random delay for more natural appearance
    }));

    setSnowflakes(flakes);
  }, []);

  return (
    <div className="snowfall-wrapper">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          style={{
            position: "absolute",
            left: `${flake.left}%`,
            top: "-5px",
            width: `${flake.size}rem`,
            height: `${flake.size}rem`,
            opacity: flake.opacity,
            backgroundColor: "white",
            borderRadius: "50%",
            animation: `snowfall ${flake.speedY}s linear infinite`,
            animationDelay: `${flake.delay}s`,
            zIndex: -1,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
}
