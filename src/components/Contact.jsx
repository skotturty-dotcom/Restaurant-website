import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-forest-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTACT INFO (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block mb-2 font-inter">
                Concierge Assistance
              </span>
              <h2 className="font-cormorant text-4xl sm:text-6xl font-bold leading-tight">
                Get In Touch <br />
                <span className="text-gold-gradient">With Anandam</span>
              </h2>
            </div>

            <p className="text-gray-300 font-inter font-light text-sm sm:text-base leading-relaxed">
              Have questions regarding private dining reservations, event catering proposals, or dietary accommodations? Our hospitality team is at your service.
            </p>

            <div className="space-y-4 font-inter">
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-forest/40 border border-gold/20">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold block">Telephone Concierge</span>
                  <a href="tel:+61398274500" className="text-white font-bold text-sm hover:text-gold transition-colors">
                    +61 3 9827 4500
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-forest/40 border border-gold/20">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold block">Email Reservations</span>
                  <a href="mailto:reservations@anandamfinedining.com.au" className="text-white font-bold text-sm hover:text-gold transition-colors">
                    reservations@anandamfinedining.com.au
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-forest/40 border border-gold/20">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold block">Melbourne Location</span>
                  <span className="text-white font-bold text-sm">128 Collins St, Melbourne VIC 3000</span>
                </div>
              </div>
            </div>

            {/* WHATSAPP CTA BUTTON */}
            <a
              href="https://wa.me/61398274500?text=Hello%20Anandam%20Restaurant,%20I%20would%20like%20to%20inquire%20about%20a%20reservation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all shadow-lg font-inter"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Instant WhatsApp Concierge</span>
            </a>
          </motion.div>

          {/* RIGHT CONTACT FORM (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-forest-deep/95 border border-gold/30 shadow-2xl space-y-6"
            >
              <h3 className="font-cormorant text-3xl font-bold text-white mb-2">
                Send Us A Message
              </h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-forest border border-gold/40 text-center space-y-3 font-inter">
                  <CheckCircle2 className="w-10 h-10 text-gold mx-auto" />
                  <h4 className="font-cormorant text-2xl font-bold text-white">Message Received!</h4>
                  <p className="text-xs text-gray-300 font-light">
                    Thank you for contacting Anandam. Our guest relations manager will respond within 2 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-inter">
                    <div>
                      <label className="text-xs uppercase tracking-wider text-gold font-semibold block mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-xl bg-forest-dark border border-gold/30 focus:border-gold focus:outline-none text-sm text-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider text-gold font-semibold block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-xl bg-forest-dark border border-gold/30 focus:border-gold focus:outline-none text-sm text-white"
                      />
                    </div>
                  </div>

                  <div className="font-inter">
                    <label className="text-xs uppercase tracking-wider text-gold font-semibold block mb-2">
                      Inquiry Type
                    </label>
                    <select
                      value={contactData.subject}
                      onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-forest-dark border border-gold/30 focus:border-gold focus:outline-none text-sm text-white"
                    >
                      <option value="General Inquiry">General Dining Inquiry</option>
                      <option value="Private Dining">Private Dining Suite Reservation</option>
                      <option value="Catering">Event & Wedding Catering</option>
                      <option value="Feedback">Guest Feedback</option>
                    </select>
                  </div>

                  <div className="font-inter">
                    <label className="text-xs uppercase tracking-wider text-gold font-semibold block mb-2">
                      Message *
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      placeholder="Enter your message or inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-forest-dark border border-gold/30 focus:border-gold focus:outline-none text-sm text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gold-gradient text-forest-dark font-bold text-xs uppercase tracking-widest shadow-goldGlow hover:scale-[1.02] transition-transform flex items-center justify-center space-x-2 font-inter"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
