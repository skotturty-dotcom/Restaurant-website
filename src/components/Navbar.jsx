import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Utensils, Calendar, Phone, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenReservation, wishlistCount, onOpenWishlist }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Signature', href: '#signature' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Catering', href: '#catering' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-forest-dark/95 backdrop-blur-md border-b border-gold/20 py-3 shadow-luxury'
            : 'bg-gradient-to-b from-forest-deep/80 via-forest-deep/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* LOGO */}
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-forest-light/30 group-hover:border-gold transition-colors">
                <span className="text-gold font-playfair text-xl font-bold">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-2xl font-bold tracking-widest text-white group-hover:text-gold transition-colors">
                  ANANDAM
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold-light/90 font-dmsans">
                  South Indian Fine Dining
                </span>
              </div>
            </a>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-gray-200 hover:text-gold transition-colors duration-200 relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* RIGHT UTILITIES & CTA */}
            <div className="hidden lg:flex items-center space-x-5">
              {/* WISHLIST BUTTON */}
              <button
                onClick={onOpenWishlist}
                className="relative p-2.5 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-terracotta text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* BOOK TABLE BUTTON */}
              <button
                onClick={onOpenReservation}
                className="px-6 py-2.5 rounded-full bg-gold-gradient text-forest-dark font-medium text-xs uppercase tracking-wider hover:shadow-goldGlow transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-forest-dark" />
                <span>Book Table</span>
              </button>
            </div>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={onOpenWishlist}
                className="relative p-2 text-gold hover:text-white"
                aria-label="Wishlist Mobile"
              >
                <Heart className="w-6 h-6" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-terracotta text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-gold transition-colors focus:outline-none"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER NAV */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-forest-dark/98 backdrop-blur-xl border-b border-gold/20 lg:hidden shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm uppercase tracking-widest text-gray-200 hover:text-gold py-2 border-b border-gray-800"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gold/60" />
                </a>
              ))}

              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3.5 rounded-full bg-gold-gradient text-forest-dark font-semibold text-xs uppercase tracking-widest shadow-goldGlow text-center block flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve a Table</span>
                </button>

                <a
                  href="tel:+61398274500"
                  className="w-full py-3 rounded-full border border-gold/40 text-gold text-xs uppercase tracking-widest text-center flex items-center justify-center space-x-2 hover:bg-gold/10"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +61 3 9827 4500</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
