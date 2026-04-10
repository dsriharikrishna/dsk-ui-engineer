"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/common/Button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { siteContent } from "@/constants/content";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

import { Input } from "@/components/common/Input";
import { Textarea } from "@/components/common/Textarea";
import { Select } from "@/components/common/Select";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-12">
      <Section className="pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">{siteContent.contact.title}</h1>
            <p className="text-xl text-foreground/60 mb-12 leading-relaxed">
              {siteContent.contact.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest">Email Us</p>
                  <a href={`mailto:${siteContent.contact.email}`} className="text-lg font-medium hover:text-primary transition-colors">
                    {siteContent.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest">Call Us</p>
                  <a href={`tel:${siteContent.contact.phone.replace(/\s/g, '')}`} className="text-lg font-medium hover:text-primary transition-colors">
                    {siteContent.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest">Visit Us</p>
                  <p className="text-lg font-medium">{siteContent.contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass p-12 rounded-[2.5rem] h-full flex flex-col items-center justify-center text-center border-green-500/20"
                >
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-foreground/60 text-lg">
                    Thank you for reaching out. Our team will contact you shortly to schedule your free consultation.
                  </p>
                  <Button 
                    className="mt-10" 
                    variant="outline" 
                    onClick={() => setIsSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5"
                >
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <Input
                      label="Name"
                      placeholder="Your Name"
                      {...register("name")}
                      error={errors.name?.message}
                    />

                    <Input
                      label="Email"
                      type="email"
                      placeholder="your@email.com"
                      {...register("email")}
                      error={errors.email?.message}
                    />

                    <Select
                      label="Project Budget"
                      {...register("budget")}
                      error={errors.budget?.message}
                      options={[
                        { value: "10-25k", label: "₹10k - ₹25k" },
                        { value: "25-80k", label: "₹25k - ₹80k" },
                        { value: "80k+", label: "₹80k+" }
                      ]}
                    />

                    <Textarea
                      label="Project Description"
                      placeholder="Tell us about your project..."
                      {...register("message")}
                      error={errors.message?.message}
                    />

                    <Button 
                      type="submit" 
                      className="w-full text-lg py-5" 
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : siteContent.contact.cta}
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </div>
  );
}
