"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, MessageCircle, Mail, ChevronRight, Bot } from "lucide-react";
import { siteContent } from "@/constants/content";
import { Button } from "./Button";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

type Tab = "inquiry" | "connect";

export const Chatbot: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("inquiry");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      message: formData.get("message"),
      name: "Chatbot User", // Default name for chatbot inquiries
    };

    setFormStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send");
      setFormStatus("success");
    } catch (error) {
      console.error(error);
      setFormStatus("idle");
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40, rotate: -5, transformOrigin: "bottom right" }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0, 
              rotate: 0,
              transition: { type: "spring", stiffness: 300, damping: 25 } 
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.5, 
              y: 100, 
              rotate: 15,
              transition: { duration: 0.4, ease: "backIn" } 
            }}
            className="mb-6 w-[350px] md:w-[400px] glass rounded-[2rem] overflow-hidden shadow-2xl border-white/10 flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-white relative">
              <h3 className="text-xl font-bold">{siteContent.brandName}</h3>
              <p className="text-white/80 text-sm">Full Stack Developer</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 hover:rotate-90 transition-transform"
              >
                <X size={20} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/5">
              <button
                onClick={() => setActiveTab("inquiry")}
                className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
                  activeTab === "inquiry" ? "text-primary" : "text-foreground/40 hover:text-foreground/60"
                }`}
              >
                Quick Inquiry
                {activeTab === "inquiry" && (
                  <motion.div layoutId="tab-active" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("connect")}
                className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
                  activeTab === "connect" ? "text-primary" : "text-foreground/40 hover:text-foreground/60"
                }`}
              >
                Connect
                {activeTab === "connect" && (
                  <motion.div layoutId="tab-active" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            </div>

            {/* Content */}
            <div className="p-6 min-h-[300px] flex flex-col">
              <AnimatePresence mode="wait">
                {activeTab === "inquiry" ? (
                  <motion.div
                    key="inquiry"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex-grow flex flex-col"
                  >
                    {formStatus === "success" ? (
                      <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4 py-8">
                        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                          <Send size={32} />
                        </div>
                        <h4 className="text-xl font-bold">Message Sent!</h4>
                        <p className="text-foreground/60">I'll get back to you shortly.</p>
                        <Button variant="outline" size="sm" onClick={() => setFormStatus("idle")}>Send Another</Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <p className="text-sm text-foreground/60 mb-2">Have a quick question or project idea? Drop a message!</p>
                        <Input 
                          required 
                          name="email"
                          type="email" 
                          placeholder="Your Email" 
                          className="bg-white/5 border-white/10"
                        />
                        <Textarea 
                          required 
                          name="message"
                          rows={4} 
                          placeholder="How can I help?" 
                          className="bg-white/5 border-white/10"
                        />
                        <Button 
                          type="submit" 
                          className="w-full" 
                          isLoading={formStatus === "sending"}
                        >
                          Send Inquiry
                        </Button>
                      </form>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="connect"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-4"
                  >
                     <p className="text-sm text-foreground/60 mb-4">Choose your preferred way to reach out instantly.</p>
                     <a 
                      href={`https://wa.me/${siteContent.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl group hover:bg-primary/5 hover:border-primary/30 transition-all"
                     >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#25D366]/20 text-[#25D366] rounded-xl flex items-center justify-center">
                            <MessageCircle size={24} fill="currentColor" />
                          </div>
                          <div>
                            <p className="font-bold">WhatsApp</p>
                            <p className="text-xs text-foreground/40 text-nowrap">Instant Response</p>
                          </div>
                        </div>
                        <ChevronRight size={20} className="text-foreground/20 group-hover:text-primary transition-colors" />
                     </a>

                     <a 
                      href={`mailto:${siteContent.contact.email}`}
                      className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl group hover:bg-primary/5 hover:border-primary/30 transition-all"
                     >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-accent-blue/20 text-accent-blue rounded-xl flex items-center justify-center">
                            <Mail size={24} />
                          </div>
                          <div>
                            <p className="font-bold">Direct Email</p>
                            <p className="text-xs text-foreground/40 text-nowrap">For detailed inquiries</p>
                          </div>
                        </div>
                        <ChevronRight size={20} className="text-foreground/20 group-hover:text-primary transition-colors" />
                     </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="h-16 w-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/30 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform rounded-full" />
        <AnimatePresence mode="wait">
          {isOpen ? <X key="close" size={32} /> : <Bot key="open" size={32} />}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
