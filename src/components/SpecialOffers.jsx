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
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-dmsans font-semibold">
              Curated Dining Promotions
            </span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-forest-dark tracking-tight mb-4">
            Special Dining Experiences
          </h2>
          <div className="w-20 h-0.5 bg-gold-gradient mx-auto" />
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offersData.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-gold/30 hover:border-gold shadow-md hover:shadow-cardHover transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient opacity-90" />

              <div>
                {/* OFFER BADGE ROW */}
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3.5 py-1 rounded-full bg-forest/5 text-forest text-[11px] font-dmsans font-bold uppercase tracking-wider border border-forest/15">
                    {offer.type}
                  </span>
                  <span className="text-xs font-dmsans font-bold text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
                    {offer.discount}
                  </span>
                </div>

                {/* CARD TITLE */}
                <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-forest-dark group-hover:text-gold-dark transition-colors leading-tight mb-3">
                  {offer.title}
                </h3>

                {/* TIMING SUBHEADING */}
                <div className="flex items-center space-x-2 text-gold-dark text-xs font-dmsans font-medium mb-4">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{offer.validDays}</span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-darkText/80 text-xs sm:text-sm font-inter font-normal leading-relaxed mb-6">
                  {offer.description}
                </p>
              </div>

              {/* FOOTER */}
              <div className="pt-4 border-t border-borderLine flex items-center justify-between font-dmsans">
                <span className="text-[11px] uppercase tracking-widest text-gray-500 font-mono">
                  CODE: <strong className="text-forest-dark">{offer.code}</strong>
                </span>
                <button
                  onClick={onOpenReservation}
                  className="px-5 py-2.5 rounded-full bg-forest text-white hover:bg-gold-gradient hover:text-forest-dark text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
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
