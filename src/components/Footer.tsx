import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { PARLOUR_INFO } from '../data/parlourData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenAdvisor: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenAdvisor }) => {
  return (
    <footer className="bg-[#1A1817] text-[#FAF8F5] pt-16 pb-8 border-t border-[#E0A96D]/20 relative overflow-hidden">
      {/* Decorative Rose-Gold Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E0A96D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-rose-gold-gradient p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#1A1817] rounded-full flex items-center justify-center">
                  <span className="font-serif font-bold text-lg text-gradient-gold">S</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  Sonalee <span className="text-[#E0A96D] italic font-normal">Beauty Parlour</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#E0A96D] font-semibold">
                  Legacy of Elegance Since 1988
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Over 35+ years of trusted beauty excellence in Shukrawar Peth, Pune. Specializing in HD bridal makeovers, smoothening treatments, anti-tan facials, and personal grooming.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-full bg-rose-gold-gradient text-white text-xs font-semibold shadow-rose-gold hover:opacity-95"
              >
                Book Appointment
              </button>
              <button
                onClick={onOpenAdvisor}
                className="px-4 py-2 rounded-full border border-[#E0A96D]/40 text-[#E0A96D] text-xs font-semibold hover:bg-[#E0A96D]/10"
              >
                Skin Advisor
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#E0A96D] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#home" className="hover:text-[#E0A96D] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#E0A96D] transition-colors">About Us (35+ Years)</a></li>
              <li><a href="#services" className="hover:text-[#E0A96D] transition-colors">Services & Pricing</a></li>
              <li><a href="#gallery" className="hover:text-[#E0A96D] transition-colors">Photo Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-[#E0A96D] transition-colors">Client Reviews</a></li>
              <li><a href="#faqs" className="hover:text-[#E0A96D] transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-[#E0A96D] transition-colors">Contact & Location</a></li>
            </ul>
          </div>

          {/* Popular Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#E0A96D] uppercase tracking-wider">
              Popular Treatments
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>• HD Bridal & Engagement Makeup</li>
              <li>• Keratin Hair Smoothening & Spa</li>
              <li>• Anti-Tan & De-Tan Glow Facials</li>
              <li>• Organic Fruit Bio-Facials</li>
              <li>• Eyebrow Threading & Rica Waxing</li>
              <li>• Luxury Pedicure & Paraffin Manicure</li>
              <li>• Saree Draping & Gajra Hairstyling</li>
            </ul>
          </div>

          {/* Location & Direct Info Block */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#E0A96D] uppercase tracking-wider">
              Contact & Location
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#E0A96D] shrink-0 mt-0.5" />
                <span>923, Panganti Chowk, Shukrawar Peth, Pune, Maharashtra 411002</span>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#E0A96D] shrink-0" />
                <a href={`tel:${PARLOUR_INFO.phoneRaw}`} className="hover:text-[#E0A96D] font-bold">
                  +91 9145000860
                </a>
              </div>

              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-[#E0A96D] shrink-0 mt-0.5" />
                <span>Tue – Sun: 10:30 AM – 6:30 PM (Closed Mondays)</span>
              </div>

              <div className="pt-1 flex items-center space-x-3">
                <a
                  href={PARLOUR_INFO.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center space-x-1"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href={PARLOUR_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E0A96D] hover:underline flex items-center space-x-1"
                >
                  <span>Google Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 1988 – {new Date().getFullYear()} Sonalee Beauty Parlour. All Rights Reserved. Panganti Chowk, Shukrawar Peth, Pune.</p>
          <div className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline-block" />
            <span>for Pune Beauties</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
