import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, ExternalLink, Camera } from 'lucide-react';

export default function InstagramFeed() {
  const posts = [
    {
      id: 1,
      image: '/images/masala_dosa.png',
      likes: '1,420',
      comments: '88',
      tag: '#HeritageMasalaDosa'
    },
    {
      id: 2,
      image: '/images/thali_meal.png',
      likes: '2,890',
      comments: '164',
      tag: '#GrandRoyalThali'
    },
    {
      id: 3,
      image: '/images/filter_coffee.png',
      likes: '1,950',
      comments: '92',
      tag: '#DegreeFilterCoffee'
    },
    {
      id: 4,
      image: '/images/restaurant_interior.png',
      likes: '3,110',
      comments: '210',
      tag: '#AnandamMelbourne'
    }
  ];

  return (
    <section className="py-20 bg-ivory-dark/40 border-b border-borderLine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-gold mb-1">
              <Camera className="w-5 h-5 text-gold" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold">@anandamfinedining</span>
            </div>
            <h2 className="font-playfair text-3xl font-bold text-forest-dark">
              Follow Our Culinary Journey
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-0 px-6 py-2.5 rounded-full border border-gold text-forest-dark hover:bg-gold-gradient font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-2"
          >
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -5 }}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group cursor-pointer border border-borderLine shadow-sm"
            >
              <img
                src={post.image}
                alt={post.tag}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-forest-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white space-y-3 p-4 text-center">
                <span className="text-gold text-xs font-mono font-bold">{post.tag}</span>
                <div className="flex items-center space-x-4 text-xs font-bold">
                  <span className="flex items-center space-x-1">
                    <Heart className="w-4 h-4 text-terracotta fill-terracotta" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4 text-gold" />
                    <span>{post.comments}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
