"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, MapPin, Calendar, ChevronRight, Brain } from "lucide-react";

const experiences = [
  {
    company: "HashTek Solutions",
    role: "Cloud Computing Intern",
    location: "Visakhapatnam",
    period: "June 2025 – July 2025",
    responsibilities: [
      "Hands-on experience with AWS services such as EC2, S3, and IAM",
      "Configured cloud infrastructure and access policies",
      "Learned cloud architecture and scalable infrastructure design",
      "Explored security and cost optimization strategies",
    ],
    icon: Cloud,
  },
  {
    company: "Infosys Springboard",
    role: "AI / ML Intern",
    location: "Remote",
    period: "DECEMBER 2025 - FEBURARY 2026",
    responsibilities: [
      "Built InstruNet AI, a CNN-based music instrument recognition system",
      "Processed audio using Mel-Spectrogram and STFT features",
      "Trained deep learning models achieving ~99% validation accuracy",
      "Generated structured prediction outputs and analysis reports",
    ],
    icon: Brain,
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 bg-[#ECE8E1] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2C3E50] rounded-full -translate-y-1/2 translate-x-1/2"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
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
              className="inline-block px-4 py-2 bg-[#2C3E50]/8 rounded-full text-sm font-medium text-[#2C3E50] mb-4"
            >
              Career Journey
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-6">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C3E50]/0 via-[#2C3E50] to-[#2C3E50]/0 mx-auto" />
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2C3E50] via-[#2C3E50]/50 to-transparent md:-translate-x-1/2"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                    className={`relative pl-8 md:pl-0 pt-4 md:pt-0 h-full ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                      className={`absolute top-0 md:top-6 w-4 h-4 rounded-full bg-[#2C3E50] border-4 border-[#ECE8E1] z-10 ${
                        index % 2 === 0
                          ? "left-0 -translate-x-1/2 md:left-auto md:-right-[1px] md:translate-x-1/2"
                          : "left-0 -translate-x-1/2 md:left-0 md:-translate-x-1/2"
                      }`}
                    />

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="relative bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-[#2C3E50]/5 border border-[#E5E7EB] h-full flex flex-col"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2B2B2B]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2C3E50]/10 mb-4">
                      <Icon className="w-6 h-6 text-[#2C3E50]" />
                    </div>

                    {/* Header */}
                    <h3 className="text-xl md:text-2xl font-bold text-[#111111] mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-lg font-medium text-[#2C3E50] mb-4">
                      {exp.role}
                    </p>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-[#6B7280]">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.1 + 0.6 }}
                          className="flex items-start gap-3"
                        >
                          <ChevronRight
                            size={16}
                            className="text-[#2C3E50] mt-1 flex-shrink-0"
                          />
                          <span className="text-[#6B7280] leading-relaxed">
                            {resp}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
