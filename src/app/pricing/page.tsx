import { FC } from "react";
import { Section } from "@/components/common/Section";
import { siteContent } from "@/constants/content";
import { PricingCard } from "@/components/cards/PricingCard";
import { Check, Minus } from "lucide-react";
import { Button } from "@/components/common/Button";
import Link from "next/link";

const features = [
  "Custom UI Design",
  "Responsive Layout",
  "Next.js Development",
  "SEO Optimization",
  "CMS Implementation",
  "E-commerce Functionality",
  "API Integrations",
  "Mobile App (iOS/Android)",
  "Hosting/Deployment",
  "Maintenance & Support",
];

const comparisonData = [
  { feature: "Custom UI Design", starter: true, growth: true, pro: true },
  { feature: "Responsive Layout", starter: true, growth: true, pro: true },
  { feature: "Next.js Development", starter: true, growth: true, pro: true },
  { feature: "SEO Optimization", starter: true, growth: true, pro: true },
  { feature: "CMS Implementation", starter: false, growth: true, pro: true },
  { feature: "E-commerce Functionality", starter: false, growth: true, pro: true },
  { feature: "API Integrations", starter: false, growth: "Limited", pro: "Unlimited" },
  { feature: "Mobile App (iOS/Android)", starter: false, growth: false, pro: true },
  { feature: "Hosting/Deployment", starter: "Basic", growth: "Advanced", pro: "Enterprise" },
  { feature: "Maintenance & Support", starter: "1 Month", growth: "3 Months", pro: "Lifetime" },
];

export default function PricingPage() {
  return (
    <div className="pt-12">
      <Section className="text-center pb-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Investment Plans</h1>
        <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
          We offer flexible pricing models designed to grow with your business. Choose the plan that best fits your current needs.
        </p>
      </Section>

      <Section className="bg-surface pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-12">
          {siteContent.pricing.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section id="comparison">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Compare Features</h2>
          <p className="text-foreground/60">A detailed look at what's included in each plan.</p>
        </div>

        <div className="overflow-x-auto glass rounded-3xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="p-6 font-bold sticky left-0 glass z-10">Feature</th>
                <th className="p-6 font-bold text-center">Starter</th>
                <th className="p-6 font-bold text-center text-primary">Growth</th>
                <th className="p-6 font-bold text-center">Pro</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                  <td className="p-6 text-foreground/80 sticky left-0 glass z-10 font-medium">{row.feature}</td>
                  <td className="p-6 text-center">
                    {typeof row.starter === "boolean" ? (
                      row.starter ? <Check className="mx-auto text-primary" size={20} /> : <Minus className="mx-auto text-foreground/20" size={20} />
                    ) : (
                      <span className="text-sm font-medium">{row.starter}</span>
                    )}
                  </td>
                  <td className="p-6 text-center text-primary">
                    {typeof row.growth === "boolean" ? (
                      row.growth ? <Check className="mx-auto text-primary" size={20} /> : <Minus className="mx-auto text-foreground/20" size={20} />
                    ) : (
                      <span className="text-sm font-medium">{row.growth}</span>
                    )}
                  </td>
                  <td className="p-6 text-center">
                    {typeof row.pro === "boolean" ? (
                      row.pro ? <Check className="mx-auto text-primary" size={20} /> : <Minus className="mx-auto text-foreground/20" size={20} />
                    ) : (
                      <span className="text-sm font-medium">{row.pro}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-20 glass p-12 rounded-[2rem] text-center border-primary/20">
          <h3 className="text-3xl font-bold mb-6">Need a custom quote?</h3>
          <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
            For large scale enterprise projects or specific specialized requirements, we provide tailored quotes.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="primary">Get a Custom Proposal</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
