"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? "w-[95%] max-w-5xl" : "w-[95%] max-w-6xl"
        }`}
      >
        <div
          className={`relative rounded-2xl transition-all duration-500 ${
            isScrolled
              ? "bg-[#111111]/95 backdrop-blur-xl shadow-2xl"
              : "bg-white/60 backdrop-blur-lg shadow-lg border border-[#E5E7EB]"
          }`}
          style={{ borderRadius: "16px" }}
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "#home";
                window.location.reload();
              }}
              className={`text-xl font-bold tracking-wider transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-[#111111]"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              BHARGAV
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const sectionId = link.href.substring(1);
                    const element = document.getElementById(sectionId);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isScrolled
                      ? activeSection === link.href.substring(1)
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                      : activeSection === link.href.substring(1)
                      ? "text-[#111111]"
                      : "text-[#6B7280] hover:text-[#111111]"
                  }`}
                >
                  {link.name}
                  {/* Underline hover animation */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 transition-transform duration-300 origin-left ${
                      isScrolled ? "bg-white" : "bg-[#2C3E50]"
                    } ${
                      activeSection === link.href.substring(1)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-white hover:bg-white/10"
                  : "text-[#111111] hover:bg-[#111111]/10"
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[95%] max-w-md z-40 lg:hidden"
          >
            <div className="bg-[#111111]/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      const sectionId = link.href.substring(1);
                      const element = document.getElementById(sectionId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeSection === link.href.substring(1)
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
