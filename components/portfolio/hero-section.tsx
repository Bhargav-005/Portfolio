"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React, { type ReactNode } from "react";
import HeroText from "@/components/ui/hero-shutter-text";

function TiltCard({ children }: { children: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative z-20 cursor-pointer w-full h-full"
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#ECE8E1] pt-32 pb-12"
    >
      {/* Huge Background Text - Replaced with Shutter Component */}
      <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden pt-24 lg:pt-28">
        <HeroText text="BHARGAV" className="!h-auto !w-auto pointer-events-auto" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl mt-[10vh] md:mt-[20vh]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[50vh]">

          {/* Left Side Info */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-12 xl:mt-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold flex flex-col sm:flex-row items-center lg:items-baseline justify-center lg:justify-start gap-2 mb-4">
                <span className="text-[#000000]">8+</span>
                <span className="text-[#7A7A7A] text-lg lg:text-xl font-medium">Real World Projects</span>
              </h2>
              <p className="text-[#000000] text-base leading-relaxed max-w-[300px] mx-auto lg:mx-0">
                Hands-on experience delivering real-world Full stack projects.
              </p>
            </motion.div>
          </div>

          {/* Center Image - The Highlight */}
          <div className="w-full lg:w-1/3 flex justify-center items-center py-8 lg:py-0 relative">
            {/* Decorative Circular Outlines */}
            <div className="absolute top-0 right-1/4 w-32 h-32 border border-black/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-48 h-48 border border-black/10 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-black/20 rounded-full -translate-y-1/2 -translate-x-full pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="relative w-[260px] h-[340px] sm:w-[280px] sm:h-[380px] md:w-[320px] md:h-[420px]"
            >
              <TiltCard>
                <motion.div
                  className="relative w-full h-full overflow-hidden transform-gpu will-change-transform bg-[#D9D9D9]"
                  initial={{ rotate: -8 }}
                  whileHover={{ rotate: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    borderRadius: "20px",
                    border: "6px solid white",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.25)"
                  }}
                >
                  <Image
                    src="/bhargav.jpg"
                    alt="Bhargav Profile"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 260px, (max-width: 1024px) 280px, 320px"
                  />
                </motion.div>
              </TiltCard>
            </motion.div>
          </div>

          {/* Right Side Info */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-12 xl:mt-20 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center lg:items-start"
            >
              <p className="text-[#7A7A7A] text-base leading-relaxed max-w-[300px] mb-8">
                Hi, I’m Bhargav, a passionate Full Stack Developer and Information Technology student focused on building scalable web applications and backend systems using modern technologies like React.js, Node.js, and PostgreSQL, with a strong interest in cloud computing and system design.
              </p>

              <motion.a
                href="/@Bhargav (IT).pdf"
                download="@Bhargav (IT).pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white text-sm font-bold tracking-wider rounded-[8px] flex items-center gap-3 group"
                style={{ padding: '14px 28px' }}
              >
                RESUME
                <MoveRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
