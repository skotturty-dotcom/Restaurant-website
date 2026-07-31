import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Eye, Trash2, Calendar } from 'lucide-react';

export default function WishlistDrawer({ isOpen, onClose, wishlist, dishes, onRemoveWishlist, onQuickView, onOpenReservation }) {
  if (!isOpen) return null;

  const wishlistedDishes = dishes.filter(d => wishlist.includes(d.id));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-forest-deep/80 backdrop-blur-md"
        />

        {/* DRAWER CONTAINER */}
        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between"
          >
            {/* HEADER */}
            <div className="p-6 bg-forest-dark text-white flex items-center justify-between border-b border-gold/20">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-gold fill-gold" />
                <h3 className="font-playfair text-xl font-bold">Saved Dishes ({wishlistedDishes.length})</h3>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-forest"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* BODY */}
            <div className="p-6 flex-1 overflow-y-auto space-y-4">
              {wishlistedDishes.length === 0 ? (
                <div className="text-center py-16 text-mutedText">
                  <Heart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm font-light">Your wishlist is currently empty.</p>
                  <p className="text-xs text-gray-400 mt-1">Click the heart icon on any dish to save it here!</p>
                </div>
              ) : (
                wishlistedDishes.map((dish) => (
                  <div
                    key={dish.id}
                    className="p-4 rounded-2xl border border-borderLine flex items-center space-x-4 bg-ivory/50"
                  >
                    <img
                      src={dish.image}
                      alt={dish.title}
                      className="w-16 h-16 rounded-xl object-cover border border-gold/20 shrink-0"
                    />

                    <div className="flex-1">
                      <h4 className="font-playfair text-sm font-bold text-forest-dark line-clamp-1">{dish.title}</h4>
                      <span className="font-mono text-xs text-gold-dark font-bold block">AUD ${dish.price.toFixed(2)}</span>
                      <div className="flex items-center space-x-3 mt-1">
                        <button
                          onClick={() => {
                            onClose();
                            onQuickView(dish);
                          }}
                          className="text-[11px] text-forest hover:text-gold flex items-center space-x-1"
                        >
                          <Eye className="w-3 h-3" />
                          <span>View</span>
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveWishlist(dish.id)}
                      className="p-2 text-gray-400 hover:text-terracotta transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* FOOTER */}
            {wishlistedDishes.length > 0 && (
              <div className="p-6 bg-ivory border-t border-borderLine space-y-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenReservation();
                  }}
                  className="w-full py-3.5 rounded-full bg-gold-gradient text-forest-dark font-bold text-xs uppercase tracking-widest shadow-goldGlow flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Table For Saved Dishes</span>
                </button>
              </div>
            )}

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
