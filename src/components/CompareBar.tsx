"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeftRight, Check, Zap } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { toolsData } from "@/data/tools";
import { cn } from "@/lib/utils";

export default function CompareBar() {
  const { compareList, toggleCompare, clearCompare } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (compareList.length === 0) return null;

  const tool1 = toolsData[compareList[0]];
  const tool2 = compareList[1] ? toolsData[compareList[1]] : null;

  return (
    <>
      {/* Floating Bar */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full bg-gray-900/80 p-2 pl-6 pr-3 shadow-2xl backdrop-blur-xl border border-white/10"
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-400">Comparing:</span>
          <div className="flex -space-x-2">
            {compareList.map(id => (
              <div key={id} className="h-8 w-8 rounded-full border-2 border-gray-900 bg-white/10 p-1">
                <img src={toolsData[id].logo} alt="" className="h-full w-full object-contain" />
              </div>
            ))}
          </div>
          {compareList.length < 2 && (
            <span className="text-xs text-purple-400 animate-pulse">Select 1 more tool...</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button 
            disabled={compareList.length < 2}
            onClick={() => setIsModalOpen(true)}
            className={cn(
              "flex h-10 items-center gap-2 rounded-full px-6 text-sm font-bold transition-all",
              compareList.length === 2 
                ? "bg-purple-600 text-white hover:bg-purple-700" 
                : "bg-white/5 text-gray-500 cursor-not-allowed"
            )}
          >
            Compare Now <ArrowLeftRight size={16} />
          </button>
          <button 
            onClick={clearCompare}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>
      </motion.div>

      {/* Comparison Modal */}
      <AnimatePresence>
        {isModalOpen && tool1 && tool2 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gray-950 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/5 p-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <ArrowLeftRight className="text-purple-500" /> Tool Comparison
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="rounded-full bg-white/5 p-2 hover:bg-white/10">
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-3 gap-8">
                  {/* Headers */}
                  <div className="pt-24 space-y-12 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    <div>Category</div>
                    <div>Rating</div>
                    <div>Pricing</div>
                    <div>Smart Factor</div>
                  </div>

                  {/* Tool 1 */}
                  <div className="text-center">
                    <div className="mb-6 flex flex-col items-center">
                      <div className="mb-4 h-20 w-20 rounded-2xl bg-white/5 p-4">
                        <img src={tool1.logo} alt="" className="h-full w-full object-contain" />
                      </div>
                      <h3 className="text-xl font-bold">{tool1.name}</h3>
                    </div>
                    <div className="space-y-12 py-2">
                      <div className="text-purple-400">{tool1.cat}</div>
                      <div className="text-yellow-500 font-bold">{tool1.rating}</div>
                      <div className="text-gray-300">{tool1.pricing}</div>
                      <div className="text-sm text-gray-400 italic">"{tool1.pros || 'Excellent performance'}"</div>
                    </div>
                  </div>

                  {/* Tool 2 */}
                  <div className="text-center border-l border-white/5">
                    <div className="mb-6 flex flex-col items-center">
                      <div className="mb-4 h-20 w-20 rounded-2xl bg-white/5 p-4">
                        <img src={tool2.logo} alt="" className="h-full w-full object-contain" />
                      </div>
                      <h3 className="text-xl font-bold">{tool2.name}</h3>
                    </div>
                    <div className="space-y-12 py-2">
                      <div className="text-purple-400">{tool2.cat}</div>
                      <div className="text-yellow-500 font-bold">{tool2.rating}</div>
                      <div className="text-gray-300">{tool2.pricing}</div>
                      <div className="text-sm text-gray-400 italic">"{tool2.pros || 'Very capable'}"</div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex justify-center gap-4 border-t border-white/5 pt-8">
                   <div className="flex items-center gap-2 rounded-2xl bg-purple-500/10 p-4 border border-purple-500/20 text-purple-300 text-sm">
                      <Zap size={18} className="text-purple-500 fill-purple-500" />
                      <span><strong>Smart Verdict:</strong> {tool1.name} is often better for {tool1.pros?.split(',')[0] || 'efficiency'}, while {tool2.name} excels in {tool2.pros?.split(',')[1] || 'versatility'}.</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
