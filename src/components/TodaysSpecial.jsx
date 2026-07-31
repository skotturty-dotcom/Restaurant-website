import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Clock, Sparkles, ArrowRight } from 'lucide-react';

export default function TodaysSpecial({ dishes, onQuickView }) {
  const specials = dishes.slice(0, 3);

  return (
    <section className="py-20 bg-ivory border-b border-borderLine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-gold mb-3">
              <Sparkles className="w-5 h-5 text-gold animate-pulse" />
              <span className="text-sm sm:text-base uppercase tracking-[0.2em] font-dmsans font-bold text-gold">
                Fresh Daily Creation
              </span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-6xl font-bold text-forest-dark tracking-tight">
              Today's Gourmet Specials
            </h2>
          </div>

          <div className="flex items-center space-x-2 text-xs font-dmsans text-gold-dark mt-4 md:mt-0">
            <Clock className="w-4 h-4" />
            <span>Updated Daily at 10:30 AM EST</span>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specials.map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-white border border-gold/30 hover:border-gold p-6 shadow-md hover:shadow-cardHover transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 rounded-2xl overflow-hidden mb-5">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-forest-dark/90 text-gold text-[10px] font-dmsans font-bold uppercase tracking-wider border border-gold/30">
                    Daily Special
                  </span>
                </div>

                <div className="flex items-center justify-between mb-2 font-dmsans">
                  <h3 className="font-cormorant text-2xl font-bold text-forest-dark group-hover:text-gold-dark transition-colors">
                    {dish.title}
                  </h3>
                  <span className="font-mono text-sm font-bold text-forest-dark">
                    AUD ${dish.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-darkText/80 font-inter text-xs sm:text-sm font-normal line-clamp-2 leading-relaxed mb-6">
                  {dish.description}
                </p>
              </div>

              <div className="pt-4 border-t border-borderLine flex items-center justify-between font-dmsans">
                <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">
                  Limited Quantity Batch
                </span>
                <button
                  onClick={() => onQuickView(dish)}
                  className="text-xs uppercase tracking-wider font-bold text-forest hover:text-gold flex items-center space-x-1 transition-colors"
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
