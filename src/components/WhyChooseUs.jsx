import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Flame, Utensils, Award, Clock, HeartHandshake, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      number: '01',
      icon: Compass,
      title: 'Time-Honored Recipes',
      desc: 'Formulated from centuries-old South Indian kitchen manuscripts.'
    },
    {
      number: '02',
      icon: Flame,
      title: 'Slow Cooked & Handcrafted',
      desc: 'Sambar and gravies simmered over gentle heat for hours for rich depth.'
    },
    {
      number: '03',
      icon: Utensils,
      title: 'Hand-Ground Spices',
      desc: 'Whole spices dry roasted daily in small artisanal batches.'
    },
    {
      number: '04',
      icon: Award,
      title: 'Master South Indian Chefs',
      desc: 'Trained in premier luxury hotels across Chennai, Bangalore & Kochi.'
    },
    {
      number: '05',
      icon: Clock,
      title: 'Seamless Hospitality',
      desc: 'Effortless corporate lunch timing and attentive table concierges.'
    },
    {
      number: '06',
      icon: HeartHandshake,
      title: 'Warm Australian Heritage',
      desc: 'Combining South Indian warmth with Australian fine dining excellence.'
    }
  ];

  return (
    <section className="py-24 bg-ivory border-b border-borderLine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION TITLE & SUBHEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-gold mb-3">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm sm:text-base uppercase tracking-[0.2em] font-dmsans font-bold text-gold">
              The Anandam Difference
            </span>
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-forest-dark tracking-tight mb-4">
            Why Discerning Guests Choose Us
          </h2>
          <div className="w-20 h-0.5 bg-gold-gradient mx-auto" />
        </div>

        {/* HIGHLIGHTED CARDS GRID WITH RICH GREEN BORDERS & TOP ACCENT BAR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative p-8 rounded-3xl bg-white border-2 border-forest/40 hover:border-forest shadow-md hover:shadow-cardHover transition-all duration-500 group flex flex-col justify-between overflow-hidden"
              >
                {/* HIGHLIGHTED TOP METALLIC GREEN & GOLD ACCENT LINE */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-forest via-gold to-forest-dark opacity-90 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* TOP HEADER ROW: ICON & NUMBER */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-forest text-gold border border-gold/40 flex items-center justify-center group-hover:bg-gold-gradient group-hover:text-forest-dark transition-all duration-500 shadow-md group-hover:scale-110">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-forest/40 group-hover:text-forest transition-colors">
                      {r.number}
                    </span>
                  </div>

                  {/* HEADING & DESCRIPTION */}
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-forest-dark mb-3 group-hover:text-gold-dark transition-colors leading-tight">
                    {r.title}
                  </h3>

                  <p className="text-darkText/80 font-inter text-xs sm:text-sm font-normal leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                {/* BOTTOM DECORATIVE CORNER ACCENT */}
                <div className="pt-6 mt-6 border-t border-forest/15 flex items-center justify-between text-[11px] font-mono text-forest font-bold uppercase tracking-widest">
                  <span>Anandam Standard</span>
                  <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
