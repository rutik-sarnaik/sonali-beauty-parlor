import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Clock, Check, Calendar, MessageCircle, Calculator, ChevronRight, Filter } from 'lucide-react';
import { SERVICES_DATA, PARLOUR_INFO } from '../data/parlourData';
import { ServiceCategory, ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceToBook: (serviceName: string, category: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceToBook }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Custom Package Estimator state
  const [packageItems, setPackageItems] = useState<string[]>([]);
  const [showPackageBuilder, setShowPackageBuilder] = useState<boolean>(false);

  const categories: string[] = [
    'All',
    'Bridal & Events',
    'Hair Styling & Treatments',
    'Skin & Facial Care',
    'Essential Care',
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Package builder calculations
  const selectedPackageServices = useMemo(() => {
    return SERVICES_DATA.filter((s) => packageItems.includes(s.id));
  }, [packageItems]);

  const totalPackagePrice = useMemo(() => {
    return selectedPackageServices.reduce((sum, item) => sum + item.numericPrice, 0);
  }, [selectedPackageServices]);

  const togglePackageItem = (id: string) => {
    if (packageItems.includes(id)) {
      setPackageItems(packageItems.filter((item) => item !== id));
    } else {
      setPackageItems([...packageItems, id]);
    }
  };

  const generatePackageWhatsAppLink = () => {
    const listNames = selectedPackageServices.map((s) => s.name).join(', ');
    const msg = `Hi Sonalee Beauty Parlour, I am interested in building a custom package with: ${listNames}. Estimated Total: ₹${totalPackagePrice}. Please assist me with booking!`;
    return `https://wa.me/${PARLOUR_INFO.whatsAppRaw}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="services" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#E0A96D]/15 border border-[#E0A96D]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C88A4B]" />
            <span className="text-xs font-semibold tracking-wide uppercase text-[#8C532B]">
              Premium Salon Treatments
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1817]">
            Our Beauty & Styling <span className="text-gradient-rose italic font-normal">Services</span>
          </h2>
          
          <p className="text-base text-gray-600">
            Decades of expertise paired with certified, high-quality branded skin and hair care products in Shukrawar Peth, Pune.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-rose-gold-gradient text-white shadow-rose-gold'
                    : 'bg-white text-gray-700 hover:bg-[#E0A96D]/10 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-gray-200 rounded-full focus:outline-none focus:border-[#C88A4B] focus:ring-1 focus:ring-[#C88A4B]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Custom Package Estimator Banner Toggle */}
        <div className="mb-10 p-4 rounded-2xl bg-gradient-to-r from-[#1A1817] via-[#2D2825] to-[#1A1817] text-white shadow-xl border border-[#E0A96D]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-3 rounded-xl bg-rose-gold-gradient text-white shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#E0A96D]">
                Build Your Own Custom Beauty Package
              </h3>
              <p className="text-xs text-gray-300">
                Select multiple services below to estimate your total package price & get instant group discount quotes!
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowPackageBuilder(!showPackageBuilder)}
            className="px-5 py-2.5 rounded-full bg-rose-gold-gradient text-white text-xs font-semibold hover:opacity-95 transition-all shadow-rose-gold shrink-0 flex items-center space-x-2"
          >
            <span>{showPackageBuilder ? 'Hide Custom Estimator' : 'Open Package Estimator'}</span>
            <ChevronRight className={`w-4 h-4 transition-transform ${showPackageBuilder ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Package Estimator Drawer / Panel */}
        {showPackageBuilder && (
          <div className="mb-10 p-6 rounded-2xl bg-white border-2 border-[#E0A96D]/40 shadow-xl animate-in fade-in-50">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1A1817]">
                  Custom Package Builder ({packageItems.length} selected)
                </h4>
                <p className="text-xs text-gray-500">
                  Click on any service card below to add/remove it from your custom bundle.
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-500 block">Estimated Total</span>
                <span className="font-serif text-2xl font-bold text-[#C88A4B]">
                  ₹{totalPackagePrice.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {selectedPackageServices.length === 0 ? (
              <p className="text-xs text-center text-gray-400 py-4 italic">
                No services added yet. Click "+ Add to Package" on the service cards below!
              </p>
            ) : (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPackageServices.map((s) => (
                  <span
                    key={s.id}
                    className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#E0A96D]/15 text-[#8C532B] text-xs font-semibold border border-[#E0A96D]/30"
                  >
                    <span>{s.name} (₹{s.numericPrice})</span>
                    <button
                      onClick={() => togglePackageItem(s.id)}
                      className="hover:text-red-600 font-bold ml-1"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}

            {selectedPackageServices.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={generatePackageWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center space-x-2 hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Custom Package to WhatsApp</span>
                </a>
                <button
                  onClick={() => onSelectServiceToBook('Custom Package', 'Bridal & Events')}
                  className="flex-1 py-3 px-4 rounded-xl bg-rose-gold-gradient text-white font-semibold text-xs flex items-center justify-center space-x-2 shadow-rose-gold"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Custom Package Online</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
            <p className="text-gray-500 text-sm">No services found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-[#C88A4B] font-semibold underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const isSelectedInPackage = packageItems.includes(service.id);
              return (
                <div
                  key={service.id}
                  className={`group rounded-2xl bg-white border transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl ${
                    isSelectedInPackage
                      ? 'border-2 border-[#C88A4B] ring-2 ring-[#E0A96D]/20'
                      : 'border-gray-200/80 hover:border-[#E0A96D]/40'
                  }`}
                >
                  <div>
                    {/* Image Header with Badge */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1A1817]/80 text-white text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm border border-[#E0A96D]/30">
                        {service.category}
                      </span>

                      {/* Popular Badge if any */}
                      {service.popular && (
                        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-rose-gold-gradient text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                          Popular Choice
                        </span>
                      )}

                      {/* Duration Tag */}
                      <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-[#E0A96D]" />
                        <span>{service.duration}</span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-lg font-bold text-[#1A1817] group-hover:text-[#C88A4B] transition-colors">
                          {service.name}
                        </h3>
                      </div>

                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features / Benefits highlighted as in prompt specifications */}
                      <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E0A96D]/20 text-[11px] text-[#4A4440] flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#C88A4B] shrink-0 mt-0.5" />
                        <span><strong>Benefit:</strong> {service.features}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Price & Actions */}
                  <div className="p-5 pt-0 border-t border-gray-100 mt-2 flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 uppercase font-medium">Price Highlight</span>
                      <span className="font-serif text-sm font-bold text-[#C88A4B]">
                        {service.priceHighlight}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {/* Package Check Toggle */}
                      <button
                        onClick={() => togglePackageItem(service.id)}
                        className={`py-2 px-3 rounded-xl text-[11px] font-semibold transition-colors flex items-center justify-center space-x-1 ${
                          isSelectedInPackage
                            ? 'bg-amber-100 text-amber-800 border border-amber-300'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <span>{isSelectedInPackage ? '✓ In Package' : '+ Package'}</span>
                      </button>

                      {/* Instant Book Button */}
                      <button
                        onClick={() => onSelectServiceToBook(service.name, service.category)}
                        className="py-2 px-3 rounded-xl bg-rose-gold-gradient text-white text-[11px] font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-1 shadow-sm"
                      >
                        <Calendar className="w-3 h-3" />
                        <span>Book Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
