"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Bobbili, Vizianagaram, India",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sylakabhargav07@gmail.com",
    href: "mailto:sylakabhargav07@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7337084500",
    href: "tel:+917337084500",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Use current hostname to avoid localhost/127.0.0.1 mismatch
      const apiHost = typeof window !== 'undefined' ? window.location.hostname : 'localhost';
      const response = await fetch(`http://${apiHost}:5000/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        
        setTimeout(() => {
          setIsSubmitted(false);
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#F2F2F2] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] border border-[#2B2B2B]/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] border border-[#2B2B2B]/10 rounded-full"
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
              Get In Touch
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6">
              Contact Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2B2B2B]/0 via-[#2B2B2B] to-[#2B2B2B]/0 mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-[#2B2B2B] mb-6">
                {"Let's connect"}
              </h3>
              <p className="text-[#6B6B6B] mb-8 leading-relaxed">
                {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 bg-[#FFFFFF] rounded-xl shadow-sm border border-[#BFBFBF]/50 hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#2B2B2B]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#2B2B2B]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#6B6B6B] uppercase tracking-wider">
                          {info.label}
                        </div>
                        <div className="text-[#2B2B2B] font-medium">
                          {info.value}
                        </div>
                      </div>
                    </motion.div>
                  );

                  return info.href ? (
                    <a key={info.label} href={info.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>{content}</div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.6, type: "spring" }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-[#2B2B2B] text-[#FFFFFF] flex items-center justify-center hover:bg-[#000000] transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#2B2B2B] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#BFBFBF]/50 rounded-xl text-[#2B2B2B] placeholder-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#2B2B2B] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#2B2B2B] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#BFBFBF]/50 rounded-xl text-[#2B2B2B] placeholder-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#2B2B2B] focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#2B2B2B] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#BFBFBF]/50 rounded-xl text-[#2B2B2B] placeholder-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#2B2B2B] focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === "loading" || status === "success"}
                  className={`w-full flex items-center justify-center gap-2 px-8 py-4 text-[#FFFFFF] rounded-xl font-medium shadow-lg transition-all disabled:opacity-70 ${
                    status === "success" 
                      ? "bg-green-600 shadow-green-600/25" 
                      : status === "error"
                      ? "bg-red-600 shadow-red-600/25"
                      : "bg-[#2B2B2B] shadow-[#2B2B2B]/25 hover:shadow-[#2B2B2B]/30"
                  }`}
                >
                  {status === "loading" ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : status === "success" ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : status === "error" ? (
                    <>
                      Failed to send message
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
