"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const { scrollY } = useScroll();
  
  const width = useTransform(scrollY, [0, 100], ["100%", "92%"]);
  const y = useTransform(scrollY, [0, 100], [0, 24]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(3, 7, 18, 0)", "rgba(10, 10, 20, 0.85)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  return (
    <motion.nav 
      style={{ 
        width, 
        y, 
        backgroundColor,
        borderColor: `rgba(255, 255, 255, ${borderOpacity.get()})`
      }}
      className="fixed left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between px-8 py-4 backdrop-blur-2xl rounded-full border border-transparent transition-all max-w-7xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
    >
      <div className="flex items-center gap-3">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full overflow-hidden border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
          <img 
            src="zantara-logo.png" 
            alt="Zantara AI" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col -space-y-1">
          <span className="text-xl font-black tracking-tighter text-white">ZANTARA<span className="text-purple-500">AI</span></span>
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-500">Dari Ide Ke Penghasilan</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-10">
        {['Features', 'Categories', 'Trends', 'About'].map(item => (
          <Magnetic key={item} strength={0.25}>
            <a href={`#${item.toLowerCase()}`} className="text-sm font-bold text-gray-300 hover:text-white transition-all">
              {item}
            </a>
          </Magnetic>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Magnetic strength={0.3}>
          <button className="hidden sm:block rounded-full bg-white/10 px-8 py-3 text-xs font-black uppercase tracking-widest text-white border border-white/10 hover:bg-white hover:text-black transition-all">
            Join Platform
          </button>
        </Magnetic>
        <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-white sm:hidden">
          <Menu size={22} />
        </button>
      </div>
    </motion.nav>
  );
}
