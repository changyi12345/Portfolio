'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fetchAPI } from '@/lib/api';

interface Skill {
    _id: string;
    name: string;
    level: string;
}

export default function Skills() {
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        const getSkills = async () => {
            try {
                const res = await fetchAPI('/skills');
                if (res.success) {
                    setSkills(res.data);
                }
            } catch (error) {
                console.error("Failed to fetch skills", error);
            }
        };
        getSkills();
    }, []);

    const getLevelWidth = (level: string) => {
        switch (level) {
            case 'Beginner': return '33%';
            case 'Intermediate': return '66%';
            case 'Advanced': return '100%';
            default: return '50%';
        }
    };

    return (
        <section id="skills" className="py-20 px-4 bg-background/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill._id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card p-4 rounded-lg border border-white/5"
                        >
                            <div className="flex justify-between mb-2">
                                <span className="font-medium text-white">{skill.name}</span>
                                <span className="text-sm text-primary">{skill.level}</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: getLevelWidth(skill.level) }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="h-full bg-primary rounded-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
