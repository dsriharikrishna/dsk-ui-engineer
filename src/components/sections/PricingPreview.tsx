"use client";

import { FC } from "react";
import { Section } from "../common/Section";
import { PricingCard } from "../cards/PricingCard";
import { siteContent } from "@/constants/content";
import { motion } from "framer-motion";

export const PricingPreview: FC = () => {
  return (
    <Section id="pricing-preview" className="bg-surface-lighter">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{siteContent.pricingContent.title}</h2>
        <p className="text-foreground/60 max-w-2xl mx-auto">
          {siteContent.pricingContent.subtitle}
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch pt-4">
          {siteContent.pricing.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
