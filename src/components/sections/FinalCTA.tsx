"use client";

import { FC } from "react";
import { Section } from "../common/Section";
import { Button } from "../common/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteContent } from "@/constants/content";

export const FinalCTA: FC = () => {
  return (
    <Section className="bg-primary/5 py-32 md:py-48 overflow-visible">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="relative p-12 md:p-20 glass rounded-[3rem] overflow-hidden border-primary/20">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent-blue/10 to-accent-amber/10 animate-gradient-xy -z-10" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {siteContent.contact.title}
          </h2>
          <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto">
            {siteContent.contact.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:px-12 text-lg">{siteContent.contact.cta}</Button>
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:px-12 text-lg">{siteContent.hero.ctaSecondary.replace('View', 'See')}</Button>
            </Link>
          </div>
          
          {/* Decorative floating elements */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-accent-blue/20 blur-[80px] rounded-full" />
        </div>
      </motion.div>
    </Section>
  );
};
