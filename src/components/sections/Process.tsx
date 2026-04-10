"use client";

import { FC, useEffect, useRef } from "react";
import { Section } from "../common/Section";
import { siteContent } from "@/constants/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Process: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && lineRef.current) {
      const steps = containerRef.current.querySelectorAll(".process-step");
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });

      tl.fromTo(lineRef.current, 
        { scaleX: 0 }, 
        { scaleX: 1, duration: 1, ease: "power2.inOut" }
      );

      steps.forEach((step, i) => {
        tl.fromTo(step, 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.3"
        );
      });
    }
  }, []);

  return (
    <Section id="process" className="bg-surface-lighter overflow-hidden">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{siteContent.processContent.title}</h2>
        <p className="text-foreground/60 max-w-2xl mx-auto">
          {siteContent.processContent.subtitle}
        </p>
      </div>

      <div ref={containerRef} className="relative max-w-5xl mx-auto">
        {/* Connection Line (Desktop) */}
        <div 
          ref={lineRef}
          className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2 hidden md:block origin-left" 
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
          {siteContent.process.map((step, index) => (
            <div key={step.title} className="process-step text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-surface border-2 border-primary flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-primary/20">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-foreground/60 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
