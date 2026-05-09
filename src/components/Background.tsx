"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Background() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 2000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -300]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 50, y: (e.clientY / window.innerHeight - 0.5) * 50 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div 
        style={{ y: y1, x: mousePos.x * 0.5 }}
        className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" 
      />
      <motion.div 
        style={{ y: y2, x: mousePos.x * -0.3 }}
        className="absolute bottom-1/4 -right-24 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" 
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 brightness-100" />
    </div>
  );
}
