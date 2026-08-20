import React, { useState } from 'react';
import { Sparkles, X, CheckCircle, ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import { SERVICES_DATA, PARLOUR_INFO } from '../data/parlourData';
import { ServiceItem } from '../types';

interface BeautyAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string, category: string) => void;
}

export const BeautyAdvisorModal: React.FC<BeautyAdvisorModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  const [skinType, setSkinType] = useState<string>('Combination');
  const [occasion, setOccasion] = useState<string>('Bridal / Wedding');
  const [concern, setConcern] = useState<string>('Tan & Dullness');
  const [recommendations, setRecommendations] = useState<ServiceItem[] | null>(null);

  if (!isOpen) return null;

  const handleAnalyze = () => {
    let matches: ServiceItem[] = [];

    if (occasion.includes('Bridal') || occasion.includes('Wedding')) {
      matches = SERVICES_DATA.filter((s) => s.category === 'Bridal & Events');
    } else if (concern.includes('Tan') || concern.includes('Glow') || skinType.includes('Dry')) {
      matches = SERVICES_DATA.filter((s) => s.category === 'Skin & Facial Care');
    } else {
      matches = SERVICES_DATA.filter((s) => s.category === 'Hair Styling & Treatments');
    }

    setRecommendations(matches.slice(0, 3));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in-50">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E0A96D]/40 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-4 border-b border-gray-100 pb-4">
          <div className="w-10 h-10 rounded-full bg-rose-gold-gradient text-white flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-[#1A1817]">
              AI Beauty & Skin Treatment Advisor
            </h3>
            <p className="text-xs text-gray-500">
              Personalized recommendations based on 35+ years of beauty experience.
            </p>
          </div>
        </div>

        {recommendations ? (
          <div className="space-y-4 animate-in fade-in-50">
            <div className="p-3.5 rounded-2xl bg-[#E0A96D]/15 border border-[#E0A96D]/30 text-xs text-[#8C532B]">
              ✨ Based on your <strong>{skinType}</strong> skin type for <strong>{occasion}</strong>:
            </div>

            <div className="space-y-3 max-h-60 overflow-y-auto">
              {recommendations.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl border border-gray-200 bg-[#FAF8F5] flex items-center justify-between gap-3"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C88A4B]">
                      {item.category}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#1A1817]">{item.name}</h4>
                    <p className="text-[11px] text-gray-600 line-clamp-1">{item.features}</p>
                    <span className="text-xs font-bold text-[#C88A4B] mt-1 block">
                      {item.priceHighlight}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectService(item.name, item.category);
                    }}
                    className="px-3.5 py-2 rounded-xl bg-rose-gold-gradient text-white text-xs font-semibold shrink-0"
                  >
                    Select & Book
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => setRecommendations(null)}
              className="w-full py-2.5 rounded-full border border-gray-300 text-gray-700 text-xs font-semibold"
            >
              Re-analyze Questionnaire
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                1. What is your primary occasion?
              </label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-gray-200 rounded-xl"
              >
                <option value="Bridal / Wedding">Bridal / Wedding Makeover</option>
                <option value="Engagement / Party">Engagement / Party Look</option>
                <option value="Regular Skin Refresh">Regular Skin Refresh & De-tan</option>
                <option value="Hair Transformation">Hair Smoothening / Spa</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                2. What is your skin type?
              </label>
              <select
                value={skinType}
                onChange={(e) => setSkinType(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-gray-200 rounded-xl"
              >
                <option value="Combination">Combination Skin</option>
                <option value="Dry & Sensitive">Dry & Sensitive Skin</option>
                <option value="Oily / Acne Prone">Oily / Acne Prone</option>
                <option value="Normal Glow">Normal Skin</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                3. What is your primary goal / concern?
              </label>
              <select
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-gray-200 rounded-xl"
              >
                <option value="Tan & Dullness">Remove Sun Tan & Restore Instant Glow</option>
                <option value="Frizzy Hair">Frizz-free Smooth Hair</option>
                <option value="Long-lasting Makeup">Flawless Sweat-proof Makeup</option>
                <option value="Relaxation">Complete Relaxation & Exfoliation</option>
              </select>
            </div>

            <button
              onClick={handleAnalyze}
              className="w-full py-3 rounded-full bg-rose-gold-gradient text-white font-semibold text-xs shadow-rose-gold hover:opacity-95 transition-opacity flex items-center justify-center space-x-2 mt-4"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Personalized Treatment Plan</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
