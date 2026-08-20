import React from 'react';
import { Sparkles, Leaf, UserCheck, Shield, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { PARLOUR_INFO, WHY_CHOOSE_US } from '../data/parlourData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#FAF8F5] rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Grid of Parlour & Craft */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Primary Image */}
              <div className="rounded-3xl overflow-hidden border border-[#E0A96D]/30 shadow-xl bg-gray-100 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                  alt="Sonalee Beauty Parlour Interior Shukrawar Peth Pune"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlaid Image Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-3/5 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-gray-900 aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
                  alt="Skin facial glow care at Sonalee Beauty Parlour"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Years Badge Floating */}
              <div className="absolute top-6 left-6 bg-[#1A1817]/90 text-white backdrop-blur-md px-4 py-3 rounded-2xl border border-[#E0A96D]/40 shadow-lg flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-rose-gold-gradient flex items-center justify-center font-bold font-serif text-[#1A1817]">
                  35+
                </div>
                <div>
                  <div className="text-xs font-bold text-[#E0A96D]">Est. 1988</div>
                  <div className="text-[10px] text-gray-300">Shukrawar Peth, Pune</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Highlights */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#E0A96D]/15 border border-[#E0A96D]/30 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#C88A4B]" />
              <span className="text-xs font-semibold tracking-wide uppercase text-[#8C532B]">
                Our Heritage & Promise
              </span>
            </div>

            {/* Exact Heading specified in prompt */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1817] leading-tight">
              Legacy of Care, Beauty & Elegance <span className="text-gradient-rose italic font-normal">Since 1988</span>
            </h2>

            {/* Exact Paragraph specified in prompt */}
            <p className="text-base text-gray-700 leading-relaxed">
              Established in 1988, Sonalee Beauty Parlour has been a beloved beauty destination near Panganti Chowk, Shukrawar Peth, Pune. We combine decades of expertise with modern beauty trends, using only premium, branded products to give you personalized care in a clean, relaxing environment. Whether preparing for your wedding day or treating yourself to a skin refresh, our friendly beauticians are dedicated to making you look and feel your absolute best.
            </p>

            {/* Key Highlights as explicitly requested in prompt */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs uppercase tracking-wider text-[#8C5A4B] font-bold">Key Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Highlight 1 */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E0A96D]/20 shadow-sm flex flex-col space-y-2 hover:border-[#E0A96D]/50 transition-colors">
                  <div className="text-xl">✨</div>
                  <h4 className="text-xs font-bold text-[#1A1817] leading-snug">
                    35+ Years of Satisfied Clients in Pune
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-normal">
                    Generations of families trust us for wedding & daily care.
                  </p>
                </div>

                {/* Highlight 2 */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E0A96D]/20 shadow-sm flex flex-col space-y-2 hover:border-[#E0A96D]/50 transition-colors">
                  <div className="text-xl">🌿</div>
                  <h4 className="text-xs font-bold text-[#1A1817] leading-snug">
                    Clean, Hygienic & Relaxing Atmosphere
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-normal">
                    Strict sanitization, single-use kits & tranquil private spaces.
                  </p>
                </div>

                {/* Highlight 3 */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E0A96D]/20 shadow-sm flex flex-col space-y-2 hover:border-[#E0A96D]/50 transition-colors">
                  <div className="text-xl">💆‍♀️</div>
                  <h4 className="text-xs font-bold text-[#1A1817] leading-snug">
                    Certified Stylists & Skin Specialists
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-normal">
                    Expert beauticians skilled in custom skin tone mapping.
                  </p>
                </div>

              </div>
            </div>

            {/* Additional Trust Indicators */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs font-medium text-gray-600 border-t border-gray-100">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C88A4B]" />
                <span>Near Panganti Chowk, Shukrawar Peth</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C88A4B]" />
                <span>Original Branded Cosmetics</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C88A4B]" />
                <span>Pre-Bridal Consultation Available</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
