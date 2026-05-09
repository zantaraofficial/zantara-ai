"use client";

import { motion } from "framer-motion";
import { useRef, useState, CSSProperties } from "react";
import { Star, ExternalLink, Heart, ArrowLeftRight } from "lucide-react";
import { Tool } from "@/data/tools";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/context/AppContext";
import Magnetic from "./Magnetic";

interface ToolCardProps {
  tool: Tool;
  toolId: string;
  index: number;
}

interface SpotlightStyle extends CSSProperties {
  "--mouse-x": string;
  "--mouse-y": string;
}

export default function ToolCard({ tool, toolId, index }: ToolCardProps) {
  const { favorites, toggleFavorite, compareList, toggleCompare } = useAppContext();
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const isFavorite = favorites.includes(toolId);
  const isComparing = compareList.includes(toolId);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - left, y: e.clientY - top });
  };

  const style: SpotlightStyle = {
    "--mouse-x": `${mousePos.x}px`,
    "--mouse-y": `${mousePos.y}px`,
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -12, transition: { duration: 0.2 } }}
      style={style}
      className={cn(
        "group spotlight-card relative flex flex-col overflow-hidden rounded-[2.5rem] border transition-all duration-500",
        isComparing 
          ? "border-purple-500 bg-purple-500/10 shadow-[0_0_40px_rgba(168,85,247,0.3)]" 
          : "border-white/5 bg-gray-900/60 backdrop-blur-xl hover:border-purple-500/40 hover:bg-gray-800/80 shadow-2xl"
      )}
    >
      {/* Top Header Section */}
      <div className="relative p-8 pb-4 z-10">
        <div className="flex items-center justify-between mb-6">
           <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-sm font-black text-white/50 ring-1 ring-white/10 group-hover:bg-purple-600 group-hover:text-white group-hover:ring-purple-400 transition-all duration-300">
             {tool.rank}
           </div>
           {tool.badge && (
            <div className={cn(
              "rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]",
              tool.badge === 'popular' ? "bg-green-500/10 text-green-400 border border-green-500/20" : 
              tool.badge === 'hot' ? "bg-orange-500/10 text-orange-400 border border-orange-500/20" : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
            )}>
              {tool.badge}
            </div>
          )}
        </div>

        {/* Logo Container */}
        <div className="mb-8 flex justify-center">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white/5 p-5 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 shadow-2xl group-hover:shadow-purple-500/20">
            <img src={tool.logo} alt={tool.name} className="h-full w-full object-contain" />
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="px-8 pb-8 text-center z-10">
        <h3 className="mb-1 text-2xl font-black text-white group-hover:text-purple-400 transition-colors tracking-tighter">
          {tool.name}
        </h3>
        <p className="mb-5 text-[11px] font-black text-purple-400/80 uppercase tracking-[0.25em]">
          {tool.cat}
        </p>
        
        <p className="mb-8 line-clamp-2 text-sm text-gray-400 leading-relaxed min-h-[44px]">
          {tool.desc}
        </p>

        <div className="flex items-center justify-between mb-8 px-2">
          <div className="text-[13px] font-bold text-gray-300">Save ~4h/week</div>
          <div className="flex items-center gap-1.5 text-sm text-yellow-500 font-black">
            <Star size={16} fill="currentColor" />
            <span>{tool.rating.replace('⭐ ', '')}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Magnetic strength={0.25}>
            <a 
              href={tool.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-purple-600 px-8 py-4 text-xs font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all shadow-[0_10px_30px_rgba(168,85,247,0.3)]"
            >
              Visit <ExternalLink size={14} />
            </a>
          </Magnetic>
          
          <div className="flex flex-1 justify-end gap-2.5">
            <button 
              onClick={() => toggleCompare(toolId)}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-2xl transition-all border duration-300",
                isComparing ? "bg-purple-500 border-purple-400 text-white shadow-lg" : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              )}
            >
              <ArrowLeftRight size={20} />
            </button>
            <button 
              onClick={() => toggleFavorite(toolId)}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-2xl transition-all border duration-300",
                isFavorite ? "bg-red-500 border-red-400 text-white shadow-lg" : "bg-white/5 border-white/10 text-gray-400 hover:text-red-400 hover:border-red-500/20"
              )}
            >
              <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
