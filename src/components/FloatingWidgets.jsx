import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowUp } from 'lucide-react';

export default function FloatingWidgets({ onOpenReservation, wishlistCount, onOpenWishlist }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. SCROLL PROGRESS INDICATOR BAR */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none">
        <div
          className="h-full bg-gold-gradient transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. FLOATING ACTION WIDGETS CONTAINER (BOTTOM RIGHT) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        
        {/* SCROLL TO TOP */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="p-3 rounded-full bg-forest-dark/90 backdrop-blur-md border border-gold/40 text-gold hover:bg-gold hover:text-forest-dark shadow-2xl transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* FLOATING WHATSAPP BUTTON */}
        <a
          href="https://wa.me/61398274500?text=Hello%20Anandam%20Restaurant,%20I%20would%20like%20to%20inquire%20about%20a%20reservation."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl transition-transform hover:scale-110 flex items-center justify-center border border-white/20"
          aria-label="Contact WhatsApp"
          title="WhatsApp Concierge"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
        </a>

      </div>
    </>
  );
}
