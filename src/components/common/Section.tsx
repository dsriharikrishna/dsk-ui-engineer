import { FC, ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export const Section: FC<SectionProps> = ({ 
  children, 
  className, 
  id,
  containerClassName 
}) => {
  return (
    <section 
      id={id} 
      className={cn("py-20 md:py-32 relative overflow-hidden", className)}
    >
      <div className={cn("max-w-7xl mx-auto px-6 md:px-12", containerClassName)}>
        {children}
      </div>
    </section>
  );
};
