import { FC } from "react";
import { Section } from "@/components/common/Section";
import { siteContent } from "@/constants/content";
import * as Icons from "lucide-react";
import { Button } from "@/components/common/Button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="pt-12">
      <Section className="pb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Our Expertise</h1>
        <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
          We combine cutting-edge technology with strategic design to build products that not only look great but drive real business results.
        </p>
      </Section>

      {siteContent.services.map((service, index) => {
        const Icon = (Icons as any)[service.icon];
        const isEven = index % 2 === 0;
        
        return (
          <Section 
            key={service.title} 
            className={index % 2 === 0 ? "bg-surface" : "bg-surface-lighter"}
          >
            <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="flex-1 space-y-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  {Icon && <Icon size={32} />}
                </div>
                <h2 className="text-4xl font-bold">{service.title}</h2>
                <p className="text-lg text-foreground/60 leading-relaxed">
                  {service.description} This is a more detailed breakdown of what we offer in this category. We focus on scalability, performance, and user satisfaction.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-primary uppercase tracking-wider text-sm">Key Technologies</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Next.js", "TypeScript", "React", "Node.js", "Tailwind"].map(tech => (
                      <span key={tech} className="px-4 py-2 glass rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link href="/contact">
                    <Button size="lg">Discuss This Project</Button>
                  </Link>
                </div>
              </div>

              <div className="flex-1 w-full aspect-video glass rounded-[2rem] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent-purple/20 flex items-center justify-center">
                   <Icon size={120} className="text-primary/10" />
                </div>
              </div>
            </div>
          </Section>
        );
      })}
    </div>
  );
}
