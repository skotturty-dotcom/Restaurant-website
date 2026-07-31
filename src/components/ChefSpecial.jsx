import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Star, Flame, Utensils, Calendar } from 'lucide-react';

export default function ChefSpecial({ onOpenReservation }) {
  return (
    <section className="py-24 bg-forest-dark text-white relative overflow-hidden">
      
      {/* GLOW DECORATIONS */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-terracotta/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CHEF IMAGE & BADGE (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-3xl overflow-hidden border border-gold/40 shadow-cardHover relative">
              <img
                src="/images/chef_cooking.png"
                alt="Executive Master Chef Senthil Kumar"
                className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-gold font-mono text-xs uppercase tracking-widest block">Executive Culinary Director</span>
                <h3 className="font-playfair text-3xl font-bold text-white">Chef Senthil Kumar</h3>
                <p className="text-gray-300 text-xs font-light mt-1">Former Executive Chef at Oberoi & Taj Fine Dining Group</p>
              </div>
            </div>

            {/* FLOATING EXPERTISE BADGE */}
            <div className="absolute -top-6 -right-6 p-4 rounded-2xl bg-forest-deep border border-gold/40 shadow-2xl backdrop-blur-md hidden sm:flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient text-forest-dark flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-white font-bold text-sm block">Michelin Connoisseur</span>
                <span className="text-gold text-[10px] uppercase tracking-wider">Master of Fermentation</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CHEF PHILOSOPHY & SPECIAL DISHES (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block mb-2">
                Curated Culinary Vision
              </span>
              <h2 className="font-playfair text-3xl sm:text-5xl font-bold leading-tight">
                The Master Chef's <br />
                <span className="text-gold-gradient">Degustation Philosophy</span>
              </h2>
            </div>

            <p className="text-gray-300 font-light text-base leading-relaxed">
              "In South Indian culinary art, the secret lies in balance—balancing raw spice with cooling yoghurt, fermented tang with pure cow ghee, and crisp textures with velvety gravies."
            </p>

            {/* HIGHLIGHTED SPECIALTIES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-5 rounded-2xl bg-forest/40 border border-gold/20 hover:border-gold/50 transition-colors">
                <span className="text-gold font-mono text-xs uppercase block mb-1">Signature Star</span>
                <h4 className="font-playfair text-lg font-bold text-white mb-1">Grand Royal Banana Leaf Feast</h4>
                <p className="text-gray-400 text-xs font-light">14 hand-curated dishes served on organic banana leaves.</p>
              </div>

              <div className="p-5 rounded-2xl bg-forest/40 border border-gold/20 hover:border-gold/50 transition-colors">
                <span className="text-gold font-mono text-xs uppercase block mb-1">Artisanal Brew</span>
                <h4 className="font-playfair text-lg font-bold text-white mb-1">Degree Brass Filter Coffee</h4>
                <p className="text-gray-400 text-xs font-light">Custom 80:20 chicory blend roasted in-house daily.</p>
              </div>

              <div className="p-5 rounded-2xl bg-forest/40 border border-gold/20 hover:border-gold/50 transition-colors">
                <span className="text-gold font-mono text-xs uppercase block mb-1">Spiced Delicacy</span>
                <h4 className="font-playfair text-lg font-bold text-white mb-1">Chettinad Wild Mushroom</h4>
                <p className="text-gray-400 text-xs font-light">Peppercorn and roasted coconut reduction gravy.</p>
              </div>

              <div className="p-5 rounded-2xl bg-forest/40 border border-gold/20 hover:border-gold/50 transition-colors">
                <span className="text-gold font-mono text-xs uppercase block mb-1">Exquisite Sweet</span>
                <h4 className="font-playfair text-lg font-bold text-white mb-1">Tender Coconut Payasam</h4>
                <p className="text-gray-400 text-xs font-light">Chilled elaneer pulp with cardamom cream.</p>
              </div>

            </div>

            <div className="pt-4 flex items-center space-x-4">
              <button
                onClick={onOpenReservation}
                className="px-8 py-4 rounded-full bg-gold-gradient text-forest-dark font-bold text-xs uppercase tracking-widest hover:shadow-goldGlow transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Chef's Table</span>
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
