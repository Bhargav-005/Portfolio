"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, BookOpen, Star } from "lucide-react";

// Pre-computed star positions to avoid hydration mismatch
const starPositions = [
  { left: 5, top: 10, size: 10, duration: 2.5, delay: 0.2 },
  { left: 15, top: 80, size: 12, duration: 3.1, delay: 1.5 },
  { left: 25, top: 30, size: 8, duration: 2.8, delay: 0.8 },
  { left: 35, top: 60, size: 14, duration: 3.5, delay: 1.2 },
  { left: 45, top: 15, size: 9, duration: 2.2, delay: 0.5 },
  { left: 55, top: 85, size: 11, duration: 3.3, delay: 1.8 },
  { left: 65, top: 45, size: 13, duration: 2.9, delay: 0.3 },
  { left: 75, top: 70, size: 10, duration: 3.7, delay: 1.0 },
  { left: 85, top: 25, size: 8, duration: 2.4, delay: 0.7 },
  { left: 95, top: 55, size: 12, duration: 3.0, delay: 1.4 },
  { left: 10, top: 40, size: 9, duration: 2.6, delay: 0.9 },
  { left: 20, top: 90, size: 11, duration: 3.2, delay: 1.6 },
  { left: 30, top: 5, size: 14, duration: 2.7, delay: 0.1 },
  { left: 40, top: 75, size: 10, duration: 3.4, delay: 1.3 },
  { left: 50, top: 50, size: 8, duration: 2.3, delay: 0.6 },
  { left: 60, top: 20, size: 13, duration: 3.6, delay: 1.9 },
  { left: 70, top: 65, size: 11, duration: 2.5, delay: 0.4 },
  { left: 80, top: 35, size: 9, duration: 3.1, delay: 1.1 },
  { left: 90, top: 95, size: 12, duration: 2.8, delay: 0.2 },
  { left: 3, top: 50, size: 10, duration: 3.3, delay: 1.7 },
];

const achievements = [
  {
    icon: Trophy,
    title: "Google Cloud Arcade Legend Tier",
    description:
      "Completed advanced cloud labs covering DevOps, infrastructure, and data services.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: BookOpen,
    title: "Research Paper Published",
    description:
      "Android Malware Detection using Machine Learning - Published in IJRPR.",
    gradient: "from-blue-500 to-cyan-500",
  },
];

export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-24 md:py-32 bg-[#000000] overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {starPositions.map((star, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          >
            <Star
              size={star.size}
              className="text-[#FFFFFF]/20"
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-[#FFFFFF]/10 rounded-full text-sm font-medium text-[#BFBFBF] mb-4"
            >
              Recognition
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-6">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#FFFFFF]/0 via-[#FFFFFF] to-[#FFFFFF]/0 mx-auto" />
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 50, rotateX: -10 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative perspective-1000"
                >
                  <div className="relative bg-[#2B2B2B]/50 backdrop-blur-lg rounded-3xl p-8 border border-[#FFFFFF]/10 overflow-hidden">
                    {/* Gradient glow */}
                    <div
                      className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${achievement.gradient} rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 group-hover:opacity-30 transition-opacity`}
                    />

                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                      }}
                      className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.gradient} mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />

                      {/* Pulse ring */}
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.gradient}`}
                      />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold text-[#FFFFFF] mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-[#BFBFBF] leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Decorative line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.gradient} origin-left`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
