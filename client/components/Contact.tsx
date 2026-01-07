'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { fetchAPI } from '@/lib/api';
import { Contact as ContactType } from '@/types';

export default function Contact() {
    const [contact, setContact] = useState<ContactType | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetchAPI('/contact');
                if (res.success) {
                    setContact(res.data);
                }
            } catch (error) {
                console.error("Failed to fetch contact data", error);
            }
        };
        getData();
    }, []);

    const socialLinks = [
        { name: 'GitHub', icon: Github, url: contact?.github },
        { name: 'LinkedIn', icon: Linkedin, url: contact?.linkedin },
        { name: 'Twitter', icon: Twitter, url: contact?.twitter },
        { name: 'Facebook', icon: Facebook, url: contact?.facebook },
        { name: 'Instagram', icon: Instagram, url: contact?.instagram },
    ].filter(link => link.url);

    return (
        <section id="contact" className="py-20 px-4 bg-black/50">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {contact?.email && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-card p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-white font-semibold mb-2">Email</h3>
                            <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-primary transition-colors break-all">
                                {contact.email}
                            </a>
                        </motion.div>
                    )}

                    {contact?.phone && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-card p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Phone size={24} />
                            </div>
                            <h3 className="text-white font-semibold mb-2">Phone</h3>
                            <a href={`tel:${contact.phone}`} className="text-gray-400 hover:text-primary transition-colors">
                                {contact.phone}
                            </a>
                        </motion.div>
                    )}

                    {contact?.address && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-card p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-white font-semibold mb-2">Location</h3>
                            <p className="text-gray-400">
                                {contact.address}
                            </p>
                        </motion.div>
                    )}
                </div>

                {socialLinks.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center gap-6"
                    >
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:-translate-y-1 transition-all duration-300 border border-white/10"
                                aria-label={social.name}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
