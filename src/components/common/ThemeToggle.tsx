"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="p-2 w-10 h-10" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-2xl bg-surface-lighter hover:bg-surface-lightest transition-colors border border-border flex items-center justify-center relative overflow-hidden group"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ y: theme === "dark" ? 0 : 30 }}
        className="absolute"
      >
        <Sun className="text-accent-amber" size={20} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ y: theme === "dark" ? -30 : 0 }}
      >
        <Moon className="text-accent-blue" size={20} />
      </motion.div>
    </button>
  );
};
