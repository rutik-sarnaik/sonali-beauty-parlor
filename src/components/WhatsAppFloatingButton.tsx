import React, { useState } from 'react';
import { MessageCircle, Phone, X, Sparkles } from 'lucide-react';
import { PARLOUR_INFO } from '../data/parlourData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpenTooltip, setIsOpenTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2 pointer-events-auto">
      {/* Tooltip Card */}
      {isOpenTooltip && (
        <div className="bg-[#1A1817] text-white p-3.5 rounded-2xl shadow-2xl border border-[#E0A96D]/40 max-w-xs animate-in slide-in-from-bottom-2 relative">
          <button
            onClick={() => setIsOpenTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white text-xs"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#E0A96D] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chat with Sonalee Parlour</span>
          </div>
          <p className="text-[11px] text-gray-300 leading-snug">
            Have a question about bridal packages or hair spa rates? Message us on WhatsApp!
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center space-x-3">
        {/* Floating Phone Call Icon */}
        <a
          href={`tel:${PARLOUR_INFO.phoneRaw}`}
          className="w-11 h-11 rounded-full bg-rose-gold-gradient text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          title="Call +91 9145000860"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={PARLOUR_INFO.whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300"
          title="Chat on WhatsApp (+91 9145000860)"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white animate-pulse" />
        </a>
      </div>
    </div>
  );
};
