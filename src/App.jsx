import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import SignatureDishes from './components/SignatureDishes';
import Menu from './components/Menu';
import QuickViewModal from './components/QuickViewModal';
import ChefSpecial from './components/ChefSpecial';
import TodaysSpecial from './components/TodaysSpecial';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Awards from './components/Awards';
import Reservation from './components/Reservation';
import ReservationModal from './components/ReservationModal';
import Catering from './components/Catering';
import PrivateDining from './components/PrivateDining';
import SpecialOffers from './components/SpecialOffers';
import FAQ from './components/FAQ';
import InstagramFeed from './components/InstagramFeed';
import Newsletter from './components/Newsletter';
import LocationMap from './components/LocationMap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import WishlistDrawer from './components/WishlistDrawer';
import SEO from './components/SEO';

import { menuDishes } from './data/menuData';

export default function App() {
  const [quickViewDish, setQuickViewDish] = useState(null);
  const [wishlist, setWishlist] = useState(['m-1', 'm-11']); // pre-save 2 signature dishes
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const handleToggleWishlist = (dishId) => {
    if (wishlist.includes(dishId)) {
      setWishlist(wishlist.filter(id => id !== dishId));
    } else {
      setWishlist([...wishlist, dishId]);
    }
  };

  const handleOpenReservation = () => {
    const el = document.getElementById('reservations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-darkText font-inter relative">
      {/* SEO STRUCTURED DATA */}
      <SEO />

      {/* 1. TRANSPARENT NAVBAR */}
      <Navbar
        onOpenReservation={handleOpenReservation}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setWishlistOpen(true)}
      />

      {/* MAIN SECTIONS */}
      <main>
        {/* 2. HERO SECTION */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* 3. FEATURED HIGHLIGHTS */}
        <Highlights />

        {/* 4. ABOUT RESTAURANT */}
        <About />

        {/* 5. WHY CHOOSE US */}
        <WhyChooseUs />

        {/* 6. SIGNATURE DISHES */}
        <SignatureDishes
          dishes={menuDishes}
          onQuickView={(dish) => setQuickViewDish(dish)}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onOpenReservation={handleOpenReservation}
        />

        {/* 7. COMPLETE MENU */}
        <Menu
          dishes={menuDishes}
          onQuickView={(dish) => setQuickViewDish(dish)}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
        />

        {/* 8. CHEF SPECIAL SECTION */}
        <ChefSpecial onOpenReservation={handleOpenReservation} />

        {/* 9. TODAY'S SPECIAL */}
        <TodaysSpecial
          dishes={menuDishes}
          onQuickView={(dish) => setQuickViewDish(dish)}
        />

        {/* 10. RESTAURANT GALLERY */}
        <Gallery />

        {/* 11. CUSTOMER REVIEWS */}
        <Reviews />

        {/* 12. AWARDS & CERTIFICATIONS */}
        <Awards />

        {/* 13. RESERVATION SECTION */}
        <Reservation onBookSuccess={(data) => setBookingData(data)} />

        {/* 14. CATERING SERVICES */}
        <Catering onOpenReservation={handleOpenReservation} />

        {/* 15. PRIVATE DINING */}
        <PrivateDining onOpenReservation={handleOpenReservation} />

        {/* 16. SPECIAL OFFERS */}
        <SpecialOffers onOpenReservation={handleOpenReservation} />

        {/* 17. FAQ */}
        <FAQ />

        {/* 18. INSTAGRAM FEED */}
        <InstagramFeed />

        {/* 19. NEWSLETTER */}
        <Newsletter />

        {/* 20. LOCATION & MAP */}
        <LocationMap />

        {/* 21. CONTACT SECTION */}
        <Contact />
      </main>

      {/* 22. FOOTER */}
      <Footer />

      {/* EXTRA WIDGETS & MODALS */}
      <FloatingWidgets
        onOpenReservation={handleOpenReservation}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setWishlistOpen(true)}
      />

      {/* QUICK VIEW DISH MODAL */}
      <QuickViewModal
        dish={quickViewDish}
        onClose={() => setQuickViewDish(null)}
        onOpenReservation={handleOpenReservation}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* WISHLIST DRAWER */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlist={wishlist}
        dishes={menuDishes}
        onRemoveWishlist={handleToggleWishlist}
        onQuickView={(dish) => setQuickViewDish(dish)}
        onOpenReservation={handleOpenReservation}
      />

      {/* RESERVATION CONFIRMATION CELEBRATION MODAL */}
      {bookingData && (
        <ReservationModal
          bookingData={bookingData}
          onClose={() => setBookingData(null)}
        />
      )}
    </div>
  );
}
