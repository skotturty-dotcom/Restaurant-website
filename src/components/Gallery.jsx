import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Sparkles } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/galleryData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-forest-deep text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block mb-2">
            Visual Experience
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold mb-4">
            Restaurant <span className="text-gold-gradient">Gallery</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-gray-400 font-light text-sm sm:text-base">
            Take a glance into our dining hall, high-end kitchen, banana leaf thalis, and private event suites.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-gold-gradient text-forest-dark font-bold shadow-goldGlow'
                  : 'bg-forest-dark border border-gold/30 text-gray-300 hover:text-gold'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* MASONRY GRID */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setLightboxImage(item)}
                className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer border border-gold/20 hover:border-gold shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="self-end p-2 rounded-full bg-forest-dark/80 text-gold border border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold block font-mono">
                      {item.category}
                    </span>
                    <h3 className="font-playfair text-lg font-bold text-white group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-xs font-light line-clamp-1 mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-deep/95 backdrop-blur-xl">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-forest-dark border border-gold/40 text-gold hover:bg-gold hover:text-forest-dark transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full bg-forest-dark rounded-3xl overflow-hidden border border-gold/40 shadow-2xl">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-full h-[500px] object-cover"
              />
              <div className="p-6">
                <span className="text-xs uppercase tracking-widest text-gold block font-mono">
                  {lightboxImage.category}
                </span>
                <h3 className="font-playfair text-2xl font-bold text-white">
                  {lightboxImage.title}
                </h3>
                <p className="text-gray-300 text-sm font-light mt-1">
                  {lightboxImage.subtitle}
                </p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
