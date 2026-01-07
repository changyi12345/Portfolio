'use client';

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export const Card3D = ({ 
  children, 
  imageUrl,
  className = "" 
}: { 
  children?: React.ReactNode;
  imageUrl?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  
  // Shine effect based on mouse position
  const shineX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative h-[500px] w-[350px] rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-950 p-1 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_rgba(0,255,100,0.2)] transition-shadow duration-500 ${className}`}
    >
      {/* Neon Glow Border Effect */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary to-purple-600 blur-xl -z-10" 
      />

      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full rounded-2xl bg-zinc-900/90 overflow-hidden shadow-inner group"
      >
        {/* Shine/Glare Effect */}
        <motion.div 
            style={{
                background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.1), transparent 80%)`
            }}
            className="absolute inset-0 z-30 pointer-events-none"
        />

        {imageUrl ? (
            <div className="relative w-full h-full">
                 <Image 
                    src={imageUrl} 
                    alt="3D Card Image" 
                    fill 
                    unoptimized={true}
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Overlay Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-gradient-to-br from-zinc-800 to-black">
             <span className="text-6xl animate-pulse">🚀</span>
             <p className="mt-6 text-zinc-400 font-medium">Hover to explore 3D space</p>
          </div>
        )}

        {children && (
            <div 
                style={{ transform: "translateZ(30px)" }}
                className="absolute bottom-6 left-6 right-6 z-20"
            >
                {children}
            </div>
        )}
      </div>
      
      {/* Decorative Elements */}
      <motion.div 
        style={{ transform: "translateZ(80px)" }}
        className="absolute -top-6 -right-6 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" 
      />
      <motion.div 
        style={{ transform: "translateZ(60px)" }}
        className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" 
      />
    </motion.div>
  );
};
