import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, Eye, Star, Flame, Sparkles } from 'lucide-react';
import { menuCategories } from '../data/menuData';

export default function Menu({ dishes, onQuickView, wishlist, onToggleWishlist }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      const matchesCategory = activeCategory === 'all' || dish.category === activeCategory;
      const matchesSearch =
        dish.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesDietary = true;
      if (dietaryFilter === 'glutenFree') matchesDietary = dish.isGlutenFree;
      if (dietaryFilter === 'chefSpecial') matchesDietary = dish.badge === 'Chef Special' || dish.badge === 'Signature Experience';

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [dishes, activeCategory, searchQuery, dietaryFilter]);

  return (
    <section id="menu" className="py-24 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TITLE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-gold mb-3">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-dmsans font-semibold">
              Artisanal Culinary Selection
            </span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="font-cormorant text-4xl sm:text-6xl font-bold text-forest-dark tracking-tight mb-4">
            Explore Our Fine Menu
          </h2>
          <div className="w-20 h-0.5 bg-gold-gradient mx-auto mb-4" />
          <p className="text-mutedText font-inter font-light text-sm sm:text-base">
            Crafted daily using heirloom rice, unrefined cold-pressed oils, organic spices, and premium local produce.
          </p>
        </div>

        {/* CONTROLS BAR: SEARCH & DIETARY FILTERS */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-borderLine shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4 font-dmsans">
          
          {/* SEARCH INPUT */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Dosa, Thali, Coffee..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full border border-borderLine focus:border-gold focus:outline-none text-xs sm:text-sm bg-ivory/50 text-darkText font-inter"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-darkText"
              >
                Clear
              </button>
            )}
          </div>

          {/* DIETARY FILTER BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto font-dmsans">
            <span className="text-xs font-semibold uppercase tracking-wider text-mutedText mr-2 hidden sm:inline">
              Filter:
            </span>
            {[
              { id: 'all', label: 'All Items' },
              { id: 'glutenFree', label: 'Gluten-Free' },
              { id: 'chefSpecial', label: 'Chef Specials' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setDietaryFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  dietaryFilter === f.id
                    ? 'bg-forest text-white shadow-sm'
                    : 'bg-ivory text-mutedText hover:bg-borderLine'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none mb-12 justify-start lg:justify-center font-dmsans">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-gold-gradient text-forest-dark font-bold shadow-goldGlow'
                  : 'bg-white border border-borderLine text-mutedText hover:border-gold/50 hover:text-forest-dark'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* MENU ITEMS GRID */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-borderLine font-inter">
            <p className="text-gray-500 text-base font-light">No dishes found matching your search criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-4 px-6 py-2 rounded-full bg-forest text-white text-xs uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredDishes.map((dish) => {
                const isWishlisted = wishlist.includes(dish.id);
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={dish.id}
                    className="bg-white rounded-3xl border border-borderLine hover:border-gold/50 overflow-hidden shadow-sm hover:shadow-cardHover transition-all duration-300 group flex flex-col justify-between"
                  >
                    {/* DISH IMAGE */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={dish.image}
                        alt={dish.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      {/* BADGE */}
                      {dish.badge && (
                        <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-gold-gradient text-forest-dark text-[10px] font-dmsans font-bold uppercase tracking-wider shadow-md">
                          {dish.badge}
                        </span>
                      )}

                      {/* VEG ICON & SPICE INDICATOR */}
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                        <span className="w-5 h-5 rounded border border-green-600 bg-white flex items-center justify-center p-0.5" title="100% Pure Vegetarian">
                          <span className="w-2.5 h-2.5 rounded-full bg-green-600" />
                        </span>
                        
                        {dish.spiceLevel > 0 && (
                          <div className="flex items-center px-2 py-0.5 rounded-full bg-forest-dark/80 backdrop-blur-md border border-gold/30 text-terracotta text-[10px] font-bold space-x-0.5 font-dmsans">
                            {Array.from({ length: dish.spiceLevel }).map((_, i) => (
                              <Flame key={i} className="w-3 h-3 fill-terracotta" />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* WISHLIST TOGGLE */}
                      <button
                        onClick={() => onToggleWishlist(dish.id)}
                        className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-md text-forest hover:scale-110 transition-transform"
                        aria-label="Save to Wishlist"
                      >
                        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-terracotta text-terracotta' : 'text-forest'}`} />
                      </button>
                    </div>

                    {/* DISH DETAILS */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-cormorant text-2xl font-bold text-forest-dark group-hover:text-gold-dark transition-colors leading-tight">
                            {dish.title}
                          </h3>
                        </div>

                        <p className="text-mutedText text-xs sm:text-sm font-inter leading-relaxed font-light line-clamp-2">
                          {dish.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-borderLine flex items-center justify-between font-dmsans">
                        <span className="font-mono text-base font-bold text-forest-dark">
                          AUD ${dish.price.toFixed(2)}
                        </span>

                        <button
                          onClick={() => onQuickView(dish)}
                          className="px-4 py-2 rounded-full bg-forest/5 hover:bg-gold-gradient text-forest-dark font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center space-x-1.5"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Details</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
