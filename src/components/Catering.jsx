import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Flame, Sparkles, PartyPopper, Calendar } from 'lucide-react';

export default function Catering({ onOpenReservation }) {
  const cateringServices = [
    {
      icon: Briefcase,
      title: 'Corporate Galas & Lunches',
      desc: 'Bespoke banana leaf thali setups and executive box lunches for board meetings & corporate summits.'
    },
    {
      icon: Heart,
      title: 'Luxury Weddings & Receptions',
      desc: 'Live Dosa counters, traditional brassware dining, and 21-course royal wedding thali feasts.'
    },
    {
      icon: PartyPopper,
      title: 'Private Milestone Celebrations',
      desc: 'Intimate dining arrangements for birthdays, anniversaries, and family celebrations with custom desserts.'
    },
    {
      icon: Flame,
      title: 'Live Dosa & Filter Coffee Stations',
      desc: 'Interactive live stations with master chefs preparing paper dosas and frothed degree coffee on site.'
    }
  ];

  return (
    <section id="catering" className="py-24 bg-ivory border-b border-borderLine relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block mb-2">
            Bespoke Events
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-forest-dark mb-4">
            Luxury Catering & Private Events
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-mutedText font-light text-sm sm:text-base">
            Bring the authentic fine dining experience of Anandam to your private residence, corporate office, or event venue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {cateringServices.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-borderLine hover:border-gold/50 shadow-sm hover:shadow-cardHover transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-forest/5 text-forest border border-forest/10 flex items-center justify-center group-hover:bg-gold-gradient group-hover:text-forest-dark transition-all duration-300 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-forest-dark mb-3 group-hover:text-gold transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-mutedText text-xs leading-relaxed font-light">
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CATERING BANNER CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-dark text-white relative overflow-hidden border border-gold/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-mono font-bold block mb-2">
              Plan Your Event
            </span>
            <h3 className="font-playfair text-2xl sm:text-4xl font-bold text-white mb-2">
              Request a Bespoke Event Proposal
            </h3>
            <p className="text-gray-300 font-light text-sm">
              Our catering director will design a customized menu and live station layout tailored to your guest headcount and venue specifications.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={onOpenReservation}
              className="px-8 py-4 rounded-full bg-gold-gradient text-forest-dark font-bold text-xs uppercase tracking-widest hover:shadow-goldGlow transition-all duration-300"
            >
              Inquire Catering
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
