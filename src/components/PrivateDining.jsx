import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wine, Shield, Calendar } from 'lucide-react';

export default function PrivateDining({ onOpenReservation }) {
  return (
    <section className="py-24 bg-forest-deep text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block">
              Exclusive Sanctuary
            </span>
            <h2 className="font-playfair text-3xl sm:text-5xl font-bold leading-tight">
              The Sovereign <br />
              <span className="text-gold-gradient">Private Dining Suite</span>
            </h2>

            <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">
              Designed for high-profile guests, VIP family gatherings, and executive corporate meetings. Features acoustic insulation, custom brass chandelier lighting, and a private sommelier service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-forest-dark border border-gold/20 text-center">
                <Users className="w-6 h-6 text-gold mx-auto mb-1" />
                <span className="text-white font-bold text-sm block">Up to 24 Guests</span>
                <span className="text-[10px] text-gray-400">Exclusive Seating</span>
              </div>

              <div className="p-4 rounded-2xl bg-forest-dark border border-gold/20 text-center">
                <Wine className="w-6 h-6 text-gold mx-auto mb-1" />
                <span className="text-white font-bold text-sm block">Organic Wine Pairings</span>
                <span className="text-[10px] text-gray-400">Curated Cellar</span>
              </div>

              <div className="p-4 rounded-2xl bg-forest-dark border border-gold/20 text-center">
                <Shield className="w-6 h-6 text-gold mx-auto mb-1" />
                <span className="text-white font-bold text-sm block">Private Concierge</span>
                <span className="text-[10px] text-gray-400">Dedicated Service</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenReservation}
                className="px-8 py-4 rounded-full bg-gold-gradient text-forest-dark font-bold text-xs uppercase tracking-widest hover:shadow-goldGlow transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Private Suite</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl overflow-hidden border border-gold/40 shadow-cardHover">
              <img
                src="/images/restaurant_interior.png"
                alt="Sovereign Private Dining Suite"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
