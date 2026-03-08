"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#000000] py-12 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-[#BFBFBF] text-sm">
                © 2026 Sylaka Bhargav. All rights reserved.
              </p>
              <p className="text-[#6B6B6B] text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
                Built with{" "}
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart size={12} className="text-red-400 fill-current" />
                </motion.span>{" "}
                using modern web technologies
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-[#FFFFFF]/10 flex items-center justify-center text-[#BFBFBF] hover:text-[#FFFFFF] hover:bg-[#FFFFFF]/20 transition-colors"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-[#FFFFFF]/10 flex items-center justify-center text-[#BFBFBF] hover:text-[#FFFFFF] hover:bg-[#FFFFFF]/20 transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
            </motion.div>
          </div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 h-px bg-gradient-to-r from-transparent via-[#FFFFFF]/20 to-transparent"
          />

          {/* Back to top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("home");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              whileHover={{ y: -3 }}
              className="inline-flex items-center gap-2 text-xs text-[#6B6B6B] hover:text-[#FFFFFF] transition-colors"
            >
              <span>Back to top</span>
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↑
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
