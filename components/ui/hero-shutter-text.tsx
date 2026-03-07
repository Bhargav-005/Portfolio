"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw } from "lucide-react";

interface HeroTextProps {
  text?: string;
  className?: string;
}

export default function HeroText({
  text = "BHARGAV",
  className = "",
}: HeroTextProps) {
  const [count, setCount] = useState(0);
  const characters = text.split("");

  return (
    <div
      onClick={() => setCount((c) => c + 1)}
      className={`relative flex flex-col items-center w-full cursor-pointer
      transition-colors duration-700 ${className}`}
    >
      {/* Main Text Container */}
      <div className="relative z-10 w-full px-4 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={count}
            className="flex flex-wrap justify-center items-center w-full"
            style={{ 
              fontFamily: "var(--font-anton), Impact, sans-serif",
              fontSize: "clamp(80px, 18vw, 240px)",
              letterSpacing: "0.06em",
              lineHeight: "0.9"
            }}
          >
            {characters.map((char, i) => (
              <div
                key={i}
                className="relative px-[0.1vw] overflow-hidden group"
              >
                {/* Main Character */}
                <motion.span
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.04 + 0.3, duration: 0.8 }}
                  className="leading-none text-[#111111] font-normal uppercase origin-top"
                  style={{ display: "inline-block", transform: "scaleY(1.2)" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>

                {/* Top Slice Layer */}
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "100%", opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.04,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 leading-none text-zinc-400 z-10 pointer-events-none uppercase origin-top font-normal"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)", display: "inline-block", transform: "scaleY(1.2)" }}
                >
                  {char}
                </motion.span>

                {/* Middle Slice Layer */}
                <motion.span
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: "-100%", opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.04 + 0.1,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 leading-none text-zinc-600 z-10 pointer-events-none uppercase origin-top font-normal"
                  style={{
                    clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)", display: "inline-block", transform: "scaleY(1.2)"
                  }}
                >
                  {char}
                </motion.span>

                {/* Bottom Slice Layer */}
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "100%", opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.04 + 0.2,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 leading-none text-zinc-400 z-10 pointer-events-none uppercase origin-top font-normal"
                  style={{
                    clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)", display: "inline-block", transform: "scaleY(1.2)"
                  }}
                >
                  {char}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
