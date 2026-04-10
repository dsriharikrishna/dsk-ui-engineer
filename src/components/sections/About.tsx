"use client";

import { FC } from "react";
import { Section } from "../common/Section";
import { siteContent } from "@/constants/content";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const About: FC = () => {
  const { about } = siteContent;

  return (
    <Section id="about" className="bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{about.title}</h2>
          <p className="text-lg text-foreground/60 leading-relaxed mb-8">
            {about.description}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.highlights.map((highlight, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-primary" />
                <span className="text-sm font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square max-w-[500px] mx-auto w-full"
        >
          {/* Decorative Tech Stack Visualization */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-blue/5 rounded-[2.5rem] backdrop-blur-3xl border border-white/5 flex items-center justify-center p-8 md:p-12">
            <div className="grid grid-cols-3 gap-3 md:gap-4 justify-items-center">
              {siteContent.techStack.map((tech, i) => (
                <motion.span 
                  key={tech} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, color: "var(--foreground)", backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="px-3 py-1.5 md:px-5 md:py-2.5 glass rounded-2xl text-[10px] md:text-xs font-bold text-primary/80 cursor-default transition-all duration-300 whitespace-nowrap border-white/5 shadow-xl shadow-black/20"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent-purple/20 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </Section>
  );
};
