import React, { useState } from 'react';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/parlourData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Bridal' | 'Hair' | 'Skin' | 'Nails'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Bridal', 'Hair', 'Skin', 'Nails'] as const;

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    if (activeTab === 'All') return true;
    return item.category === activeTab;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#E0A96D]/15 border border-[#E0A96D]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C88A4B]" />
            <span className="text-xs font-semibold tracking-wide uppercase text-[#8C532B]">
              Real Results & Transformations
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1817]">
            Photo Gallery <span className="text-gradient-rose italic font-normal">Showcase</span>
          </h2>
          
          <p className="text-base text-gray-600">
            Explore authentic transformations created by our expert team for brides and clients in Shukrawar Peth, Pune.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === cat
                  ? 'bg-rose-gold-gradient text-white shadow-rose-gold'
                  : 'bg-[#FAF8F5] text-gray-700 hover:bg-[#E0A96D]/10 border border-gray-200'
              }`}
            >
              {cat === 'Bridal'
                ? 'Bridal Makeovers'
                : cat === 'Hair'
                ? 'Hair Straightening & Spa'
                : cat === 'Skin'
                ? 'Facial Glow Results'
                : cat === 'Nails'
                ? 'Nail & Pedicure Care'
                : 'All Works'}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 aspect-[3/4]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* View Icon Button */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              {/* Caption Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E0A96D] bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm border border-[#E0A96D]/30 inline-block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-base font-bold leading-tight group-hover:text-[#F3D0A3] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-300 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-in fade-in-50">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Description Container */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative rounded-2xl overflow-hidden max-h-[75vh] shadow-2xl border border-white/20 bg-gray-900">
              <img
                src={filteredGallery[lightboxIndex].image}
                alt={filteredGallery[lightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="mt-4 text-center max-w-xl text-white space-y-1">
              <span className="text-xs uppercase font-bold text-[#E0A96D] tracking-widest">
                {filteredGallery[lightboxIndex].category} Result
              </span>
              <h3 className="font-serif text-2xl font-bold">
                {filteredGallery[lightboxIndex].title}
              </h3>
              <p className="text-xs text-gray-300">
                {filteredGallery[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
