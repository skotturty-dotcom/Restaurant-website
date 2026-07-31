import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Heart, Flame, ShieldCheck, Calendar, Utensils } from 'lucide-react';

export default function QuickViewModal({ dish, onClose, onOpenReservation, wishlist, onToggleWishlist }) {
  if (!dish) return null;

  const isWishlisted = wishlist.includes(dish.id);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-forest-deep/80 backdrop-blur-md"
        />

        {/* MODAL CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gold/30 z-10 my-8"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-forest-dark/80 text-white hover:bg-gold hover:text-forest-dark transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* LEFT IMAGE CONTAINER */}
            <div className="relative h-64 md:h-full bg-forest-dark overflow-hidden min-h-[300px]">
              <img
                src={dish.image}
                alt={dish.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
              
              {dish.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold-gradient text-forest-dark text-[10px] font-bold uppercase tracking-wider shadow-md">
                  {dish.badge}
                </span>
              )}

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] uppercase tracking-widest text-gold block font-mono">
                  {dish.category}
                </span>
                <h3 className="font-playfair text-2xl font-bold">
                  {dish.title}
                </h3>
              </div>
            </div>

            {/* RIGHT DETAILS CONTAINER */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* RATING & PRICE */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gold text-sm">
                    <Star className="w-4 h-4 fill-gold" />
                    <span className="font-bold text-darkText">{dish.rating}</span>
                    <span className="text-mutedText text-xs">({dish.reviewsCount} reviews)</span>
                  </div>
                  <span className="font-mono text-2xl font-bold text-forest">
                    AUD ${dish.price.toFixed(2)}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-mutedText text-sm leading-relaxed font-light">
                  {dish.description}
                </p>

                {/* DIETARY TAGS */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-[11px] font-medium flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>100% Pure Veg</span>
                  </span>
                  {dish.isGlutenFree && (
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-medium">
                      Gluten-Free
                    </span>
                  )}
                  {dish.spiceLevel > 0 && (
                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-[11px] font-medium flex items-center space-x-1">
                      <Flame className="w-3.5 h-3.5" />
                      <span>Spice Level {dish.spiceLevel}/3</span>
                    </span>
                  )}
                </div>

                {/* INGREDIENTS LIST */}
                {dish.ingredients && (
                  <div className="pt-2">
                    <h4 className="text-xs uppercase tracking-wider text-forest font-bold mb-2">Key Ingredients:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {dish.ingredients.map((ing, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-ivory border border-borderLine text-[11px] text-mutedText">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ACTION BUTTONS */}
              <div className="pt-4 border-t border-borderLine flex items-center gap-3">
                <button
                  onClick={() => onToggleWishlist(dish.id)}
                  className="p-3 rounded-full border border-gold/40 text-forest hover:bg-gold/10 transition-colors"
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-terracotta text-terracotta' : 'text-forest'}`} />
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenReservation();
                  }}
                  className="flex-1 py-3.5 rounded-full bg-gold-gradient text-forest-dark font-bold text-xs uppercase tracking-widest hover:shadow-goldGlow transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Table to Enjoy</span>
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
