"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code2, FileText } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "9.1", label: "CGPA", suffix: "" },
  { icon: Briefcase, value: "8", label: "Projects", suffix: "+" },
  { icon: Code2, value: "10", label: "Technologies", suffix: "+" },
  { icon: FileText, value: "1", label: "Research Paper", suffix: "" },
];

function StatCard({
  icon: Icon,
  value,
  label,
  suffix,
  index,
}: {
  icon: typeof GraduationCap;
  value: string;
  label: string;
  suffix: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E50]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-[#1a1a1a] backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FFFFFF]/10 mb-4">
          <Icon className="w-6 h-6 text-[#FFFFFF]" />
        </div>
        <div className="text-4xl font-bold text-[#FFFFFF] mb-1">
          {value}
          {suffix}
        </div>
        <div className="text-sm text-white/50">{label}</div>
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#111111] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
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
              className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white/60 mb-4"
            >
              Get to Know Me
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#FFFFFF]/0 via-[#FFFFFF] to-[#FFFFFF]/0 mx-auto" />
          </motion.div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p
                className="text-lg md:text-xl text-white/70 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                Information Technology undergraduate at{" "}
                <span className="text-[#FFFFFF] font-medium">
                  GMR Institute of Technology
                </span>{" "}
                with a 9.1 CGPA. Focused on full-stack development, scalable
                backend systems, and cloud infrastructure.
              </motion.p>
              <motion.p
                className="text-base text-[#6B7280] leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                Skilled in designing REST APIs, implementing data-driven
                architectures, and building modern interactive web applications.
                Passionate about creating production-grade systems that solve
                real-world problems.
              </motion.p>

              {/* Education Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="mt-8 inline-flex items-center gap-4 bg-[#1a1a1a] rounded-2xl p-4 border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFFFFF]/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#FFFFFF]" />
                </div>
                <div>
                  <div className="font-medium text-[#FFFFFF]">
                    GMR Institute of Technology
                  </div>
                  <div className="text-sm text-[#6B6B6B]">
                    B.Tech in Information Technology
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - 3D Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative perspective-1000">
                <motion.div
                  animate={{
                    rotateY: [0, 5, 0, -5, 0],
                    rotateX: [0, -5, 0, 5, 0],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="relative"
                >
                  {/* Code editor mockup */}
                  <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-[#FFFFFF]/10">
                    {/* Editor header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#0d0d0d] border-b border-[#FFFFFF]/10">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <span className="ml-4 text-xs text-[#6B6B6B]">
                        about.ts
                      </span>
                    </div>
                    {/* Editor content */}
                    <div className="p-6 font-mono text-sm">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 }}
                      >
                        <span className="text-[#6B6B6B]">{"// "}</span>
                        <span className="text-[#BFBFBF]">Developer Profile</span>
                        <br />
                        <span className="text-blue-400">const</span>{" "}
                        <span className="text-[#FFFFFF]">developer</span>{" "}
                        <span className="text-[#6B6B6B]">=</span>{" "}
                        <span className="text-[#6B6B6B]">{"{"}</span>
                        <br />
                        <span className="text-[#FFFFFF] ml-4">name</span>
                        <span className="text-[#6B6B6B]">:</span>{" "}
                        <span className="text-green-400">{'"Sylaka Bhargav"'}</span>
                        <span className="text-[#6B6B6B]">,</span>
                        <br />
                        <span className="text-[#FFFFFF] ml-4">role</span>
                        <span className="text-[#6B6B6B]">:</span>{" "}
                        <span className="text-green-400">{'"Full Stack Dev"'}</span>
                        <span className="text-[#6B6B6B]">,</span>
                        <br />
                        <span className="text-[#FFFFFF] ml-4">passion</span>
                        <span className="text-[#6B6B6B]">:</span>{" "}
                        <span className="text-green-400">{'"Building Apps"'}</span>
                        <span className="text-[#6B6B6B]">,</span>
                        <br />
                        <span className="text-[#FFFFFF] ml-4">available</span>
                        <span className="text-[#6B6B6B]">:</span>{" "}
                        <span className="text-blue-400">true</span>
                        <br />
                        <span className="text-[#6B6B6B]">{"}"}</span>
                        <span className="text-[#6B6B6B]">;</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating decoration */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-[#FFFFFF]/10 rounded-2xl border border-[#FFFFFF]/20 backdrop-blur-sm"
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#2B2B2B]/50 rounded-xl border border-[#FFFFFF]/20 backdrop-blur-sm"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
