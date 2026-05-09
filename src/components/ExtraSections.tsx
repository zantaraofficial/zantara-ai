"use client";

import { motion } from "framer-motion";
import { Search, Compass, Zap, Users, Layout, Activity, Globe } from "lucide-react";

export function StatsSection() {
  const stats = [
    { icon: Layout, label: "AI Tools", value: "500+" },
    { icon: Globe, label: "Categories", value: "12" },
    { icon: Users, label: "Happy Users", value: "50K+" },
    { icon: Activity, label: "Monthly Visits", value: "120K+" },
    { icon: Zap, label: "Uptime", value: "99.9%" },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-gray-950/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap justify-between gap-8 md:flex-nowrap">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <stat.icon size={24} />
              </div>
              <div>
                <div className="text-xl font-black text-white">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { 
      id: 1, 
      icon: Search, 
      title: "Search or Browse", 
      desc: "Search for specific tools or explore AI tools by category." 
    },
    { 
      id: 2, 
      icon: Compass, 
      title: "Discover & Compare", 
      desc: "Read details, reviews, and compare tools side-by-side." 
    },
    { 
      id: 3, 
      icon: Zap, 
      title: "Boost Productivity", 
      desc: "Click to visit the tool and start boosting your productivity." 
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* 3D Asset Placeholder (like the laptop in the image) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[400px] w-[600px] opacity-20 pointer-events-none hidden lg:block">
        <div className="h-full w-full bg-gradient-to-l from-purple-600/30 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <h2 className="mb-2 text-3xl font-black text-white">How It Works</h2>
        <p className="mb-16 text-gray-500 font-medium">Find the perfect AI tool in just 3 simple steps</p>

        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.id} className="relative group">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600/10 text-purple-400 ring-1 ring-purple-500/20 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <step.icon size={28} />
                <span className="absolute -top-3 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-[10px] font-black text-white">
                  {step.id}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">{step.desc}</p>
              
              {step.id < 3 && (
                <div className="absolute top-7 left-14 hidden h-[1px] w-[200px] border-t border-dashed border-white/10 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
