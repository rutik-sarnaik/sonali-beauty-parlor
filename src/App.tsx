import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { BookingModal } from './components/BookingModal';
import { BeautyAdvisorModal } from './components/BeautyAdvisorModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [selectedServiceToBook, setSelectedServiceToBook] = useState<{
    name: string;
    category: string;
  } | null>(null);

  const handleOpenBooking = () => {
    setSelectedServiceToBook(null);
    setIsBookingModalOpen(true);
  };

  const handleSelectServiceToBook = (serviceName: string, category: string) => {
    setSelectedServiceToBook({ name: serviceName, category });
    
    // Smooth scroll to contact form or open modal
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  const handleNavigateToServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1C1A] font-sans antialiased flex flex-col">
      {/* Sticky Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Multi-Section Content */}
      <main className="flex-grow">
        <Hero
          onOpenBooking={handleOpenBooking}
          onNavigateToServices={handleNavigateToServices}
        />
        
        <AboutUs />
        
        <ServicesSection onSelectServiceToBook={handleSelectServiceToBook} />
        
        <GallerySection />
        
        <TestimonialsSection />
        
        <FAQSection />
        
        <ContactSection preselectedService={selectedServiceToBook} />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
      />

      {/* Persistent Floating WhatsApp Widget */}
      <WhatsAppFloatingButton />

      {/* Booking Modal Popup */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialService={selectedServiceToBook?.name}
        initialCategory={selectedServiceToBook?.category}
      />

      {/* AI Beauty Advisor Modal Popup */}
      <BeautyAdvisorModal
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
        onSelectService={handleSelectServiceToBook}
      />
    </div>
  );
}
