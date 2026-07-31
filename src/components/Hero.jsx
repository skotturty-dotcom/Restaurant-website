import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, Calendar, Utensils, MapPin, ChevronDown, Maximize2, X, Sparkles } from 'lucide-react';

export default function Hero({ onOpenReservation }) {
  const [showFullMural, setShowFullMural] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-forest-dark">
      
      {/* CLEAR & BRIGHT HERO BACKGROUND MURAL IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero_mural.png"
          alt="The Flavours of South India Mural Wall"
          className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] transition-all duration-700"
        />
        
        {/* LIGHT, SUBTLE GRADIENT OVERLAYS */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-forest-dark/90 via-forest-dark/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-forest-dark/25 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-forest-dark via-forest-dark/70 to-transparent pointer-events-none" />
      </div>

      {/* VIEW FULL MURAL BUTTON */}
      <button
        onClick={() => setShowFullMural(true)}
        className="absolute top-28 right-6 z-20 px-4 py-2 rounded-full bg-forest-dark/80 backdrop-blur-md border border-gold/40 text-gold text-xs font-semibold uppercase tracking-wider hover:bg-gold hover:text-forest-dark transition-all duration-300 flex items-center space-x-2 shadow-2xl"
        title="View High Resolution Entrance Mural"
      >
        <Maximize2 className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">View Mural Artwork</span>
      </button>

      {/* HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white my-auto">
        
        {/* MURAL PHRASE BADGE 1: ATITHI DEVO BHAVA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full border border-gold/50 bg-forest-dark/80 backdrop-blur-md mb-4 shadow-2xl"
        >
          <Sparkles className="w-4 h-4 text-gold shrink-0 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold font-dmsans">
            Atithi Devo Bhava — Guests are God
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold/50 hidden sm:inline" />
          <span className="text-[11px] uppercase tracking-widest text-gray-200 hidden sm:inline font-mono">
            Made Fresh Every Day
          </span>
        </motion.div>

        {/* HEADLINE INTEGRATING MURAL TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="font-cormorant text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            The Flavours of <br />
            <span className="text-gold-gradient italic font-playfair text-5xl sm:text-7xl md:text-8xl">
              South India
            </span>
          </h1>

          <p className="text-gold uppercase tracking-[0.3em] text-xs sm:text-sm font-bold mt-2 drop-shadow-md font-dmsans">
            Made with Love, Shared with Joy
          </p>
        </motion.div>

        {/* SUBHEADLINE MATCHING THE EXACT MURAL WALL QUOTE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-100 font-inter font-light leading-relaxed bg-forest-dark/70 backdrop-blur-md p-5 sm:p-6 rounded-3xl border border-gold/30 shadow-2xl drop-shadow-lg">
            "From the rich traditions of South India to the vibrant tables of Australia, we bring you authentic flavours, warm hospitality, and memories to cherish."
          </p>
        </motion.div>

        {/* MURAL PHRASES PILLS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-8 text-[11px] text-gray-200 uppercase tracking-widest font-mono"
        >
          <span className="px-3 py-1 rounded-full bg-forest-dark/80 border border-gold/30 backdrop-blur-sm">
            ✨ Spices from our lands, Flavours from our hearts
          </span>
          <span className="px-3 py-1 rounded-full bg-forest-dark/80 border border-gold/30 backdrop-blur-sm">
            🌿 Nammal — Together We Celebrate
          </span>
          <span className="px-3 py-1 rounded-full bg-forest-dark/80 border border-gold/30 backdrop-blur-sm">
            ☀️ Good Food, Good Mood, Great Times
          </span>
        </motion.div>

        {/* ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-gradient text-forest-dark font-dmsans font-bold text-xs uppercase tracking-widest hover:shadow-goldGlow transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 shadow-2xl"
          >
            <Calendar className="w-4 h-4 text-forest-dark" />
            <span>Book A Table</span>
          </button>

          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-forest-dark/90 backdrop-blur-md border border-gold/60 text-gold hover:bg-gold hover:text-forest-dark font-dmsans font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore Menu</span>
          </a>
        </motion.div>

        {/* FLOATING BADGES ROW */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {/* RATING BADGE */}
          <div className="p-4 rounded-2xl bg-forest-dark/85 backdrop-blur-md border border-gold/30 flex items-center space-x-4 shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Star className="w-6 h-6 fill-gold" />
            </div>
            <div className="text-left font-dmsans">
              <div className="flex items-center space-x-1">
                <span className="text-white font-bold text-lg">4.9 / 5.0</span>
                <span className="text-gold text-xs">★</span>
              </div>
              <p className="text-xs text-gray-300 font-light font-inter">480+ Google Fine Dining Reviews</p>
            </div>
          </div>

          {/* OPENING HOURS BADGE */}
          <div className="p-4 rounded-2xl bg-forest-dark/85 backdrop-blur-md border border-gold/30 flex items-center space-x-4 shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-left font-dmsans">
              <span className="text-white font-bold text-sm block">Open Daily</span>
              <p className="text-xs text-gray-300 font-light font-inter">11:30 AM – 11:00 PM EST</p>
            </div>
          </div>

          {/* LOCATION BADGE */}
          <div className="p-4 rounded-2xl bg-forest-dark/85 backdrop-blur-md border border-gold/30 flex items-center space-x-4 shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-left font-dmsans">
              <span className="text-white font-bold text-sm block">Melbourne & Sydney</span>
              <p className="text-xs text-gray-300 font-light font-inter">128 Collins St, CBD</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SMOOTH SCROLL INDICATOR */}
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
