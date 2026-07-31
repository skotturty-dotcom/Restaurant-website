import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Medal, Star } from 'lucide-react';

export default function Awards() {
  const awards = [
    {
      icon: Award,
      title: 'Best South Indian Restaurant 2025',
      organization: 'Australian Food & Dining Awards',
      year: '2025 Winner'
    },
    {
      icon: ShieldCheck,
      title: 'HACCP Safety & Hygiene',
      organization: 'Victorian Department of Health',
      year: 'Grade A Certified'
    },
    {
      icon: Medal,
      title: 'Gourmet Traveller Choice',
      organization: 'Australian Hospitality Guide',
      year: 'Top 10 Asian Fine Dining'
    },
    {
      icon: Star,
      title: 'Excellence in Heritage Dining',
      organization: 'Melbourne International Culinary Expo',
      year: 'Gold Medalist'
    }
  ];

  return (
    <section className="py-16 bg-forest-dark text-white border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-forest/40 border border-gold/20 hover:border-gold/50 transition-colors flex items-center space-x-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold border border-gold/30 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
                    {a.year}
                  </span>
                  <h4 className="font-playfair text-sm font-bold text-white leading-tight">
                    {a.title}
                  </h4>
                  <p className="text-gray-400 text-[11px] font-light mt-0.5">
                    {a.organization}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
