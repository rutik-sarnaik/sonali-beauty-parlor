import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { PARLOUR_INFO } from '../data/parlourData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'gallery', 'testimonials', 'faqs', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'FAQs', href: '#faqs', id: 'faqs' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-md py-3 border-b border-[#E0A96D]/25'
          : 'bg-[#FAF8F5]/80 backdrop-blur-sm py-4 border-b border-[#E0A96D]/15'
      }`}
    >
      {/* Top Bar Banner for Pune Shukrawar Peth Location & Timings */}
      <div className="hidden lg:block bg-[#1A1817] text-[#FAF8F5] text-xs py-1.5 px-6 border-b border-[#E0A96D]/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-[#E0A96D]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pune’s Premier Beauty Parlour Since 1988</span>
            </span>
            <span className="text-gray-400">•</span>
            <span>📍 923, Panganti Chowk, Shukrawar Peth, Pune</span>
            <span className="text-gray-400">•</span>
            <span>⏰ Tue–Sun: 10:30 AM – 6:30 PM (Closed Mon)</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={PARLOUR_INFO.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center space-x-1 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <span className="text-gray-500">|</span>
            <a
              href={`tel:${PARLOUR_INFO.phoneRaw}`}
              className="text-[#E0A96D] hover:underline font-medium"
            >
              {PARLOUR_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-rose-gold-gradient p-0.5 flex items-center justify-center shadow-rose-gold transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#1A1817] rounded-full flex items-center justify-center">
                <span className="font-serif font-bold text-lg text-gradient-gold">S</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1817] group-hover:text-[#C88A4B] transition-colors">
                Sonalee <span className="text-[#C88A4B] font-normal italic">Beauty Parlour</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#8C5A4B] font-semibold -mt-1">
                Est. 1988 • Shukrawar Peth, Pune
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#E0A96D]/15 text-[#B8733E] font-semibold border border-[#E0A96D]/30'
                      : 'text-[#3E3835] hover:text-[#B8733E] hover:bg-[#E0A96D]/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Clickable Call Phone Link as per user prompt spec: 📞 Call: +91 9145000860 */}
            <a
              href={`tel:${PARLOUR_INFO.phoneRaw}`}
              id="header-call-btn"
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-full border border-[#C88A4B]/40 text-[#8C532B] hover:bg-[#E0A96D]/15 text-xs font-semibold transition-colors shadow-sm"
              title="Call Sonalee Beauty Parlour"
            >
              <Phone className="w-3.5 h-3.5 text-[#C88A4B]" />
              <span>📞 Call: +91 9145000860</span>
            </a>

            {/* Book CTA */}
            <button
              onClick={onOpenBooking}
              id="header-book-btn"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-rose-gold-gradient text-white text-xs font-semibold hover:opacity-95 transition-all shadow-rose-gold transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href={`tel:${PARLOUR_INFO.phoneRaw}`}
              className="p-2 rounded-full bg-[#E0A96D]/15 text-[#C88A4B] border border-[#E0A96D]/30"
              title="Call Us"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1A1817] hover:bg-[#E0A96D]/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E0A96D]/20 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-rose-gold-gradient text-white font-semibold'
                    : 'text-[#2D2825] hover:bg-[#E0A96D]/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-200 flex flex-col space-y-2.5">
            <a
              href={`tel:${PARLOUR_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl border border-[#C88A4B] text-[#8C532B] font-semibold text-sm bg-white"
            >
              <Phone className="w-4 h-4 text-[#C88A4B]" />
              <span>📞 Call: +91 9145000860</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-rose-gold-gradient text-white font-semibold text-sm shadow-rose-gold"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </button>

            <a
              href={PARLOUR_INFO.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
