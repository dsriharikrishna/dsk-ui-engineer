"use client";

import { FC } from "react";
import Image from "next/image";
import { Card } from "./Card";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  avatar
}) => {
  return (
    <Card className="flex flex-col gap-6">
      <p className="text-lg text-foreground/80 italic leading-relaxed">
        "{content}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        <div className="relative h-12 w-12 rounded-full overflow-hidden bg-surface-lightest border border-border">
          {avatar ? (
            <Image 
              src={avatar} 
              alt={name} 
              fill 
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-primary font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-sm">{name}</h4>
          <p className="text-xs text-foreground/40">{role}</p>
        </div>
      </div>
    </Card>
  );
};
