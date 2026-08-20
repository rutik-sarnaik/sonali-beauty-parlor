import React, { useState } from 'react';
import { Sparkles, ChevronDown, HelpCircle, Search, MessageCircle } from 'lucide-react';
import { FAQS_DATA, PARLOUR_INFO } from '../data/parlourData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [faqSearch, setFaqSearch] = useState<string>('');

  const filteredFaqs = FAQS_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faqs" className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#E0A96D]/15 border border-[#E0A96D]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C88A4B]" />
            <span className="text-xs font-semibold tracking-wide uppercase text-[#8C532B]">
              Got Questions? We Have Answers
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1817]">
            Frequently Asked <span className="text-gradient-rose italic font-normal">Questions</span>
          </h2>
          
          <p className="text-base text-gray-600">
            Everything you need to know about booking appointments, operating hours, and our safety standards in Shukrawar Peth.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search FAQs (e.g., hours, products, bridal)..."
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#FAF8F5] border border-gray-200 rounded-full focus:outline-none focus:border-[#C88A4B] focus:ring-1 focus:ring-[#C88A4B]"
          />
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAF8F5] border-[#E0A96D] shadow-md'
                    : 'bg-white border-gray-200 hover:border-[#E0A96D]/40'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1A1817] flex items-center space-x-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-[#C88A4B]' : 'text-gray-400'}`} />
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-rose-gold-gradient text-white rotate-180' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-200/50 mt-1 animate-in fade-in-50">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#FAF8F5] border border-[#E0A96D]/30 max-w-xl mx-auto space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#1A1817]">Have another question?</h3>
          <p className="text-xs text-gray-600">
            Our beauticians are happy to assist you directly over WhatsApp or phone call.
          </p>
          <div className="flex items-center justify-center space-x-3 pt-1">
            <a
              href={PARLOUR_INFO.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-semibold flex items-center space-x-2 shadow-sm hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:${PARLOUR_INFO.phoneRaw}`}
              className="px-5 py-2.5 rounded-full border border-[#C88A4B] text-[#8C532B] text-xs font-semibold hover:bg-[#E0A96D]/10 transition-colors"
            >
              📞 Call +91 9145000860
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
