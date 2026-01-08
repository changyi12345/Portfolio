'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Gradient/Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-primary font-medium tracking-wide mb-4"
                >
                    Hi, I'm a Full Stack Developer
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                >
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Digital Products</span> that matter.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
                >
                    I specialize in building exceptional digital experiences with Next.js, Node.js, and modern web technologies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="#projects"
                        className="px-8 py-3 bg-primary text-black font-semibold rounded-full hover:bg-green-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,0,0.3)]"
                    >
                        View My Work
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition-all transform hover:scale-105"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
}
