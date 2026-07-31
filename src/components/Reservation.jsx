import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Utensils, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Reservation({ onBookSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '',
    date: '',
    time: '',
    area: '',
    specialRequest: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.guests || !formData.date || !formData.time) {
      alert('Please fill out all required fields.');
      return;
    }
    onBookSuccess(formData);
  };

  return (
    <section id="reservations" className="py-24 bg-forest-deep text-white relative overflow-hidden">
      
      {/* DECORATIVE LIGHTING */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT INFO COLUMN (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block">
              Table Concierge
            </span>
            
            <h2 className="font-cormorant text-4xl sm:text-6xl font-bold leading-tight">
              Reserve Your <br />
              <span className="text-gold-gradient">Dining Experience</span>
            </h2>

            <p className="text-gray-300 font-inter font-light text-sm sm:text-base leading-relaxed">
              Indulge in Australia's finest authentic South Indian cuisine. Guarantee your table for intimate family dinners, business meetings, or milestone celebrations.
            </p>

            <div className="space-y-4 pt-4 font-inter">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Instant Reservation Guarantee</h4>
                  <p className="text-xs text-gray-400 font-light">Receive instant email & SMS confirmation code.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Complimentary Valet Service</h4>
                  <p className="text-xs text-gray-400 font-light">Available Friday through Sunday evenings.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Bespoke Dietary Accommodation</h4>
                  <p className="text-xs text-gray-400 font-light">Jain, Vegan & Gluten-Free menus customized on demand.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-forest-dark border border-gold/30">
              <span className="text-[11px] uppercase tracking-widest text-gold block font-mono">Dining Hours</span>
              <p className="text-xs text-gray-300 font-light mt-1 font-inter">
                Lunch: 11:30 AM – 3:30 PM | Dinner: 5:30 PM – 11:00 PM (Mon – Sun)
              </p>
            </div>
          </motion.div>

          {/* RIGHT BOOKING FORM (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-forest-dark/95 border border-gold/40 shadow-2xl space-y-6"
            >
              <h3 className="font-cormorant text-3xl font-bold text-white mb-2">
                Book A Table
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* NAME */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-gold font-semibold block mb-2 font-inter">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-forest-deep border border-gold/30 focus:border-gold focus:outline-none text-sm text-white font-inter"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-gold font-semibold block mb-2 font-inter">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-xl bg-forest-deep border border-gold/30 focus:border-gold focus:outline-none text-sm text-white font-inter"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-gold font-semibold block mb-2 font-inter">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-xl bg-forest-deep border border-gold/30 focus:border-gold focus:outline-none text-sm text-white font-inter"
                  />
                </div>

                {/* NUMBER OF GUESTS */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-gold font-semibold block mb-2 font-inter">
                    Number of Guests *
                  </label>
                  <select
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-forest-deep border border-gold/30 focus:border-gold focus:outline-none text-sm text-white font-inter"
                  >
                    <option value="" disabled className="bg-forest-dark text-gray-400">Select number of guests</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, '9+ (Large Group)'].map((n) => (
                      <option key={n} value={n} className="bg-forest-dark text-white">
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* DATE */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-gold font-semibold block mb-2 font-inter">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-forest-deep border border-gold/30 focus:border-gold focus:outline-none text-sm text-white font-inter"
                  />
                </div>

                {/* TIME */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-gold font-semibold block mb-2 font-inter">
                    Preferred Time *
                  </label>
                  <select
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-forest-deep border border-gold/30 focus:border-gold focus:outline-none text-sm text-white font-inter"
                  >
                    <option value="" disabled className="bg-forest-dark text-gray-400">Select preferred time</option>
                    {['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'].map((t) => (
                      <option key={t} value={t} className="bg-forest-dark text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* DINING AREA PREFERENCE */}
              <div>
                <label className="text-xs uppercase tracking-wider text-gold font-semibold block mb-2 font-inter">
                  Seating Preference (Optional)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['Main Dining Hall', 'Private Suite', 'Alfresco Terrace'].map((area) => (
                    <button
                      type="button"
                      key={area}
                      onClick={() => setFormData({ ...formData, area: formData.area === area ? '' : area })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-medium transition-all font-inter ${
                        formData.area === area
                          ? 'bg-gold-gradient text-forest-dark font-bold'
                          : 'bg-forest-deep border border-gold/20 text-gray-300 hover:border-gold'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* SPECIAL REQUEST */}
              <div>
                <label className="text-xs uppercase tracking-wider text-gold font-semibold block mb-2 font-inter">
                  Special Occasion or Dietary Request (Optional)
                </label>
                <textarea
                  rows="2"
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  placeholder="e.g. Anniversary dinner, High chair required, Jain menu needed..."
                  className="w-full px-4 py-3 rounded-xl bg-forest-deep border border-gold/30 focus:border-gold focus:outline-none text-sm text-white font-inter"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gold-gradient text-forest-dark font-bold text-xs uppercase tracking-widest shadow-goldGlow hover:scale-[1.02] transition-transform font-inter"
              >
                Confirm Table Reservation
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
