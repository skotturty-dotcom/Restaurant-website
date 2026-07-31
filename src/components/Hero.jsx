import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, Calendar, Utensils, MapPin, ChevronLeft, ChevronRight, Sparkles, ArrowRight, Eye } from 'lucide-react';

export default function Hero({ onOpenReservation, onQuickView, dishes }) {
  // HERO SLIDES DATA WITH DISH PHOTOGRAPHY
  const heroSlides = [
    {
      id: 'thali',
      badge: 'Royal Experience',
      title: 'Grand Royal South Indian Thali Feast',
      subtitle: '21-Course Banana Leaf Banquet',
      description: 'An authentic royal dining tradition featuring heirloom rice, sambar, rasam, kootu, poriyal, freshly churned payasam & artisanal chutneys.',
      price: '38.00',
      rating: '4.9',
      image: '/images/thali_meal.png',
      tag: 'Chef Signature'
    },
    {
      id: 'ghee_dosa',
      badge: 'Best Seller',
      title: 'Crispy Golden Ghee Roast Dosa',
      subtitle: 'Fermented Batter & Pure Desi Ghee',
      description: 'Paper-thin golden crepe slow-roasted in organic A2 desi ghee, served with coconut, tomato-onion & coriander mint chutneys.',
      price: '22.00',
      rating: '5.0',
      image: '/images/ghee_roast_dosa.png',
      tag: 'Customer Favourite'
    },
    {
      id: 'mysore_dosa',
      badge: 'Heritage Recipe',
      title: 'Heirloom Mysore Masala Dosa',
      subtitle: 'Spiced Red Garlic Chutney & Potato Fluff',
      description: 'Crispy fermented rice-lentil dosa smeared inside with fiery Mysore red garlic chutney, filled with potato podimas.',
      price: '24.00',
      rating: '4.9',
      image: '/images/mysore_masala_dosa.png',
      tag: 'Spicy Delight'
    },
    {
      id: 'idli_vada',
      badge: 'Traditional Tiffin',
      title: 'Steaming Rice Idli & Medu Vada Combo',
      subtitle: 'Parippu Vada & Steamed Rice Cakes',
      description: 'Pillow-soft fermented rice cakes paired with crispy lentil medu vada, served with drumstick sambar & fresh coconut chutney.',
      price: '19.50',
      rating: '4.8',
      image: '/images/idli_vada.png',
      tag: 'Morning Specialty'
    },
    {
      id: 'coffee',
      badge: 'Artisanal Beverage',
      title: 'Kumbakonam Degree Filter Coffee',
      subtitle: 'Frosted Brass Dabarah & Chicory Blend',
      description: 'Freshly brewed first-degree coffee extract blended with frothy boiled whole milk, served in traditional brassware.',
      price: '8.50',
      rating: '5.0',
      image: '/images/filter_coffee.png',
      tag: 'Iconic Brew'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // AUTO-PLAY SLIDESHOW EVERY 4.5 SECONDS
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentSlide = heroSlides[currentIndex];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-forest-dark">
      
      {/* SOLID LUXURY DARK FOREST BACKGROUND WITH AMBIENT LIGHTING */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-forest-deep via-forest-dark to-forest-deep" />

      {/* AMBIENT GLOW EFFECTS */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-terracotta/10 rounded-full filter blur-[120px] pointer-events-none" />

      {/* MAIN HERO CONTAINER (SIDE-BY-SIDE SPLIT LAYOUT WITH ANIMATED DISH CAROUSEL) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: BRAND STORY & DYNAMIC SLIDE DETAILS (7 COLS) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* TOP GOLD BADGE */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full border border-gold/40 bg-forest/40 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-gold shrink-0 animate-spin" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-dmsans font-bold">
                Atithi Devo Bhava — Guests are God
              </span>
            </motion.div>

            {/* MAIN HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white"
            >
              The Flavours of <br />
              <span className="text-gold-gradient italic font-playfair">South India</span> <br />
              <span className="text-2xl sm:text-4xl text-gray-200 font-normal">in Australia</span>
            </motion.h1>

            {/* DYNAMIC ANIMATED DISH DETAILS TEXT */}
            <div className="h-32 sm:h-28 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-2 absolute inset-0"
                >
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-0.5 rounded-full bg-gold/20 text-gold text-xs font-dmsans font-bold uppercase tracking-wider border border-gold/30">
                      {currentSlide.badge}
                    </span>
                    <span className="text-xs text-gray-300 font-mono">AUD ${currentSlide.price}</span>
                  </div>

                  <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {currentSlide.title}
                  </h3>

                  <p className="text-gray-300 font-inter font-light text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {currentSlide.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ACTION BUTTONS ROW */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
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

            {/* STATS BADGES */}
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

          </div>

          {/* RIGHT COLUMN: ANIMATED DISH SHOWCASE CAROUSEL (5 COLS) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* PREV & NEXT FLOATING NAV BUTTONS */}
            <button
              onClick={handlePrev}
              className="absolute -left-5 z-30 p-3.5 rounded-full bg-forest-dark/90 hover:bg-gold text-gold hover:text-forest-dark border border-gold/40 transition-all shadow-2xl hover:scale-110"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute -right-5 z-30 p-3.5 rounded-full bg-forest-dark/90 hover:bg-gold text-gold hover:text-forest-dark border border-gold/40 transition-all shadow-2xl hover:scale-110"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* FEATURED FLOATING DISH DISPLAY CARD */}
            <div className="relative w-full aspect-square max-w-[420px] rounded-full flex items-center justify-center bg-gradient-to-br from-gold/20 via-forest-deep to-forest-dark border-2 border-gold/40 shadow-cardHover overflow-hidden p-6 group">
              
              {/* ANIMATED ROTATING DISH IMAGE */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotate: 8 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              </AnimatePresence>

              {/* DISH TAG BADGE OVERLAY */}
              <div className="absolute top-6 right-6 px-3.5 py-1 rounded-full bg-forest-dark/90 backdrop-blur-md border border-gold/40 text-gold text-[10px] font-mono uppercase tracking-widest shadow-xl">
                {currentSlide.tag}
              </div>
            </div>

            {/* SLIDE INDICATOR DOTS */}
            <div className="flex items-center space-x-2 mt-6">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-gold-gradient shadow-goldGlow'
                      : 'w-2.5 bg-forest-light/60 hover:bg-gold/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
