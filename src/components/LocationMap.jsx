import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Car, Phone, Navigation } from 'lucide-react';

export default function LocationMap() {
  return (
    <section className="py-24 bg-ivory border-b border-borderLine relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block mb-2">
            Prime Dining Locations
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-forest-dark mb-4">
            Visit Anandam Australia
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-mutedText font-light text-sm sm:text-base">
            Conveniently situated in Melbourne CBD & Surry Hills Sydney with dedicated valet and nearby parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LOCATION INFO CARDS (5 COLS) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* MELBOURNE LOCATION */}
            <div className="p-6 rounded-3xl bg-white border border-borderLine hover:border-gold/50 shadow-sm transition-all">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-forest/5 text-forest flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">Flagship Venue</span>
                  <h3 className="font-playfair text-xl font-bold text-forest-dark">Melbourne CBD</h3>
                </div>
              </div>
              <p className="text-mutedText text-xs font-light leading-relaxed mb-4">
                128 Collins Street, Melbourne VIC 3000 (Near Grand Hyatt)
              </p>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-borderLine">
                <span className="text-forest font-semibold flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" /> +61 3 9827 4500
                </span>
                <span className="text-gold font-mono">Open Daily</span>
              </div>
            </div>

            {/* SYDNEY LOCATION */}
            <div className="p-6 rounded-3xl bg-white border border-borderLine hover:border-gold/50 shadow-sm transition-all">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-forest/5 text-forest flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">Dining Room</span>
                  <h3 className="font-playfair text-xl font-bold text-forest-dark">Surry Hills, Sydney</h3>
                </div>
              </div>
              <p className="text-mutedText text-xs font-light leading-relaxed mb-4">
                45 Crown Street, Surry Hills NSW 2010
              </p>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-borderLine">
                <span className="text-forest font-semibold flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" /> +61 2 8900 1200
                </span>
                <span className="text-gold font-mono">Open Daily</span>
              </div>
            </div>

            {/* PARKING & HOURS INFO */}
            <div className="p-6 rounded-3xl bg-forest-dark text-white space-y-3">
              <div className="flex items-center space-x-2 text-gold">
                <Car className="w-4 h-4" />
                <span className="text-xs uppercase font-bold tracking-wider">Valet & Parking</span>
              </div>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Complimentary valet available Fri – Sun evening service. Multi-level secure parking is located 100m away on Exhibition Street.
              </p>
            </div>

          </div>

          {/* GOOGLE MAPS EMBED (7 COLS) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-borderLine shadow-cardHover min-h-[400px]">
            <iframe
              title="Anandam Restaurant Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.96305761531804!3d-37.81362797975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f99a0e660!2sCollins%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sau!4v1625000000000!5m2!1sen!2sau"
              className="w-full h-full min-h-[420px] border-0 filter saturate-90 brightness-95"
              allowFullScreen=""
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
