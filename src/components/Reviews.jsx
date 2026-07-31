import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Quote, ThumbsUp } from 'lucide-react';
import { reviewsData } from '../data/reviewsData';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-ivory relative overflow-hidden border-b border-borderLine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TITLE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block mb-2">
            Patron Testimonials
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-forest-dark mb-4">
            Celebrated by Fine Diners
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-mutedText font-light text-sm sm:text-base">
            Read verified Google Dining reviews from Australian locals, food critics, and corporate guests.
          </p>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsData.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-borderLine hover:border-gold/50 shadow-sm hover:shadow-cardHover transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                {/* RATING & VERIFIED BADGE */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-gold">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold" />
                    ))}
                  </div>

                  <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-semibold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Guest</span>
                  </span>
                </div>

                {/* DISH VISITED TAG */}
                <span className="text-xs font-mono font-medium text-gold-dark block mb-3">
                  Sampled: {rev.dishVisited}
                </span>

                {/* REVIEW TEXT */}
                <p className="text-darkText font-light text-sm sm:text-base leading-relaxed italic mb-6">
                  "{rev.review}"
                </p>
              </div>

              {/* AUTHOR FOOTER */}
              <div className="pt-4 border-t border-borderLine flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-11 h-11 rounded-full object-cover border border-gold/40"
                  />
                  <div>
                    <h4 className="font-playfair text-base font-bold text-forest-dark">{rev.name}</h4>
                    <span className="text-xs text-mutedText font-light block">{rev.location}</span>
                  </div>
                </div>

                <span className="text-xs text-gray-400 font-light">{rev.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GOOGLE RATING SUMMARY FOOTER */}
        <div className="mt-12 p-6 rounded-2xl bg-forest-dark text-white max-w-xl mx-auto flex items-center justify-between shadow-2xl border border-gold/30">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-gold-gradient text-forest-dark flex items-center justify-center font-bold text-xl">
              G
            </div>
            <div>
              <div className="flex items-center space-x-1 text-gold text-sm">
                <Star className="w-4 h-4 fill-gold" />
                <span className="font-bold text-white">4.9 out of 5</span>
              </div>
              <p className="text-xs text-gray-400 font-light">Based on 480+ Google Reviews in Victoria & NSW</p>
            </div>
          </div>
          <a
            href="#reservations"
            className="px-4 py-2 rounded-full bg-gold/10 hover:bg-gold text-gold hover:text-forest-dark text-xs uppercase font-bold tracking-wider transition-colors"
          >
            Experience Anandam
          </a>
        </div>

      </div>
    </section>
  );
}
