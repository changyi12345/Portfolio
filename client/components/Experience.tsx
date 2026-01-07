'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchAPI } from '@/lib/api';
import { Experience } from '@/types';

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchAPI('/experience');
        if (res.success) {
          setExperiences(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch experience", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <section id="experience" className="py-20 px-4 md:px-10 max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-16 text-center text-primary"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-zinc-800 ml-4 md:ml-10 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp._id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <span className="text-sm text-primary font-mono bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                {new Date(exp.startDate).getFullYear()} - {exp.endDate ? new Date(exp.endDate).getFullYear() : 'Present'}
              </span>
            </div>
            
            <h4 className="text-lg text-zinc-400 mb-4">{exp.company}</h4>
            <p className="text-zinc-500 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
        
        {experiences.length === 0 && !loading && (
          <div className="pl-12 text-zinc-600 italic">No experience added yet.</div>
        )}
      </div>
    </section>
  );
}
