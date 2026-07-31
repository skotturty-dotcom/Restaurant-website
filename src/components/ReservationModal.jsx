import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Calendar, Clock, Users, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ReservationModal({ bookingData, onClose }) {
  if (!bookingData) return null;

  useEffect(() => {
    // Fire confetti celebration on modal open
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C79A45', '#1E3A34', '#D65A31']
      });
    } catch (e) {
      console.log('Confetti error', e);
    }
  }, []);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-deep/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ duration: 0.4 }}
          className="relative max-w-md w-full bg-white rounded-3xl p-8 border border-gold/40 shadow-2xl text-center overflow-hidden"
        >
          {/* TOP DECORATIVE GLOW */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gold-gradient" />

          {/* CHECKMARK ICON */}
          <div className="w-16 h-16 rounded-full bg-forest/10 border border-forest/20 text-forest flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-forest" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block mb-1">
            Table Reservation Confirmed
          </span>

          <h3 className="font-playfair text-2xl font-bold text-forest-dark mb-2">
            We Look Forward to Welcoming You, {bookingData.name}!
          </h3>

          <p className="text-mutedText text-xs leading-relaxed font-light mb-6">
            A confirmation reference <strong className="text-forest-dark font-mono">#AN-{Math.floor(100000 + Math.random() * 900000)}</strong> has been sent to your email <span className="text-forest font-medium">{bookingData.email}</span>.
          </p>

          {/* BOOKING SUMMARY BOX */}
          <div className="p-4 rounded-2xl bg-ivory border border-borderLine space-y-3 text-left mb-6">
            <div className="flex items-center justify-between text-xs">
              <span className="text-mutedText flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gold" /> Date:
              </span>
              <span className="font-bold text-forest-dark">{bookingData.date}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-mutedText flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gold" /> Time:
              </span>
              <span className="font-bold text-forest-dark">{bookingData.time}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-mutedText flex items-center gap-1.5">
                <Users className="w-4 h-4 text-gold" /> Party Size:
              </span>
              <span className="font-bold text-forest-dark">{bookingData.guests} Guests ({bookingData.area})</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-full bg-gold-gradient text-forest-dark font-bold text-xs uppercase tracking-widest shadow-goldGlow hover:scale-105 transition-transform"
          >
            Done & Close
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
