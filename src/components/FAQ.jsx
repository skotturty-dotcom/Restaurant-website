import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqCategories, faqItems } from '../data/faqData';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('reservations');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = faqItems.filter(f => f.category === activeCategory);

  return (
    <section className="py-24 bg-ivory border-b border-borderLine relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block mb-2">
            Clear Answers
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-forest-dark mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-mutedText font-light text-sm">
            Everything you need to know about our reservation policy, dietary customization, parking & catering.
          </p>
        </div>

        {/* FAQ CATEGORY TABS */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 mb-10">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-forest text-white shadow-sm font-bold'
                  : 'bg-white border border-borderLine text-mutedText hover:border-gold/50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-4">
          {filteredFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-borderLine overflow-hidden shadow-sm transition-colors duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-playfair text-base sm:text-lg font-bold text-forest-dark">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-mutedText text-xs sm:text-sm leading-relaxed font-light border-t border-borderLine/50 pt-4"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
