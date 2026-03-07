"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles, Brain, FileText, Globe } from "lucide-react";

const projects = [
  {
    title: "ISROVERSE",
    subtitle: "3D Mission Control Dashboard",
    description:
      "An immersive web application simulating a space mission control interface with real-time satellite visualization and interactive 3D spacecraft models.",
    features: [
      "Real-time satellite visualization",
      "Interactive 3D spacecraft models",
      "Telemetry data monitoring",
      "Orbital mechanics simulation",
    ],
    tech: ["React.js", "Three.js", "TypeScript"],
    icon: Globe,
    gradient: "from-[#0F2027] via-[#203A43] to-[#2C5364]",
    github: "https://github.com/Bhargav-005/isroverse-cloud",
  },
  {
    title: "MentorGPT",
    subtitle: "Adaptive Learning Platform",
    description:
      "A full-stack AI-powered platform delivering personalized skill roadmaps using adaptive assessments and recommendation algorithms.",
    features: [
      "Dynamic roadmap generation",
      "Skill graph database",
      "Real-time analytics dashboard",
      "Adaptive recommendation engine",
    ],
    tech: ["React.js", "Node.js", "PostgreSQL"],
    icon: Sparkles,
    gradient: "from-[#2C3E50] to-[#111111]",
    github: "https://github.com/Bhargav-005/Mentor_GPT",
  },
  {
    title: "InstruNet AI",
    subtitle: "Instrument Recognition",
    description:
      "Deep learning system that identifies musical instruments from audio signals using CNN architectures.",
    features: [
      "Mel-spectrogram preprocessing",
      "STFT feature extraction",
      "Multi-label classification",
      "99% validation accuracy on 5000+ samples",
    ],
    tech: ["Python", "TensorFlow", "Machine Learning"],
    icon: Brain,
    gradient: "from-[#111111] to-[#2C3E50]",
    github: "https://github.com/Bhargav-005/Instrunet-AI",
  },
  {
    title: "Q-Paper",
    subtitle: "AI Question Paper Generator",
    description:
      "A full-stack platform that automates exam paper creation using AI-based syllabus mapping, course outcome alignment, and intelligent question generation.",
    features: [
      "Semantic CO–syllabus mapping using transformer embeddings",
      "AI-assisted question generation with template validation",
      "Exam blueprint builder with mark distribution control",
      "Multi-user faculty dashboard with RBAC administration",
    ],
    tech: ["React.js", "Node.js", "PostgreSQL", "NLP"],
    icon: FileText,
    gradient: "from-[#2C3E50] to-[#111111]",
    github: "https://github.com/Bhargav-005/Question_paper-_generation",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
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

  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group perspective-1000 h-full"
    >
      <div className="relative bg-[#1a1a1a] backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 h-full flex flex-col">
        {/* Gradient header */}
        <div
          className={`relative h-48 md:h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          {/* Project icon */}
          <motion.div
            className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-[#FFFFFF]/10 backdrop-blur-sm flex items-center justify-center border border-[#FFFFFF]/20"
            style={{ transform: "translateZ(30px)" }}
          >
            <Icon className="w-7 h-7 text-[#FFFFFF]" />
          </motion.div>

          {/* Project title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#000000]/80 to-transparent">
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-1"
              style={{ transform: "translateZ(20px)" }}
            >
              {project.title}
            </motion.h3>
            <p className="text-[#BFBFBF] font-medium">{project.subtitle}</p>
          </div>

          {/* Hover shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col flex-1">
          <p className="text-white/70 mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="space-y-2 mb-6 hidden">
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-[#FFFFFF]/10 text-[#FFFFFF] rounded-lg text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-auto">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 border border-[#FFFFFF]/20 text-[#FFFFFF] rounded-xl text-sm font-medium hover:bg-[#FFFFFF]/10 transition-colors"
            >
              <Github size={16} />
              Source
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-[#111111] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2C3E50]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2C3E50]/20 rounded-full blur-3xl" />
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
              My Work
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#FFFFFF]/0 via-[#FFFFFF] to-[#FFFFFF]/0 mx-auto" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
