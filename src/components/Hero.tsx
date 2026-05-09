"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Sparkles, Search as SearchIcon, ChevronRight } from "lucide-react";
import Magnetic from "./Magnetic";
import { toolsData } from "@/data/tools";

import { FlipWords } from "./FlipWords";

interface HeroProps {
  onOpenWizard: () => void;
  onSearch?: (query: string) => void;
}

const popularToolIds = ['chatgpt', 'midjourney', 'notion', 'claude', 'cursor'];
const flipWords = ["Productivity", "Creativity", "Efficiency", "Success", "Future"];

export default function Hero({ onOpenWizard, onSearch }: HeroProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden px-4 pt-24 pb-12">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-full max-w-7xl">
        <div className="absolute top-1/4 -left-24 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-24 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-purple-400">
              <Zap size={14} className="fill-purple-400" />
              Smart Tools, Better You
            </div>
            
            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-white sm:text-7xl">
              Discover The Best <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                AI Tools
              </span> For Your <br />
              <FlipWords words={flipWords} className="text-white" />
            </h1>
            
            <p className="mb-8 max-w-lg text-lg text-gray-400">
              Explore 500+ AI tools across 12 categories. Find the perfect AI solution to boost your productivity and creativity.
            </p>

            {/* Integrated Search Style from Image 1 */}
            <div className="relative mb-8 max-w-md group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20 blur group-focus-within:opacity-40 transition-opacity" />
              <div className="relative flex items-center rounded-full bg-gray-900 border border-white/10 px-4 h-14">
                <SearchIcon className="text-gray-500 ml-2" size={20} />
                <input 
                  type="text" 
                  placeholder="Search AI tools... (e.g. ChatGPT, Midjourney)"
                  className="w-full bg-transparent px-4 text-white outline-none placeholder:text-gray-600"
                  value={query}
                  onChange={handleSearch}
                />
                <button 
                  onClick={() => onSearch?.(query)}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                >
                   <SearchIcon size={18} />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
              <Magnetic strength={0.3}>
                <button 
                  onClick={onOpenWizard}
                  className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-full bg-purple-600 px-8 font-bold text-white transition-all hover:bg-purple-700 sm:w-auto shadow-[0_10px_30px_rgba(168,85,247,0.3)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles size={18} /> Help Me Choose
                  </span>
                </button>
              </Magnetic>

              {/* Social Proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <img 
                      key={i} 
                      src={`https://i.pravatar.cc/150?u=${i}`} 
                      className="h-10 w-10 rounded-full border-2 border-gray-950" 
                      alt="User" 
                    />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">50K+</div>
                  <div className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">Productive people joined</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating 3D Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-purple-500/20 blur-[80px] rounded-full" />
            
            {/* The Panel */}
            <div className="relative glass-panel rounded-[2.5rem] p-8 shadow-2xl animate-float">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white">Most Popular</h3>
                <button className="text-gray-500 hover:text-white transition-colors">✕</button>
              </div>

              <div className="space-y-4">
                {popularToolIds.map((id, index) => {
                  const tool = toolsData[id];
                  if (!tool) return null;
                  
                  return (
                    <a 
                      key={id}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl bg-white/5 p-4 border border-transparent hover:border-purple-500/30 hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <span className="text-sm font-bold text-gray-600 group-hover:text-purple-400 transition-colors">{index + 1}</span>
                      <div className="h-10 w-10 rounded-xl bg-white/5 p-2 ring-1 ring-white/5 group-hover:ring-purple-500/30">
                        <img src={tool.logo} alt="" className="h-full w-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-white group-hover:text-purple-400">{tool.name}</div>
                        <div className="text-[10px] text-gray-500 uppercase font-bold">{tool.cat}</div>
                      </div>
                      <ChevronRight size={16} className="text-gray-700 group-hover:text-white transition-all group-hover:translate-x-1" />
                    </a>
                  );
                })}
              </div>

              <a 
                href="#tools-section"
                className="block mt-8 w-full py-3 text-center text-sm font-bold text-gray-400 hover:text-white transition-colors border-t border-white/5"
              >
                View All Trending →
              </a>
            </div>

            {/* Decorative Floating Symbols from Image 1 */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-10 -left-10 h-16 w-16 glass-panel rounded-2xl flex items-center justify-center text-purple-400 text-2xl shadow-[0_0_20px_rgba(168,85,247,0.3)]">⚡</motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 -right-5 h-14 w-14 glass-panel rounded-2xl flex items-center justify-center text-blue-400 text-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)]">💎</motion.div>
            <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 -right-12 h-12 w-12 glass-panel rounded-2xl flex items-center justify-center text-pink-400 text-xl shadow-[0_0_20px_rgba(236,72,153,0.3)]">💠</motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
