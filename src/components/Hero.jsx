import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, Calendar, Utensils, MapPin, ChevronDown, Maximize2, X, Sparkles, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenReservation }) {
  const [showFullMural, setShowFullMural] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-ivory">
      
      {/* FULL BRIGHT & WARM HERO MURAL BACKGROUND IMAGE (NO DARK FILTERS) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero_mural.png"
          alt="The Flavours of South India Entrance Mural"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-[1.02] transition-transform duration-1000 transform scale-105"
        />
        
        {/* LIGHT, CRYSTAL-CLEAR GRADIENT OVERLAYS - WARMLY ILLUMINATED AMBIENCE */}
        {/* Soft top gradient just for navbar text readability */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-forest-dark/70 via-forest-dark/30 to-transparent pointer-events-none" />
        
        {/* Delicate ambient warm radial tint - zero dark mud */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/20 via-transparent to-ivory/20 pointer-events-none" />
        
        {/* Subtle bottom ivory gradient transitioning softly into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-ivory via-ivory/70 to-transparent pointer-events-none" />
      </div>

      {/* AMBIENT WARM SUNLIGHT ACCENTS */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/20 rounded-full filter blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-terracotta/15 rounded-full filter blur-[100px] pointer-events-none" />

      {/* TOP RIGHT LIGHTBOX BUTTON */}
      <button
        onClick={() => setShowFullMural(true)}
        className="absolute top-28 right-6 z-20 px-4.5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-gold/50 text-forest-dark text-xs font-dmsans font-bold uppercase tracking-wider hover:bg-gold-gradient hover:border-gold transition-all duration-300 flex items-center space-x-2 shadow-cardHover"
        title="View Full Resolution Entrance Mural"
      >
        <Maximize2 className="w-3.5 h-3.5 text-gold-dark" />
        <span className="hidden sm:inline">View Mural Artwork</span>
      </button>

      {/* MAIN HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto flex flex-col items-center">
        
        {/* 1. ELEGANT BRIGHT GOLD BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-gold/60 bg-white/90 backdrop-blur-md mb-6 shadow-cardHover"
        >
          <Sparkles className="w-4 h-4 text-gold-dark animate-spin" />
          <span className="text-xs uppercase tracking-[0.25em] text-forest-dark font-dmsans font-bold">
            Atithi Devo Bhava — Guests are God
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold hidden sm:inline" />
          <span className="text-[11px] uppercase tracking-widest text-gold-dark hidden sm:inline font-mono font-bold">
            Australia’s Premier South Indian Fine Dining
          </span>
        </motion.div>

        {/* 2. GRAND VIBRANT HEADLINE WITH SHARP CONTRAST */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cormorant text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.08] text-forest-dark max-w-4xl mx-auto mb-6 drop-shadow-[0_4px_15px_rgba(255,255,255,0.8)]"
        >
          The Flavours of <br />
          <span className="text-gold-gradient italic font-playfair drop-shadow-md">South India</span>
        </motion.h1>

        {/* 3. BRIGHT & LUXURIOUS WHITE GLASS SUBHEADLINE CARD */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-forest-dark font-inter font-medium leading-relaxed mb-8 bg-white/90 backdrop-blur-md px-6 py-5 rounded-3xl border border-gold/40 shadow-cardHover"
        >
          "From the rich culinary traditions of South India to the vibrant dining tables of Australia—crafted with love, shared with joy."
        </motion.p>

        {/* 4. HIGH-CONTRAST ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 w-full sm:w-auto"
        >
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gold-gradient text-forest-dark font-dmsans font-bold text-xs uppercase tracking-widest hover:shadow-goldGlow transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 shadow-2xl"
          >
            <Calendar className="w-4 h-4 text-forest-dark" />
            <span>Book A Table</span>
          </button>

          <a
            href="#menu"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-white/95 backdrop-blur-md border border-gold text-forest-dark hover:bg-forest hover:text-white font-dmsans font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-3 shadow-cardHover group"
          >
            <Utensils className="w-4 h-4 text-gold-dark group-hover:text-gold" />
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4 text-gold-dark group-hover:text-gold group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* 5. BRIGHT LUXURY WHITE GLASS STATS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mx-auto"
        >
          {/* RATING BADGE */}
          <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gold/40 flex items-center space-x-4 shadow-cardHover hover:border-gold transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold-dark shrink-0">
              <Star className="w-6 h-6 fill-gold-dark text-gold-dark" />
            </div>
            <div className="text-left font-dmsans">
              <div className="flex items-center space-x-1">
                <span className="text-forest-dark font-bold text-lg">4.9 / 5.0</span>
                <span className="text-gold-dark text-xs">★</span>
              </div>
              <p className="text-xs text-mutedText font-light font-inter">480+ Google Reviews</p>
            </div>
          </div>

          {/* OPENING HOURS BADGE */}
          <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gold/40 flex items-center space-x-4 shadow-cardHover hover:border-gold transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold-dark shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-left font-dmsans">
              <span className="text-forest-dark font-bold text-sm block">Open Daily</span>
              <p className="text-xs text-mutedText font-light font-inter">11:30 AM – 11:00 PM EST</p>
            </div>
          </div>

          {/* LOCATION BADGE */}
          <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gold/40 flex items-center space-x-4 shadow-cardHover hover:border-gold transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold-dark shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-left font-dmsans">
              <span className="text-forest-dark font-bold text-sm block">Melbourne & Sydney</span>
              <p className="text-xs text-mutedText font-light font-inter">128 Collins St, CBD</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* SMOOTH SCROLL DOWN INDICATOR */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <a href="#highlights" className="text-forest-dark hover:text-gold-dark transition-colors flex flex-col items-center space-y-1 font-dmsans">
          <span className="text-[10px] uppercase tracking-widest font-mono font-bold">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-gold-dark" />
        </a>
      </div>

      {/* FULL RESOLUTION MURAL MODAL LIGHTBOX */}
      <AnimatePresence>
        {showFullMural && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-deep/95 backdrop-blur-xl">
            <button
              onClick={() => setShowFullMural(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-forest-dark border border-gold/40 text-gold hover:bg-gold hover:text-forest-dark transition-colors z-30"
              aria-label="Close Mural Modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-5xl w-full bg-forest-dark rounded-3xl overflow-hidden border border-gold/40 shadow-2xl relative font-dmsans">
              <img
                src="/images/hero_mural.png"
                alt="South Indian Fine Dining Mural Wall"
                className="w-full max-h-[80vh] object-contain bg-black"
              />
              <div className="p-6 bg-forest-dark border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold font-mono font-bold block">
                    Authentic South Indian Heritage Wall Artwork
                  </span>
                  <h3 className="font-cormorant text-2xl font-bold text-white">
                    "THE FLAVOURS OF SOUTH INDIA — MADE WITH LOVE, SHARED WITH JOY"
                  </h3>
                </div>

                <button
                  onClick={() => setShowFullMural(false)}
                  className="px-6 py-2.5 rounded-full bg-gold-gradient text-forest-dark font-bold text-xs uppercase tracking-wider shrink-0"
                >
                  Back to Website
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
