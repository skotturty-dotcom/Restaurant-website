import React from 'react';
import { ChevronUp, MapPin, Phone, Mail, Globe, Share2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-deep text-white border-t border-gold/20 relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COL 1: BRAND */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-forest-light/30">
                <span className="text-gold font-playfair text-xl font-bold">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-2xl font-bold tracking-widest text-white">
                  ANANDAM
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-dmsans">
                  South Indian Fine Dining
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs font-light leading-relaxed">
              Combining modern Australian luxury minimalism with authentic, time-honored South Indian culinary art.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-forest-dark border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-forest-dark transition-colors" title="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-forest-dark border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-forest-dark transition-colors" title="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-forest-dark border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-forest-dark transition-colors" title="Twitter / X">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* COL 2: QUICK NAVIGATION */}
          <div>
            <h4 className="font-playfair text-base font-bold text-gold uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-light">
              <li><a href="#about" className="hover:text-gold transition-colors">Our Heritage Story</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Artisanal Menu</a></li>
              <li><a href="#signature" className="hover:text-gold transition-colors">Signature Dishes</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Visual Gallery</a></li>
              <li><a href="#catering" className="hover:text-gold transition-colors">Luxury Catering</a></li>
              <li><a href="#reservations" className="hover:text-gold transition-colors">Book a Table</a></li>
            </ul>
          </div>

          {/* COL 3: OPENING HOURS */}
          <div>
            <h4 className="font-playfair text-base font-bold text-gold uppercase tracking-wider mb-4">
              Dining Hours
            </h4>
            <div className="space-y-3 text-xs text-gray-300 font-light">
              <div>
                <span className="text-white font-semibold block">Lunch Service:</span>
                <span>Monday – Sunday: 11:30 AM – 3:30 PM</span>
              </div>
              <div>
                <span className="text-white font-semibold block">Dinner Service:</span>
                <span>Monday – Sunday: 5:30 PM – 11:00 PM</span>
              </div>
              <div>
                <span className="text-white font-semibold block">Tiffin & Tea Hour:</span>
                <span>Daily: 4:00 PM – 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* COL 4: CONTACT & LOCATIONS */}
          <div>
            <h4 className="font-playfair text-base font-bold text-gold uppercase tracking-wider mb-4">
              Locations
            </h4>
            <div className="space-y-3 text-xs text-gray-300 font-light">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>128 Collins Street, Melbourne VIC 3000</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>45 Crown Street, Surry Hills NSW 2010</span>
              </div>
              <div className="flex items-center space-x-2 pt-2 text-white font-medium">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+61398274500" className="hover:text-gold transition-colors">+61 3 9827 4500</a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM LEGAL & BACK TO TOP BAR */}
        <div className="pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-light">
          <p>© 2026 ANANDAM Fine Dining Australia. All Rights Reserved.</p>

          <div className="flex items-center space-x-6 text-[11px]">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">HACCP Certification</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-forest-dark border border-gold/30 text-gold hover:bg-gold hover:text-forest-dark transition-colors flex items-center space-x-1"
            aria-label="Back to Top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
