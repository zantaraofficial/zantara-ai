"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const newsItems = [
  "OpenAI launched Sora preview for developers",
  "Midjourney V6.1 is now available with better text rendering",
  "Claude 3.5 Sonnet surpasses GPT-4o in coding benchmarks",
  "Google integrates Gemini into Android 15 core",
  "Perplexity AI raises $250M to challenge search giants",
  "Mistral Large 2 sets new open-weights performance standard"
];

export default function NewsTicker() {
  return (
    <div className="relative flex h-10 w-full items-center overflow-hidden border-b border-white/5 bg-gray-950 px-4">
      <div className="z-10 flex h-full items-center bg-gray-950 pr-4 text-[10px] font-bold uppercase tracking-widest text-purple-400">
        <Zap size={14} className="mr-2 fill-purple-400" /> Live AI News
      </div>
      
      <div className="flex flex-1 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-12"
        >
          {[...newsItems, ...newsItems].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
              <span className="h-1 w-1 rounded-full bg-purple-500" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none" />
    </div>
  );
}
