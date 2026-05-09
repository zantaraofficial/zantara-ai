"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import MagicBento from "@/components/MagicBento";
import ToolCard from "@/components/ToolCard";
import FavoritesSection from "@/components/FavoritesSection";
import NewsTicker from "@/components/NewsTicker";
import Wizard from "@/components/Wizard";
import { StatsSection, HowItWorks } from "@/components/ExtraSections";
import Background from "@/components/Background";
import { toolsData } from "@/data/tools";
import { motion, AnimatePresence, Variants } from "framer-motion";

const revealVariant: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Home() {
  const [filter, setFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  const handleSelect = (cat: string | null) => {
    setFilter(cat);
    if (cat) {
      setTimeout(() => {
        const element = document.getElementById('tools-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const filteredTools = Object.keys(toolsData).filter(key => {
    const tool = toolsData[key];
    const matchesFilter = !filter || tool.cat === filter;
    const matchesSearch = !searchQuery || 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  // If no tools match search, show trending or message
  const displayTools = filteredTools.length > 0 ? filteredTools : [];
  return (
    <main className="min-h-screen bg-[#030712] selection:bg-purple-500/30 overflow-hidden pt-16">
      {/* Premium Background Elements */}
      <Background />
      <div className="fixed inset-0 grid-overlay pointer-events-none opacity-40" />
      <div className="fixed inset-0 scanline pointer-events-none opacity-20" />
      
      <div className="relative z-[110]">
        <NewsTicker />
      </div>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
        <Hero 
          onOpenWizard={() => setIsWizardOpen(true)} 
          onSearch={(query) => {
            setSearchQuery(query);
            if (query) {
              const element = document.getElementById('tools-section');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </motion.div>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariant} className="mt-20">
        <MagicBento onSelect={handleSelect} />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariant}>
        <FavoritesSection />
      </motion.div>

      <section id="tools-section" className="py-24 px-4">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-black text-white sm:text-6xl tracking-tighter">
              {filter ? `Best in ${filter}` : "Trending AI Tools"}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-500">
              {filter 
                ? `Explore our top-rated selection of AI tools for ${filter.toLowerCase()}.` 
                : "Discover the most popular and highest rated AI tools that are currently shaping the industry."
              }
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {displayTools.length > 0 ? (
                displayTools.map((key, index) => (
                  <motion.div 
                    key={key} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    data-cursor="Open"
                  >
                    <ToolCard tool={toolsData[key]} toolId={key} index={index} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <h3 className="text-2xl font-bold text-gray-400">No tools found matching "{searchQuery}"</h3>
                  <button 
                    onClick={() => { setSearchQuery(""); setFilter(null); }}
                    className="mt-4 text-purple-400 hover:text-purple-300 font-bold"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
        <StatsSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
        <HowItWorks />
      </motion.div>

      <Wizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />

      {/* Footer */}
      <footer className="border-t border-white/5 bg-gray-950/50 py-24 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/zantara-logo.png" className="h-10 w-10 rounded-full" alt="Zantara Logo" />
                <h3 className="text-xl font-black text-white tracking-tighter">ZANTARA<span className="text-purple-500">AI</span></h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Platform direktori AI terlengkap untuk membantu Anda mengubah ide kreatif menjadi penghasilan nyata.
              </p>
            </div>
            <div>
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Categories</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                {['AI Chatbot', 'AI Image', 'AI Coding', 'AI Video'].map(cat => (
                  <li key={cat} className="hover:text-purple-400 cursor-pointer transition-colors">{cat}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Company</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map(link => (
                  <li key={link} className="hover:text-purple-400 cursor-pointer transition-colors">{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Newsletter</h4>
              <div className="flex gap-2">
                <input type="text" placeholder="Email address" className="w-full rounded-xl bg-white/5 px-4 py-2 text-sm text-white outline-none border border-white/10" />
                <button className="rounded-xl bg-purple-600 px-4 py-2 text-xs font-bold text-white hover:bg-purple-700">Join</button>
              </div>
            </div>
          </div>
          <div className="mt-24 border-t border-white/5 pt-8 text-center text-xs text-gray-600">
            © 2026 Zantara AI Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
