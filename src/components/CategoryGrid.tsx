"use client";

import { motion } from "framer-motion";
import { 
  MessageSquare, Pencil, Image as ImageIcon, Video, 
  Presentation, Code, Layout, Settings, BarChart, 
  Table, Calendar, Zap 
} from "lucide-react";

const categories = [
  { name: "AI Chatbot", icon: MessageSquare, color: "text-blue-400", bg: "bg-blue-400/10", count: 12 },
  { name: "AI Writing", icon: Pencil, color: "text-emerald-400", bg: "bg-emerald-400/10", count: 18 },
  { name: "AI Image Generator", icon: ImageIcon, color: "text-purple-400", bg: "bg-purple-400/10", count: 24 },
  { name: "AI Video", icon: Video, color: "text-red-400", bg: "bg-red-400/10", count: 15 },
  { name: "AI Audio", icon: Zap, color: "text-cyan-400", bg: "bg-cyan-400/10", count: 10 },
  { name: "AI Coding", icon: Code, color: "text-indigo-400", bg: "bg-indigo-400/10", count: 20 },
  { name: "AI Design", icon: Layout, color: "text-pink-400", bg: "bg-pink-400/10", count: 16 },
  { name: "AI Automation", icon: Settings, color: "text-sky-400", bg: "bg-sky-400/10", count: 14 },
  { name: "AI Data Viz", icon: BarChart, color: "text-teal-400", bg: "bg-teal-400/10", count: 12 },
  { name: "AI Spreadsheet", icon: Table, color: "text-orange-400", bg: "bg-orange-400/10", count: 18 },
  { name: "AI Scheduling", icon: Calendar, color: "text-violet-400", bg: "bg-violet-400/10", count: 10 },
];

export default function CategoryGrid({ onSelect }: { onSelect: (cat: string | null) => void }) {
  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight">Browse By Categories</h2>
          <button 
            onClick={() => onSelect(null)}
            className="text-xs font-bold uppercase tracking-widest text-purple-400 hover:text-purple-300 transition-colors"
          >
            View All Categories →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              whileHover={{ y: -3 }}
              onClick={() => onSelect(cat.name)}
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-gray-900/40 py-6 px-2 transition-all hover:border-purple-500/30 hover:bg-gray-800/60"
            >
              <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${cat.bg} ${cat.color} transition-transform group-hover:scale-110`}>
                <cat.icon size={20} />
              </div>
              <span className="mb-1 text-[11px] font-bold text-white text-center leading-tight">{cat.name.replace('AI ', '')}</span>
              <span className="text-[9px] text-gray-500 font-bold uppercase">{cat.count} Tools</span>
            </motion.button>
          ))}
          
          <motion.button
            whileHover={{ y: -3 }}
            onClick={() => onSelect(null)}
            className="flex flex-col items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/5 py-6 px-2 transition-all hover:bg-purple-500/10"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-white">
              <Zap size={18} fill="currentColor" />
            </div>
            <span className="mb-1 text-[11px] font-bold text-white">Show All</span>
            <span className="text-[9px] text-purple-400/50 font-bold uppercase">90+ Tools</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
