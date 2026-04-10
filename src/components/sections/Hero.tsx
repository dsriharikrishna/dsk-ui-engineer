"use client";

import { FC, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Button } from "../common/Button";
import Link from "next/link";
import { siteContent } from "@/constants/content";
import { Check } from "lucide-react";

export const Hero: FC = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blobRef.current) {
      gsap.to(blobRef.current, {
        duration: 10,
        scale: 1.2,
        rotate: 360,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Subtle parallax on scroll
      gsap.to(".hero-blob", {
        scrollTrigger: {
          trigger: "section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: (i, target) => {
          const speed = target.classList.contains("blob-1") ? 100 : 50;
          return speed;
        },
        opacity: 0.1,
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div 
        ref={blobRef}
        className="hero-blob blob-1 absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10"
      />
      <div className="hero-blob blob-2 absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-accent-blue/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            {siteContent.hero.title}
          </h1>
          <p className="text-xl text-foreground/60 mb-10 max-w-lg leading-relaxed">
            {siteContent.hero.subtitle}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {siteContent.hero.highlights.map((highlight, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                <Check size={16} className="text-primary" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg">{siteContent.hero.ctaPrimary}</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg">{siteContent.hero.ctaSecondary}</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Mockup Placeholder / Decorative Element */}
          <div className="relative w-full aspect-square max-w-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent-blue/30 rounded-3xl backdrop-blur-3xl border border-white/10 animate-float shadow-2xl shadow-primary/20 flex items-center justify-center p-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto backdrop-blur-md" />
                <div className="h-4 w-32 bg-white/20 rounded-full mx-auto" />
                <div className="h-4 w-48 bg-white/10 rounded-full mx-auto" />
                <div className="grid grid-cols-3 gap-4 pt-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square bg-white/5 rounded-xl animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Small floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-pink/20 blur-2xl rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
