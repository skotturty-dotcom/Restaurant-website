import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, Sparkles } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-20 bg-forest-dark text-white relative overflow-hidden border-b border-gold/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mx-auto mb-6">
          <Mail className="w-7 h-7" />
        </div>

        <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block mb-2">
          VIP Epicurean Club
        </span>

        <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-4">
          Join The Anandam Privé Circle
        </h2>

        <p className="text-gray-300 text-sm sm:text-base font-light max-w-xl mx-auto mb-8">
          Subscribe for priority table bookings, seasonal chef tasting invitations, and exclusive festival thali previews.
        </p>

        {subscribed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-2xl bg-forest border border-gold/40 text-gold max-w-md mx-auto flex items-center justify-center space-x-2"
          >
            <CheckCircle2 className="w-5 h-5 text-gold" />
            <span className="font-bold text-sm">Welcome to Anandam Privé Circle! Check your inbox.</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your personal email..."
              className="w-full px-5 py-3.5 rounded-full bg-forest-deep border border-gold/30 focus:border-gold focus:outline-none text-xs sm:text-sm text-white"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold-gradient text-forest-dark font-bold text-xs uppercase tracking-widest hover:shadow-goldGlow transition-all shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
