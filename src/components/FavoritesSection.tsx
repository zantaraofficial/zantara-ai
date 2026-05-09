"use client";

import { useAppContext } from "@/context/AppContext";
import { toolsData } from "@/data/tools";
import ToolCard from "./ToolCard";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FavoritesSection() {
  const { favorites } = useAppContext();

  if (favorites.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 border-b border-white/5">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-500">
          <Heart size={20} fill="currentColor" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Your Favorite Tools</h2>
          <p className="text-sm text-gray-400">Quick access to the tools you use most</p>
        </div>
      </div>

      <motion.div 
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {favorites.map((key, i) => (
            <ToolCard key={`fav-${key}`} toolId={key} tool={toolsData[key]} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
