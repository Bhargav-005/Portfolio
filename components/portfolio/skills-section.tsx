"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "Java", "SQL"],
    color: "#2C3E50",
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
    color: "#111111",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL"],
    color: "#2C3E50",
  },
  {
    title: "Core Skills",
    skills: ["Data Structures & Algorithms", "Object Oriented Programming", "Problem Solving"],
    color: "#111111",
  },
  {
    title: "Machine Learning",
    skills: ["Deep Learning", "CNN", "Audio Processing"],
    color: "#2C3E50",
  },
  {
    title: "Cloud",
    skills: ["Basics of AWS, Docker, GCP"],
    color: "#111111",
  },
];

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E50]/20 to-[#111111]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-[#E5E7EB] overflow-hidden h-full">
        {/* Background decoration */}
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 -translate-y-1/2 translate-x-1/2"
          style={{ backgroundColor: category.color }}
        />

        {/* Category header */}
        <div className="relative mb-6">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#2C3E50] to-[#111111]/50"
          />
          <h3 className="text-lg font-semibold text-[#111111] pb-3">
            {category.title}
          </h3>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.1 + skillIndex * 0.05 + 0.4,
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#2C3E50",
                color: "#FFFFFF",
              }}
              className="px-4 py-2 bg-[#2C3E50]/10 text-[#111111] rounded-xl text-sm font-medium cursor-default transition-colors duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 bg-[#F5F5F5] overflow-hidden"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-40 h-40 border border-[#2B2B2B]/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-60 h-60 border border-[#000000]/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
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
              Technical Expertise
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-6">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2B2B2B]/0 via-[#2B2B2B] to-[#2B2B2B]/0 mx-auto" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={category.title} category={category} index={index} />
            ))}
          </div>

          {/* Tech Stack Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 overflow-hidden"
          >
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10" />
              
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-8 whitespace-nowrap"
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-8">
                    {[
                      "React.js",
                      "Node.js",
                      "PostgreSQL",
                      "Python",
                      "AWS",
                      "Express.js",
                      "JavaScript",
                      "Git",
                      "Docker",
                    ].map((tech) => (
                      <span
                        key={`${i}-${tech}`}
                        className="text-2xl font-bold text-[#111111]/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
