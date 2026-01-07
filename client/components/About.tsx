'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchAPI } from '@/lib/api';
import { About } from '@/types';
import Image from 'next/image';

export default function AboutSection() {
  const [about, setAbout] = useState<About | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchAPI('/about');
        if (res.success) {
          setAbout(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch about data", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return null;

  return (
    <section id="about" className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl bg-card border border-zinc-800"
        >
            <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-600">
              {about?.profileImage ? (
                <Image 
                  src={`http://localhost:5000${about.profileImage}`}
                  alt="Profile" 
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="text-6xl">👤</span>
              )}
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
            {about?.title || 'About Me'}
          </h2>
          <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
            {about?.bio || "I am a passionate developer with a love for building modern web applications."}
          </p>
          
          {about?.resumeUrl && (
            <a 
              href={`http://localhost:5000${about.resumeUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-black font-semibold rounded-full hover:bg-green-400 transition-colors"
            >
              Download Resume
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
