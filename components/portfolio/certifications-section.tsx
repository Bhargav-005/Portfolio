"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Cloud Computing with AWS",
    issuer: "AWS Academy",
    link: "https://drive.google.com/file/d/1qm9b1_-D1axzXybtA1-K1fuUS_Y_aOMj/view?usp=sharing",
  },
  {
    title: "C++ Certification",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1KjEsIxImt_cnH6TNXPDO1EpADHulhX0u/view",
  },
  {
    title: "Python Certification",
    issuer: "HackerRank",
    link: "https://drive.google.com/file/d/1FmtbQfArFH1cSaX7vNEOwmJng2yxvNjb/view?usp=sharing",
  },
  {
    title: "Cloud Foundations Associate",
    issuer: "Oracle",
    link: "https://drive.google.com/file/d/13yLva6IOsLsL2KJ605pGkds7iBQWFZrZ/view",
  },
];

function CertificationCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative perspective-1000"
    >
      <div className="relative bg-[#FFFFFF] rounded-2xl p-6 shadow-lg border border-[#BFBFBF]/30 overflow-hidden h-full">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#2B2B2B]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />

        {/* Icon */}
        <motion.div
          initial={{ rotate: -10 }}
          animate={isInView ? { rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2B2B2B]/10 mb-4 group-hover:bg-[#2B2B2B] transition-colors duration-300"
        >
          <Award className="w-6 h-6 text-[#2B2B2B] group-hover:text-[#FFFFFF] transition-colors duration-300" />
        </motion.div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-[#2B2B2B] mb-2 leading-tight">
          {cert.title}
        </h3>
        <p className="text-sm text-[#6B6B6B] mb-4">{cert.issuer}</p>

        {/* View button */}
        <motion.a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-sm font-medium text-[#2B2B2B] hover:text-[#000000] transition-colors"
        >
          View Certificate
          <ExternalLink size={14} />
        </motion.a>

        {/* Hover border effect */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2B2B2B] to-[#000000] origin-left"
        />
      </div>
    </motion.div>
  );
}

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="certificates"
      className="relative py-24 md:py-32 bg-[#F2F2F2] overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2B2B2B 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
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
              className="inline-block px-4 py-2 bg-[#2B2B2B]/10 rounded-full text-sm font-medium text-[#2B2B2B] mb-4"
            >
              Credentials
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2B2B2B]/0 via-[#2B2B2B] to-[#2B2B2B]/0 mx-auto" />
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.title} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
