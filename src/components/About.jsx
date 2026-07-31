import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Utensils, CheckCircle2, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-forest-dark text-white relative overflow-hidden">
      
      {/* BACKGROUND ACCENT SHAPES */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* IMAGE COLLAGE COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gold/30">
              <img
                src="/images/restaurant_interior.png"
                alt="Anandam Dining Interior"
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* OVERLAY CHEF INSET CARD */}
            <div className="absolute -bottom-8 -right-4 sm:right-6 z-20 w-64 sm:w-72 p-4 rounded-2xl bg-forest-deep/95 border border-gold/40 shadow-cardHover backdrop-blur-md hidden sm:block">
              <div className="flex items-center space-x-4">
                <img
                  src="/images/chef_cooking.png"
                  alt="Executive Chef Senthil Kumar"
                  className="w-16 h-16 rounded-xl object-cover border border-gold/50"
                />
                <div>
                  <h4 className="font-playfair text-base font-bold text-white">Chef Senthil Kumar</h4>
                  <span className="text-xs text-gold font-dmsans uppercase tracking-wider block">Executive Master Chef</span>
                  <p className="text-[11px] text-gray-300 font-light mt-1">25+ Years Michelin Experience</p>
                </div>
              </div>
            </div>

            {/* EXPERIENCE BADGE */}
            <div className="absolute -top-6 -left-6 z-20 w-32 h-32 rounded-full bg-gold-gradient p-0.5 shadow-goldGlow flex items-center justify-center text-forest-dark font-bold text-center">
              <div className="w-full h-full rounded-full bg-forest-dark flex flex-col items-center justify-center p-2 text-white">
                <span className="text-2xl font-playfair font-bold text-gold">30+</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-300">Years Heritage</span>
              </div>
            </div>
          </motion.div>

          {/* TEXT CONTENT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 text-gold">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold">Our Legacy & Passion</span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-5xl font-bold leading-tight">
              Elevating South Indian <br />
              <span className="text-gold-gradient">Fine Dining in Australia</span>
            </h2>

            <p className="text-gray-300 font-light text-base leading-relaxed">
              Founded with the vision to redefine South Indian gastronomy on international shores, <strong className="text-white">ANANDAM</strong> seamlessly merges ancient culinary heritage with modern Australian minimalism.
            </p>

            <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
              Every dish is a testament to uncompromised authenticity. Our fermented batters rest for 16 hours in temperature-controlled rooms, our spices are roasted daily in copper vessels, and our produce is sourced from sustainable Victorian farms.
            </p>

            {/* KEY HIGHLIGHT BULLETS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">100% Organic Cold-Pressed Oils & Pure Ghee</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">Traditional Brass & Copper Plating</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">Hand-harvested Organic Sea Salt</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">Zero Artificial Flavours or Preservatives</span>
              </div>
            </div>

            {/* CHEF QUOTE */}
            <div className="p-6 rounded-2xl bg-forest/40 border-l-4 border-gold text-gray-200 italic font-cormorant text-lg leading-snug">
              "Fine dining is not merely about luxurious aesthetics; it is about awakening memories through pure, unadulterated flavours."
              <span className="block not-italic text-xs font-inter font-semibold uppercase tracking-widest text-gold mt-2">
                — Master Chef Senthil Kumar
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
