"use client";

import { useEffect, useState } from "react";

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
    const flakes = Array.from({ length: 150 }).map((_, index) => ({
      id: index,
      left: random(1, 99),
      size: randomFloat(0.1, 0.3),
      speedY: randomFloat(5, 15), // Percepat animasi jika terlalu lambat
      opacity: randomFloat(0.1, 0.4),
      delay: randomFloat(0, 20),
    }));

    setSnowflakes(flakes);
  }, []);

  return (
    <div className="snowfall-wrapper" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
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
            backgroundColor: "white", // Warna salju
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