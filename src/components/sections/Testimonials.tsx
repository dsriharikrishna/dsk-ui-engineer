"use client";

import { FC } from "react";
import { Section } from "../common/Section";
import { TestimonialCard } from "../cards/TestimonialCard";
import { siteContent } from "@/constants/content";
import { motion } from "framer-motion";

export const Testimonials: FC = () => {
  return (
    <Section id="testimonials" className="bg-surface">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{siteContent.testimonialsContent.title}</h2>
        <p className="text-foreground/60 max-w-2xl mx-auto">
          {siteContent.testimonialsContent.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteContent.testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <TestimonialCard {...testimonial} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
