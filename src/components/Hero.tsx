import React from 'react';
import { Calendar, MessageCircle, Star, Award, ShieldCheck, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { PARLOUR_INFO } from '../data/parlourData';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigateToServices }) => {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* Background Decorative Rose-Gold Orbs */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#E0A96D]/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C88A4B]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & High-Converting CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#E0A96D]/15 border border-[#E0A96D]/30 w-fit">
              <Sparkles className="w-4 h-4 text-[#C88A4B]" />
              <span className="text-xs font-semibold tracking-wide uppercase text-[#8C532B]">
                Trusted Beauty Landmark Since 1988
              </span>
            </div>

            {/* Headline as requested */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1817] leading-[1.15] tracking-tight">
              Reveal Your Inner Radiance at Pune’s{' '}
              <span className="text-gradient-rose italic font-normal">Trusted Beauty Salon</span>
            </h1>

            {/* Subheadline as requested */}
            <p className="text-base sm:text-lg text-[#4A4440] leading-relaxed max-w-2xl font-normal">
              Over <strong className="font-semibold text-[#1A1817]">35+ years</strong> of delivering expert hair styling, skin treatments, and stunning bridal makeovers in Shukrawar Peth.
            </p>

            {/* Trust Badges Bar as explicitly specified in specs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-2">
              <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-white/80 border border-[#E0A96D]/20 shadow-sm">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A1817]">⭐ 4.8/5 Rated</div>
                  <div className="text-[11px] text-gray-500">(230+ Reviews)</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-white/80 border border-[#E0A96D]/20 shadow-sm">
                <div className="p-2 rounded-lg bg-rose-50 text-[#C88A4B]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A1817]">🏆 35+ Years</div>
                  <div className="text-[11px] text-gray-500">in Business (Est. 1988)</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-white/80 border border-[#E0A96D]/20 shadow-sm">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A1817]">💅 100% Branded</div>
                  <div className="text-[11px] text-gray-500">Certified Products</div>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              {/* Primary CTA: Book an Appointment (Scrolls to Contact / Modal) */}
              <button
                onClick={onOpenBooking}
                id="hero-primary-cta"
                className="px-7 py-3.5 rounded-full bg-rose-gold-gradient text-white text-sm font-semibold hover:shadow-rose-gold transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA: WhatsApp Link with exact prefilled text requested */}
              <a
                href={PARLOUR_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="px-6 py-3.5 rounded-full border border-emerald-600 text-emerald-700 bg-emerald-50/50 hover:bg-emerald-600 hover:text-white text-sm font-semibold transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>💬 WhatsApp Us</span>
              </a>
            </div>

            {/* Quick Address Snippet */}
            <div className="flex items-center space-x-2 text-xs text-gray-600 pt-1">
              <MapPin className="w-4 h-4 text-[#C88A4B] shrink-0" />
              <span>Panganti Chowk, Shukrawar Peth, Pune | Open Tue–Sun: 10:30 AM – 6:30 PM</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with Rose Gold Border */}
              <div className="relative rounded-3xl overflow-hidden p-2 bg-gradient-to-tr from-[#E0A96D] via-[#F4E0D7] to-[#B8733E] shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-900">
                  <img
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
                    alt="Sonalee Beauty Parlour Bridal Makeover Pune"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Overlaid Card at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#1A1817]/80 backdrop-blur-md border border-[#E0A96D]/30 text-white">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-[#E0A96D] uppercase tracking-wider">
                        Bridal & Beauty Excellence
                      </span>
                      <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-medium">
                        Booking Open
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold">HD Bridal Makeovers & Glow Treatments</h3>
                    <p className="text-xs text-gray-300 mt-1">
                      Personalized trial sessions with dermatologically safe branded cosmetics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: 35+ Years */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-[#E0A96D]/30 flex items-center space-x-3 max-w-[200px] animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-[#C88A4B] font-bold font-serif text-lg">
                  35+
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Years of Trust</div>
                  <div className="text-[10px] text-gray-500">Since 1988 in Pune</div>
                </div>
              </div>

              {/* Floating Badge 2: Branded Products */}
              <div className="absolute -bottom-4 -right-4 bg-[#1A1817] text-white p-3.5 rounded-2xl shadow-2xl border border-[#E0A96D]/40 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-rose-gold-gradient flex items-center justify-center text-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#E0A96D]">100% Branded Care</div>
                  <div className="text-[10px] text-gray-300">Safe, Hygienic & Certified</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
