"use client";

import { FC } from "react";
import { Check } from "lucide-react";
import { Button } from "../common/Button";
import { Card } from "./Card";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
  ctaText?: string;
}

export const PricingCard: FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  isHighlighted = false,
  ctaText = "Get Started",
}) => {
  return (
    <Card 
      className={cn(
        "flex flex-col gap-8 h-full relative transition-all duration-500",
        isHighlighted && "border-primary/50 ring-4 ring-primary/5 shadow-2xl shadow-primary/20 scale-105 z-10 before:absolute before:inset-0 before:bg-gradient-to-b before:from-primary/10 before:to-transparent before:opacity-50 before:pointer-events-none"
      )}
    >
      {isHighlighted && (
        <div className="absolute top-4 mb-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg shadow-primary/40 whitespace-nowrap z-20">
          Best Value
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold mb-3">{name}</h3>
        <p className="text-foreground/60 text-sm leading-relaxed">{description}</p>
      </div>
      
      <div>
        <div className="flex items-baseline gap-1 flex-wrap">
          <span className="text-3xl sm:text-4xl font-black tracking-tighter text-gradient leading-tight">
            {price}
          </span>
          {price !== "Custom" && (
            <span className="text-foreground/40 text-[10px] font-bold uppercase tracking-widest ml-1 opacity-70">
              / project
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-4 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
            <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        variant={isHighlighted ? "primary" : "outline"} 
        className="w-full mt-auto"
      >
        {ctaText}
      </Button>
    </Card>
  );
};
