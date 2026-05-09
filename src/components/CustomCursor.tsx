"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isClickable = target.closest("button, a, .cursor-pointer");
      setIsHovering(!!isClickable);

      // Check if target has data-cursor attribute
      const text = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      setCursorText(text || "");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden sm:block"
      >
        <motion.div
          animate={{
            width: isHovering ? 80 : 24,
            height: isHovering ? 80 : 24,
            x: isHovering ? -40 : -12,
            y: isHovering ? -40 : -12,
          }}
          className="rounded-full bg-white flex items-center justify-center text-[10px] font-black text-black uppercase tracking-tighter"
        >
          {isHovering && cursorText && (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>
      
      {/* Small dot that follows instantly */}
      <div 
        className="fixed top-0 left-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 pointer-events-none hidden sm:block"
        style={{ left: mousePos.x, top: mousePos.y }}
      />
    </>
  );
}
