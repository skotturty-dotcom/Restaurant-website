import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Flame, Utensils, Award, Clock, HeartHandshake, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Compass,
      title: 'Time-Honored Recipes',
      desc: 'Formulated from centuries-old South Indian kitchen manuscripts.'
    },
    {
      icon: Flame,
      title: 'Slow Cooked & Handcrafted',
      desc: 'Sambar and gravies simmered over gentle heat for hours for rich depth.'
    },
    {
      icon: Utensils,
      title: 'Hand-Ground Spices',
      desc: 'Whole spices dry roasted daily in small artisanal batches.'
    },
    {
      icon: Award,
      title: 'Master South Indian Chefs',
      desc: 'Trained in premier luxury hotels across Chennai, Bangalore & Kochi.'
    },
    {
      icon: Clock,
      title: 'Seamless Hospitality',
      desc: 'Effortless corporate lunch timing and attentive table concierges.'
    },
    {
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
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-dmsans font-semibold">
              The Anandam Difference
            </span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-forest-dark tracking-tight mb-4">
            Why Discerning Guests Choose Us
          </h2>
          <div className="w-20 h-0.5 bg-gold-gradient mx-auto" />
        </div>

        {/* CARDS GRID */}
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
                className="p-8 rounded-3xl bg-white border border-gold/30 hover:border-gold shadow-md hover:shadow-cardHover transition-all duration-500 flex items-start space-x-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-forest/5 text-forest border border-gold/40 flex items-center justify-center shrink-0 group-hover:bg-gold-gradient group-hover:text-forest-dark transition-all duration-500 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl font-bold text-forest-dark mb-2 group-hover:text-gold-dark transition-colors leading-tight">
                    {r.title}
                  </h3>
                  <p className="text-darkText/80 font-inter text-xs sm:text-sm font-normal leading-relaxed">
                    {r.desc}
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
