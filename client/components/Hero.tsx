'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { fetchAPI } from '@/lib/api';
import { Hero as HeroType } from '@/types';
import { Card3D } from './ui/Card3D';

export default function Hero() {
    const [hero, setHero] = useState<HeroType | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetchAPI('/home');
                if (res.success) {
                    setHero(res.data);
                }
            } catch (error) {
                console.error("Failed to fetch hero data", error);
            }
        };
        getData();
    }, []);

    // Default values if data isn't loaded yet
    const greeting = hero?.greeting || "Hi, I'm a Full Stack Developer";
    const title = hero?.title || "Building Digital Products that matter.";
    const subtitle = hero?.subtitle || "I specialize in building exceptional digital experiences with Next.js, Node.js, and modern web technologies.";
    const primaryCtaText = hero?.primaryCtaText || "View My Work";
    const secondaryCtaText = hero?.secondaryCtaText || "Contact Me";
    const heroImage = hero?.heroImage ? `http://localhost:5000${hero.heroImage}` : undefined;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
            {/* Background Gradient/Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="relative inline-block mb-6 group"
                    >
                        {/* RGB Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-green-600 to-blue-600 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                        
                        {/* Main Text Container */}
                        <div className="relative px-4 py-2 bg-black/80 rounded-lg ring-1 ring-white/10 leading-none flex items-center">
                            <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-green-400 to-blue-400 animate-pulse">
                                {greeting}
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <Link
                            href="#projects"
                            className="px-8 py-3 bg-primary text-black font-semibold rounded-full hover:bg-green-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,0,0.3)]"
                        >
                            {primaryCtaText}
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition-all transform hover:scale-105"
                        >
                            {secondaryCtaText}
                        </Link>
                    </motion.div>
                </div>

                {/* 3D Card Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex justify-center items-center order-1 lg:order-2 perspective-1000"
                >
                     <Card3D imageUrl={heroImage} className="w-80 h-[450px]">
                        {/* Optional overlay text inside card if needed */}
                     </Card3D>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hidden lg:block"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
}
