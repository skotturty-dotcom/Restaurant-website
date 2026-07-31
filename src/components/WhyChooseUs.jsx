import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Utensils, Flame, Compass, Clock, Award, Shield, HeartHandshake } from 'lucide-react';

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
    <section className="py-20 bg-ivory-dark/40 border-b border-borderLine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block mb-2">
            The Anandam Difference
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-forest-dark mb-4">
            Why Discerning Guests Choose Us
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-borderLine hover:border-gold/40 shadow-sm hover:shadow-luxury transition-all duration-300 flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-xl bg-forest/5 text-forest border border-forest/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-forest-dark mb-1">
                    {r.title}
                  </h3>
                  <p className="text-mutedText text-xs sm:text-sm font-light leading-relaxed">
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
