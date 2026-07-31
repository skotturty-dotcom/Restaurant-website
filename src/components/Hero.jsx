import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, Calendar, Utensils, MapPin, ChevronDown, Maximize2, X, Sparkles, ArrowRight, Award } from 'lucide-react';

export default function Hero({ onOpenReservation }) {
  const [showFullMural, setShowFullMural] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-forest-dark">
      
      {/* SOLID LUXURY DARK FOREST BACKGROUND WITH AMBIENT GOLD LIGHTING */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-forest-deep via-forest-dark to-forest-deep" />

      {/* AMBIENT GLOW EFFECTS */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-terracotta/10 rounded-full filter blur-[120px] pointer-events-none" />

      {/* MAIN HERO CONTAINER (SIDE-BY-SIDE SPLIT LAYOUT) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: HEADLINE, BADGES & CTAs (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* TOP GOLD BADGE */}
            <div className="inline-flex items-center space-x-2.5 px-4 sm:px-5 py-2 rounded-full border border-gold/40 bg-forest/40 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold shrink-0 animate-spin" />
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-dmsans font-bold">
                Atithi Devo Bhava — Guests are God
              </span>
            </div>

            {/* HEADLINE */}
            <h1 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white">
              The Flavours of <br />
              <span className="text-gold-gradient italic font-playfair">South India</span> <br />
              <span className="text-2xl sm:text-4xl text-gray-200 font-normal">in Australia</span>
            </h1>

            {/* MURAL QUOTE SUBHEADLINE */}
            <p className="text-gray-300 font-inter font-light text-sm sm:text-base leading-relaxed max-w-xl">
              "From the rich traditions of South India to the vibrant tables of Australia—bringing you authentic flavours, warm hospitality, and memories to cherish."
            </p>

            {/* MURAL PHRASE PILLS */}
            <div className="flex flex-wrap gap-2 text-[11px] text-gold-light/90 font-mono">
              <span className="px-3 py-1 rounded-full bg-forest-deep border border-gold/30">
                ✨ Spices from our lands, Flavours from our hearts
              </span>
              <span className="px-3 py-1 rounded-full bg-forest-deep border border-gold/30">
                🌿 Nammal — Together We Celebrate
              </span>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-gradient text-forest-dark font-dmsans font-bold text-xs uppercase tracking-widest hover:shadow-goldGlow transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 shadow-2xl"
              >
                <Calendar className="w-4 h-4 text-forest-dark" />
                <span>Book A Table</span>
              </button>

              <a
                href="#menu"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-forest/40 border border-gold/40 text-gold hover:bg-gold hover:text-forest-dark font-dmsans font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* STATS BADGES ROW */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gold/20 max-w-xl">
              <div className="text-left font-dmsans">
                <span className="text-white font-bold text-lg sm:text-xl block">4.9 ★</span>
                <span className="text-[11px] text-gray-400 font-inter">480+ Google Reviews</span>
              </div>
              <div className="text-left font-dmsans">
                <span className="text-white font-bold text-lg sm:text-xl block">Open Daily</span>
                <span className="text-[11px] text-gray-400 font-inter">11:30 AM – 11:00 PM</span>
              </div>
              <div className="text-left font-dmsans">
                <span className="text-white font-bold text-lg sm:text-xl block">CBD Locations</span>
                <span className="text-[11px] text-gray-400 font-inter">Melbourne & Sydney</span>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: MURAL IMAGE FEATURE BOX (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* FEATURED MURAL BOX CARD */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-gold/40 shadow-cardHover group bg-forest-deep">
              <img
                src="/images/hero_mural.png"
                alt="South Indian Fine Dining Entrance Mural"
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-100 contrast-[1.02]"
              />

              {/* OVERLAY CAPTION BAR */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-forest-deep via-forest-deep/80 to-transparent flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
                    Authentic South Indian Heritage
                  </span>
                  <h4 className="font-cormorant text-xl font-bold text-white leading-tight">
                    "Made with Love, Shared with Joy"
                  </h4>
                </div>

                <button
                  onClick={() => setShowFullMural(true)}
                  className="p-3 rounded-full bg-gold/10 hover:bg-gold text-gold hover:text-forest-dark border border-gold/40 transition-colors shadow-lg shrink-0"
                  title="Expand Full Mural Image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* DECORATIVE FLOATING BADGE */}
            <div className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-forest-dark/95 border border-gold/40 shadow-2xl backdrop-blur-md hidden sm:flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient text-forest-dark flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-left font-dmsans">
                <span className="text-white font-bold text-sm block">Heritage Wall Art</span>
                <span className="text-gold text-[10px] uppercase tracking-wider font-mono">Handcrafted Wall Mural</span>
              </div>
            </div>
          </motion.div>

        </div>
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
