"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight, CheckCircle2, ChevronLeft } from "lucide-react";
import { toolsData } from "@/data/tools";

interface WizardProps {
  isOpen: boolean;
  onClose: () => void;
}

interface StepOption {
  id: string;
  label: string;
  icon?: string;
}

interface Step {
  title: string;
  depends?: string;
  options: StepOption[] | Record<string, StepOption[]>;
}

const steps: Step[] = [
  {
    title: "What is your main goal?",
    options: [
      { id: "productivity", label: "Boost Productivity", icon: "🚀" },
      { id: "creative", label: "Creative Work", icon: "🎨" },
      { id: "business", label: "Business Analysis", icon: "📈" },
      { id: "coding", label: "Development / Coding", icon: "💻" }
    ]
  },
  {
    title: "What specifically do you need?",
    depends: "goal",
    options: {
      productivity: [
        { id: "AI Chatbot", label: "Answering Questions / Chat" },
        { id: "AI Writing", label: "Writing Emails / Articles" },
        { id: "AI Spreadsheet", label: "Data & Spreadsheets" }
      ],
      creative: [
        { id: "AI Image Generator", label: "Generating Images / Art" },
        { id: "AI Video", label: "Creating Videos" },
        { id: "AI Presentation", label: "Making Slide Decks" }
      ],
      business: [
        { id: "AI Data Viz", label: "Analyzing Data" },
        { id: "AI Automation", label: "Automating Workflows" },
        { id: "AI Meeting", label: "Meeting Notes / Recording" }
      ],
      coding: [
        { id: "AI Coding", label: "Writing & Debugging Code" }
      ]
    }
  }
];

export default function Wizard({ isOpen, onClose }: WizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const handleSelect = (stepKey: string, value: string) => {
    const newSelections = { ...selections, [stepKey]: value };
    setSelections(newSelections);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final step: finding recommendation
      const category = value; 
      const toolsInCat = Object.keys(toolsData).filter(key => toolsData[key].cat === category);
      // Pick the highest rank tool in that category
      const bestTool = toolsInCat.sort((a, b) => toolsData[a].rank - toolsData[b].rank)[0];
      setRecommendation(bestTool);
      setCurrentStep(steps.length);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setSelections({});
    setRecommendation(null);
  };

  const currentOptions: StepOption[] = currentStep < steps.length 
    ? (steps[currentStep].depends 
        ? (steps[currentStep].options as Record<string, StepOption[]>)[selections['goal']] 
        : steps[currentStep].options as StepOption[])
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-gray-900 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 p-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                  <Sparkles size={18} />
                </div>
                <h2 className="text-lg font-bold text-white">AI Selection Wizard</h2>
              </div>
              <button onClick={() => { onClose(); reset(); }} className="rounded-full bg-white/5 p-2 hover:bg-white/10">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {currentStep < steps.length ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  {currentStep > 0 && (
                    <button 
                      onClick={() => setCurrentStep(prev => prev - 1)}
                      className="flex items-center gap-1 text-xs text-gray-500 hover:text-white"
                    >
                      <ChevronLeft size={14} /> Back
                    </button>
                  )}
                  <h3 className="text-2xl font-bold text-white">{steps[currentStep].title}</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {currentOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleSelect(currentStep === 0 ? 'goal' : 'detail', opt.id)}
                        className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-5 text-left transition-all hover:border-purple-500/50 hover:bg-white/10 group"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-2xl">{opt.icon}</span>
                          <span className="font-bold text-white">{opt.label}</span>
                        </div>
                        <ArrowRight size={18} className="text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-purple-400" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-full bg-purple-500/20 blur-xl animate-pulse" />
                      <CheckCircle2 size={64} className="relative text-green-500" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-white">We Found Your Perfect Match!</h3>
                  <p className="mb-8 text-gray-400">Based on your needs, we recommend starting with:</p>
                  
                  {recommendation && (
                    <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-purple-500/30 bg-purple-500/5 p-6">
                      <div className="mb-4 flex justify-center">
                        <img src={toolsData[recommendation].logo} alt="" className="h-16 w-16 object-contain" />
                      </div>
                      <h4 className="mb-1 text-xl font-bold text-white">{toolsData[recommendation].name}</h4>
                      <div className="mb-4 text-xs font-bold uppercase tracking-widest text-purple-400">
                        {toolsData[recommendation].cat}
                      </div>
                      <a 
                        href={toolsData[recommendation].link}
                        target="_blank"
                        className="inline-flex w-full items-center justify-center rounded-xl bg-purple-600 py-3 font-bold text-white transition-all hover:bg-purple-700"
                      >
                        Try It Now
                      </a>
                    </div>
                  )}

                  <button 
                    onClick={reset}
                    className="mt-8 text-sm text-gray-500 hover:text-white"
                  >
                    Start Over
                  </button>
                </motion.div>
              )}
            </div>

            {/* Footer Progress */}
            {currentStep <= steps.length && (
              <div className="flex h-1 w-full bg-white/5">
                <motion.div 
                  className="h-full bg-purple-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
