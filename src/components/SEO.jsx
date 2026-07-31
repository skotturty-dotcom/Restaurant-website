import React from 'react';

export default function SEO() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "ANANDAM - South Indian Fine Dining",
    "image": "https://anandamfinedining.com.au/images/hero_bg.png",
    "@id": "https://anandamfinedining.com.au",
    "url": "https://anandamfinedining.com.au",
    "telephone": "+61 3 9827 4500",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "128 Collins Street",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "postalCode": "3000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.8136,
      "longitude": 144.9631
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "11:30",
        "closes": "23:00"
      }
    ],
    "servesCuisine": ["South Indian", "Indian", "Vegetarian", "Fine Dining"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "480"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
