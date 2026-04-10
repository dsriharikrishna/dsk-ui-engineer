"use client";

import { FC, useState } from "react";
import { Section } from "@/components/common/Section";
import { siteContent } from "@/constants/content";
import { Card } from "@/components/cards/Card";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Web", "Mobile", "UX Design"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? siteContent.projects 
    : siteContent.projects.filter(p => p.category === filter);

  return (
    <div className="pt-12">
      <Section className="pb-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Our Works</h1>
        <p className="text-xl text-foreground/60 max-w-3xl">
          We take pride in delivering excellence. Explore our portfolio of high-impact digital solutions.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition-all ${
                filter === cat 
                ? "bg-primary border-primary text-white" 
                : "border-border text-foreground/60 hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="p-0 border-none bg-transparent group cursor-pointer overflow-hidden rounded-[2.5rem]" hoverEffect={false}>
                  <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-8 bg-surface-lighter">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent-purple/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                      <span className="text-foreground/5 font-bold text-6xl uppercase tracking-tighter">{project.title}</span>
                    </div>
                    
                    <div className="absolute top-8 left-8 px-5 py-2 glass rounded-full text-sm font-semibold">
                      {project.category}
                    </div>
                  </div>

                  <div className="px-4">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-primary font-bold text-sm uppercase tracking-widest">{project.result}</p>
                      </div>
                      <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                    <p className="text-foreground/60 leading-relaxed max-w-xl">
                      A comprehensive digital transformation project focusing on user experience, performance, and conversion optimization.
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section>
    </div>
  );
}
