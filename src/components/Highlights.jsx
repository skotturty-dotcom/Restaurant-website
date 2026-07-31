import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, UtensilsCrossed, ShieldCheck, Heart, Users, Sparkles } from 'lucide-react';

export default function Highlights() {
  const highlights = [
    {
      number: '01',
      icon: Leaf,
      title: 'Fresh Australian Produce',
      description: 'Handpicked local Victorian organic produce paired with stone-ground heirloom South Indian spices.'
    },
    {
      number: '02',
      icon: Award,
      title: 'Authentic Heritage Recipes',
      description: 'Time-honored batter fermentation methods perfected over three generations of master chefs.'
    },
    {
      number: '03',
      icon: UtensilsCrossed,
      title: 'Michelin-Style Dining',
      description: 'Polished traditional brassware, warm candlelight, and bespoke banana leaf presentation.'
    },
    {
      number: '04',
      icon: Heart,
      title: '100% Pure Vegetarian',
      description: 'Dedicated pure vegetarian kitchen with extensive Vegan & Jain culinary options.'
    },
    {
      number: '05',
      icon: ShieldCheck,
      title: 'Australian Food Safety',
      description: 'Certified under strict Australian Food Standards & HACCP Grade A hygiene guidelines.'
    },
    {
      number: '06',
      icon: Users,
      title: 'Family & Corporate Dining',
      description: 'Intimate dining tables, executive lunch suites, and luxury private event halls.'
    }
  ];

  return (
    <section id="highlights" className="py-24 bg-ivory relative overflow-hidden border-b border-borderLine">
      
      {/* DECORATIVE LIGHT GLOWS */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-terracotta/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-gold mb-3">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold">
              Pillars of Excellence
            </span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-forest-dark tracking-tight mb-4">
            Why Dining at Anandam is Extraordinary
          </h2>
          <div className="w-20 h-0.5 bg-gold-gradient mx-auto mb-4" />
          <p className="text-mutedText font-inter font-light text-sm sm:text-base max-w-2xl mx-auto">
            Combining authentic culinary traditions from Tamil Nadu, Kerala, Andhra & Karnataka with Australia's finest organic ingredients.
          </p>
        </div>

        {/* ELEGANT LIGHT & LUXURY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-3xl bg-white text-darkText p-8 border border-gold/30 hover:border-gold shadow-md hover:shadow-cardHover transition-all duration-500 group flex flex-col justify-between overflow-hidden"
              >
                {/* TOP GOLD METALLIC ACCENT BAR */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient opacity-90 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* TOP HEADER ROW: ICON & NUMBER */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-forest/5 border border-gold/40 flex items-center justify-center text-forest group-hover:bg-gold-gradient group-hover:text-forest-dark group-hover:border-gold transition-all duration-500 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-gold-dark/40 group-hover:text-gold-dark transition-colors">
                      {item.number}
                    </span>
                  </div>

                  {/* HEADING & DESCRIPTION */}
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-forest-dark mb-3 group-hover:text-gold-dark transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-mutedText text-xs sm:text-sm font-inter font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* BOTTOM DECORATIVE CORNER ACCENT */}
                <div className="pt-6 mt-6 border-t border-borderLine flex items-center justify-between text-[11px] font-mono text-gold-dark uppercase tracking-widest">
                  <span>Anandam Australia</span>
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
