"use client";

import { FC } from "react";
import { Section } from "../common/Section";
import { Card } from "../cards/Card";
import { siteContent } from "@/constants/content";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const Services: FC = () => {
  return (
    <Section id="services" className="bg-surface">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{siteContent.servicesContent.title}</h2>
        <p className="text-foreground/60 max-w-2xl mx-auto">
          {siteContent.servicesContent.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteContent.services.map((service, index) => {
          const Icon = (Icons as any)[service.icon];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full group hover:bg-surface-lighter transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {Icon && <Icon size={24} />}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-foreground/40">
                      <Check size={14} className="text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-primary text-sm font-semibold flex items-center gap-2">
                    Learn More <Icons.ArrowRight size={16} />
                  </span>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
