import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Sparkles } from 'lucide-react';
import { offersData } from '../data/offersData';

export default function SpecialOffers({ onOpenReservation }) {
  return (
    <section className="py-24 bg-ivory border-b border-borderLine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION TITLE & SUBHEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-gold mb-3">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm sm:text-base uppercase tracking-[0.2em] font-dmsans font-bold text-gold">
              Curated Dining Promotions
            </span>
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-forest-dark tracking-tight mb-4">
            Special Dining Experiences
          </h2>
          <div className="w-20 h-0.5 bg-gold-gradient mx-auto" />
        </div>

        {/* CARDS GRID WITH BIGGER BOLDER FONTS AND RICH GREEN BORDERS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offersData.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-9 rounded-3xl bg-white border-2 border-forest/40 hover:border-forest shadow-md hover:shadow-cardHover transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* TOP METALLIC GREEN & GOLD ACCENT LINE */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-forest via-gold to-forest-dark opacity-90" />

              <div>
                {/* OFFER BADGE ROW */}
                <div className="flex items-center justify-between mb-5 font-dmsans">
                  <span className="px-4 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider border border-forest/20">
                    {offer.type}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-terracotta bg-terracotta/10 px-3.5 py-1.5 rounded-full">
                    {offer.discount}
                  </span>
                </div>

                {/* CARD TITLE - BIGGER & BOLDER */}
                <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-forest-dark group-hover:text-gold-dark transition-colors leading-tight mb-3">
                  {offer.title}
                </h3>

                {/* TIMING SUBHEADING - LARGER FONT */}
                <div className="flex items-center space-x-2 text-gold-dark text-xs sm:text-sm font-semibold mb-4 font-dmsans">
                  <Clock className="w-4 h-4 shrink-0 text-gold-dark" />
                  <span>{offer.validDays}</span>
                </div>

                {/* DESCRIPTION - LARGER FONT */}
                <p className="text-darkText/90 text-sm sm:text-base font-inter font-normal leading-relaxed mb-8">
                  {offer.description}
                </p>
              </div>

              {/* FOOTER */}
              <div className="pt-6 border-t border-forest/15 flex items-center justify-between font-dmsans">
                <span className="text-xs sm:text-sm uppercase tracking-wider text-gray-600 font-mono">
                  CODE: <strong className="text-forest-dark font-bold">{offer.code}</strong>
                </span>
                <button
                  onClick={onOpenReservation}
                  className="px-6 py-3 rounded-full bg-forest text-white hover:bg-gold-gradient hover:text-forest-dark text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
                >
                  Book Offer
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
