import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, Star, Sparkles } from 'lucide-react';

export default function SignatureDishes({ dishes, onQuickView, wishlist, onToggleWishlist, onOpenReservation }) {
  const signatureList = dishes.filter(d => d.badge === 'Chef Special' || d.badge === 'Signature Experience' || d.badge === 'Best Seller').slice(0, 4);

  return (
    <section id="signature" className="py-24 bg-forest-deep text-white relative overflow-hidden">
      {/* BACKGROUND ACCENT LIGHT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 text-gold mb-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.25em] font-dmsans font-semibold">
                Culinary Masterpieces
              </span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-6xl font-bold leading-tight">
              Our Signature <span className="text-gold-gradient">Creations</span>
            </h2>
          </div>
          <p className="max-w-md text-gray-300 font-inter font-light text-sm mt-4 md:mt-0 leading-relaxed">
            Carefully curated dishes representing the pinnacle of South Indian fine dining, loved by food connoisseurs across Australia.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {signatureList.map((dish, idx) => {
            const isWishlisted = wishlist.includes(dish.id);
            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-3xl bg-forest-dark/95 border border-gold/30 overflow-hidden shadow-2xl hover:border-gold transition-all duration-500 group flex flex-col sm:flex-row"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative sm:w-1/2 h-64 sm:h-auto overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent sm:hidden" />
                  
                  {/* BADGE */}
                  {dish.badge && (
                    <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-gold-gradient text-forest-dark text-[10px] font-dmsans font-bold uppercase tracking-wider shadow-md">
                      {dish.badge}
                    </span>
                  )}

                  {/* WISHLIST BUTTON */}
                  <button
                    onClick={() => onToggleWishlist(dish.id)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-forest-dark/80 backdrop-blur-md border border-gold/40 text-gold hover:scale-110 transition-transform"
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-terracotta text-terracotta' : 'text-gold'}`} />
                  </button>
                </div>

                {/* CONTENT CONTAINER */}
                <div className="p-6 sm:w-1/2 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1 text-gold text-xs font-dmsans">
                        <Star className="w-4 h-4 fill-gold" />
                        <span className="font-bold text-white">{dish.rating}</span>
                        <span className="text-gray-400">({dish.reviewsCount})</span>
                      </div>
                      <span className="text-xs uppercase tracking-widest text-gold font-mono font-bold">
                        AUD ${dish.price.toFixed(2)}
                      </span>
                    </div>

                    <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-white group-hover:text-gold transition-colors leading-tight">
                      {dish.title}
                    </h3>

                    <p className="text-gray-300 font-inter font-light text-xs sm:text-sm line-clamp-3 mt-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {/* FOOTER ACTIONS */}
                  <div className="pt-4 border-t border-gold/20 flex items-center justify-between font-dmsans">
                    <button
                      onClick={() => onQuickView(dish)}
                      className="text-xs uppercase tracking-wider text-gold hover:text-white font-semibold flex items-center space-x-1.5 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Quick View</span>
                    </button>

                    <button
                      onClick={onOpenReservation}
                      className="px-4 py-2 rounded-full bg-gold/10 hover:bg-gold-gradient text-gold hover:text-forest-dark border border-gold/40 font-bold text-[11px] uppercase tracking-wider transition-all duration-300"
                    >
                      Reserve Dish
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
