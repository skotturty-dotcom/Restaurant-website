import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, Calendar, Utensils, MapPin, ChevronDown, Maximize2, X, Sparkles, ArrowRight, Award, Flame } from 'lucide-react';

export default function Hero({ onOpenReservation }) {
  const [showFullMural, setShowFullMural] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-forest-dark">
      
      {/* CRISP & WARM HERO MURAL BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero_mural.png"
          alt="The Flavours of South India Entrance Mural"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.04] transition-transform duration-1000 transform scale-105"
        />
        
        {/* REFINED ARCHITECTURAL OVERLAYS FOR MAXIMUM CLARITY & LUXURY AMBIENCE */}
        <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-forest-dark/95 via-forest-dark/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-forest-dark/30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-forest-dark via-forest-dark/80 to-transparent pointer-events-none" />
      </div>

      {/* AMBIENT GLOW EFFECTS */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-terracotta/10 rounded-full filter blur-[120px] pointer-events-none" />

      {/* TOP RIGHT MURAL LIGHTBOX BUTTON */}
      <button
        onClick={() => setShowFullMural(true)}
        className="absolute top-28 right-6 z-20 px-4 py-2 rounded-full bg-forest-dark/80 backdrop-blur-md border border-gold/40 text-gold text-xs font-dmsans font-semibold uppercase tracking-wider hover:bg-gold hover:text-forest-dark transition-all duration-300 flex items-center space-x-2 shadow-2xl"
        title="View Full Resolution Entrance Mural"
      >
        <Maximize2 className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">View Mural Artwork</span>
      </button>

      {/* MAIN HERO CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white my-auto flex flex-col items-center">
        
        {/* 1. ELEGANT GOLD BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full border border-gold/40 bg-forest-dark/85 backdrop-blur-md mb-6 shadow-2xl"
        >
          <Sparkles className="w-4 h-4 text-gold animate-spin" />
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-dmsans font-bold">
            Atithi Devo Bhava — Guests are God
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold/50 hidden sm:inline" />
          <span className="text-[11px] uppercase tracking-widest text-gray-200 hidden sm:inline font-mono">
            Australia’s Premier South Indian Fine Dining
          </span>
        </motion.div>

        {/* 2. GRAND LUXURY HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cormorant text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.08] text-white max-w-4xl mx-auto mb-6 drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]"
        >
          The Flavours of <br />
          <span className="text-gold-gradient italic font-playfair">South India</span>
        </motion.h1>

        {/* 3. CLEAN SUBHEADLINE QUOTE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-gray-200 font-inter font-light leading-relaxed mb-8 bg-forest-dark/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-gold/20 shadow-2xl"
        >
          "From the rich culinary traditions of South India to the vibrant dining tables of Australia—crafted with love, shared with joy."
        </motion.p>

        {/* 4. CALL TO ACTION BUTTONS */}
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
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-forest-dark/90 backdrop-blur-md border border-gold/50 text-gold hover:bg-gold hover:text-forest-dark font-dmsans font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl group"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* 5. FLOATING GLASS STATS & LOCATION BAR */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mx-auto"
        >
          {/* RATING BADGE */}
          <div className="p-4 rounded-2xl bg-forest-dark/85 backdrop-blur-md border border-gold/30 flex items-center space-x-4 shadow-2xl hover:border-gold/60 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
              <Star className="w-6 h-6 fill-gold" />
            </div>
            <div className="text-left font-dmsans">
              <div className="flex items-center space-x-1">
                <span className="text-white font-bold text-lg">4.9 / 5.0</span>
                <span className="text-gold text-xs">★</span>
              </div>
              <p className="text-xs text-gray-300 font-light font-inter">480+ Google Reviews</p>
            </div>
          </div>

          {/* OPENING HOURS BADGE */}
          <div className="p-4 rounded-2xl bg-forest-dark/85 backdrop-blur-md border border-gold/30 flex items-center space-x-4 shadow-2xl hover:border-gold/60 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-left font-dmsans">
              <span className="text-white font-bold text-sm block">Open Daily</span>
              <p className="text-xs text-gray-300 font-light font-inter">11:30 AM – 11:00 PM EST</p>
            </div>
          </div>

          {/* LOCATION BADGE */}
          <div className="p-4 rounded-2xl bg-forest-dark/85 backdrop-blur-md border border-gold/30 flex items-center space-x-4 shadow-2xl hover:border-gold/60 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-left font-dmsans">
              <span className="text-white font-bold text-sm block">Melbourne & Sydney</span>
              <p className="text-xs text-gray-300 font-light font-inter">128 Collins St, CBD</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* SMOOTH SCROLL DOWN INDICATOR */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <a href="#highlights" className="text-gold/80 hover:text-gold transition-colors flex flex-col items-center space-y-1 font-dmsans">
          <span className="text-[10px] uppercase tracking-widest font-mono">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
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
