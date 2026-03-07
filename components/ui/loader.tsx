"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "Loading portfolio...",
  "Initializing components...",
  "Connecting modules...",
  "Starting interface...",
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentFullText = lines[currentLineIndex];

      if (!isDeleting) {
        // Typing
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));

        if (displayedText.length === currentFullText.length) {
          // Pause at the end of the line
          timeout = setTimeout(() => {
            if (currentLineIndex === lines.length - 1) {
              // Finish sequence
              setTimeout(onComplete, 500); // Faster final reveal
            } else {
              setIsDeleting(true);
            }
          }, 400); // Shorter pause
        } else {
          timeout = setTimeout(type, 30); // Faster typing speed
        }
      } else {
        // Deleting
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentLineIndex((prev) => prev + 1);
          timeout = setTimeout(type, 100); // Shorter pause between lines
        } else {
          timeout = setTimeout(type, 10); // Much faster deletion speed
        }
      }
    };

    timeout = setTimeout(type, 50);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentLineIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] bg-black flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-[320px] h-[180px] bg-[#1e1e1e] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5"
      >
        {/* Terminal Header */}
        <div className="h-9 bg-[#2a2a2a] flex items-center justify-between px-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <span className="text-[11px] font-mono text-white/40 tracking-widest uppercase">
            Status
          </span>
        </div>

        {/* Terminal Content */}
        <div className="p-5 font-mono text-sm">
          <div className="flex items-center gap-2">
            <span className="text-white/30">$</span>
            <span className="text-[#00ff88] drop-shadow-[0_0_8px_rgba(0,255,136,0.3)]">
              {displayedText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-[#00ff88] ml-1 align-middle"
            />
          </div>
          
          <div className="mt-4 flex flex-col gap-1">
            {lines.slice(0, currentLineIndex).map((line, i) => (
              <div key={i} className="text-white/20 text-xs flex gap-2">
                <span>✓</span>
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
