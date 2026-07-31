import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight, Flame, Clock } from 'lucide-react';

export default function TodaysSpecial({ onQuickView, dishes }) {
  const specials = dishes.slice(0, 3); // Top 3 daily specials

  return (
    <section className="py-20 bg-ivory border-b border-borderLine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-terracotta mb-2">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold">Fresh Daily Creation</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-forest-dark">
              Today's Gourmet Specials
            </h2>
          </div>

          <div className="flex items-center space-x-2 text-mutedText text-xs font-light mt-2 md:mt-0">
            <Clock className="w-4 h-4 text-gold" />
            <span>Updated Daily at 10:30 AM EST</span>
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specials.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 rounded-3xl bg-white border border-gold/30 hover:border-gold shadow-sm hover:shadow-cardHover transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-forest-dark/90 text-gold text-[10px] font-bold uppercase tracking-wider border border-gold/30">
                    Daily Special
                  </span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-playfair text-xl font-bold text-forest-dark group-hover:text-gold transition-colors">
                    {dish.title}
                  </h3>
                  <span className="font-mono text-base font-bold text-forest">
                    AUD ${dish.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-mutedText text-xs font-light line-clamp-2 leading-relaxed">
                  {dish.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-borderLine flex items-center justify-between">
                <span className="text-[11px] text-gray-500 font-medium">Limited Quantity Batch</span>
                <button
                  onClick={() => onQuickView(dish)}
                  className="text-xs uppercase font-bold tracking-wider text-forest group-hover:text-gold flex items-center space-x-1 transition-colors"
                >
                  <span>Explore Dish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
