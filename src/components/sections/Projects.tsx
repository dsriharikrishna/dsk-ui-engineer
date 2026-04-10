"use client";

import { FC } from "react";
import { Section } from "../common/Section";
import { Card } from "../cards/Card";
import { siteContent } from "@/constants/content";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../common/Button";
import Link from "next/link";

export const Projects: FC = () => {
  return (
    <Section id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{siteContent.projectsContent.title}</h2>
          <p className="text-foreground/60 max-w-xl">
            {siteContent.projectsContent.subtitle}
          </p>
        </div>
        <Link href="/projects">
          <Button variant="outline">{siteContent.projectsContent.cta}</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteContent.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-0 border-none bg-transparent group cursor-pointer overflow-hidden rounded-3xl" hoverEffect={false}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface-lightest to-surface-lighter flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                  <span className="text-foreground/10 font-bold text-4xl uppercase tracking-widest">{project.title}</span>
                </div>
                
                {/* Result Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Result</p>
                  <p className="text-sm font-medium">{project.result}</p>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 glass rounded-full text-xs font-semibold backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              <div className="px-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight className="text-foreground/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
