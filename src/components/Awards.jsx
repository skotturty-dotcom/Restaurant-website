import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Trophy, Star } from 'lucide-react';

export default function Awards() {
  const awards = [
    {
      icon: Trophy,
      tag: '2025 Winner',
      title: 'Best South Indian Restaurant 2025',
      organization: 'Australian Food & Dining Awards'
    },
    {
      icon: ShieldCheck,
      tag: 'Grade A Certified',
      title: 'HACCP Safety & Hygiene',
      organization: 'Victorian Department of Health'
    },
    {
      icon: Award,
      tag: 'Top 10 Asian Fine Dining',
      title: 'Gourmet Traveller Choice',
      organization: 'Australian Hospitality Guide'
    },
    {
      icon: Star,
      tag: 'Gold Medalist',
      title: 'Excellence in Heritage Dining',
      organization: 'Melbourne International Culinary Expo'
    }
  ];

  return (
    <section className="py-20 bg-ivory border-b border-borderLine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-8 rounded-3xl bg-white border-2 border-forest/40 hover:border-forest shadow-md hover:shadow-cardHover transition-all duration-500 flex items-start space-x-5 group overflow-hidden"
              >
                {/* TOP METALLIC ACCENT BAR */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-forest via-gold to-forest-dark opacity-90" />

                <div className="w-14 h-14 rounded-2xl bg-forest text-gold border border-gold/40 flex items-center justify-center shrink-0 group-hover:bg-gold-gradient group-hover:text-forest-dark transition-all duration-500 shadow-md group-hover:scale-110">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <span className="font-dmsans text-xs sm:text-sm font-bold text-gold-dark uppercase tracking-widest block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-forest-dark mb-2 group-hover:text-gold-dark transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-darkText/80 font-inter text-xs sm:text-sm font-normal leading-relaxed">
                    {item.organization}
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
