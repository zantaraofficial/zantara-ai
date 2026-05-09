"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Search as SearchIcon, X, Sparkles } from "lucide-react";
import { toolsData } from "@/data/tools";
import { motion, AnimatePresence } from "framer-motion";

const intents = [
  { phrase: "I want to make money", search: "writing, automation, marketing" },
  { phrase: "Help me with coding", search: "coding, development" },
  { phrase: "Make viral videos", search: "video, image" },
  { phrase: "Organize my life", search: "scheduling, knowledge" },
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Derive results directly from query to avoid unnecessary useEffect/setState
  const results = useMemo(() => {
    if (!query) return [];
    
    return Object.keys(toolsData)
      .filter(key => {
        const tool = toolsData[key];
        const searchStr = query.toLowerCase();
        
        // Match name or category
        if (tool.name.toLowerCase().includes(searchStr) || tool.cat.toLowerCase().includes(searchStr)) return true;
        
        // Match Intent
        const matchedIntent = intents.find(i => i.phrase.toLowerCase().includes(searchStr));
        if (matchedIntent && matchedIntent.search.includes(tool.cat.toLowerCase())) return true;
        
        return false;
      })
      .slice(0, 6);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-2xl px-4" ref={searchRef}>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-10 blur group-focus-within:opacity-30 transition-opacity" />
        <div className="relative flex items-center rounded-full bg-gray-900 border border-white/10 h-14 px-4 overflow-hidden">
          <SearchIcon className="text-gray-500" size={20} />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => query && setIsOpen(true)}
            placeholder="Search AI tools or your goals (e.g. 'I want to make money')..."
            className="w-full bg-transparent px-4 text-white outline-none placeholder:text-gray-600 text-sm sm:text-base"
          />
          <AnimatePresence>
            {query && (
              <motion.button 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => {
                  setQuery("");
                  setIsOpen(false);
                }}
                className="p-2 text-gray-500 hover:text-white"
              >
                <X size={18} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-4 right-4 top-full z-50 mt-3 overflow-hidden rounded-[2rem] border border-white/10 bg-gray-950/90 p-2 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-purple-400 border-b border-white/5 mb-2 flex items-center gap-2">
               <Sparkles size={12} /> Smart Suggestions
            </div>
            {results.map((key) => (
              <button
                key={key}
                onClick={() => {
                  // Optional: handle selection
                  setIsOpen(false);
                }}
                className="flex w-full items-center gap-4 rounded-2xl p-3 text-left transition-all hover:bg-white/5 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 p-2 ring-1 ring-white/10 transition-transform group-hover:scale-110">
                  <img src={toolsData[key].logo} alt="" className="h-full w-full object-contain" />
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-purple-400 transition-colors">{toolsData[key].name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{toolsData[key].cat}</div>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
