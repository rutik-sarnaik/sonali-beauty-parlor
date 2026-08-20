import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Calendar, Send, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { PARLOUR_INFO, SERVICES_DATA } from '../data/parlourData';
import { BookingFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: { name: string; category: string } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    serviceCategory: 'Bridal & Events',
    selectedServices: [],
    preferredDate: '',
    preferredTime: '11:00 AM',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceCategory: preselectedService.category,
        selectedServices: [preselectedService.name],
      }));
    }
  }, [preselectedService]);

  const timeSlots = [
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '01:30 PM',
    '02:30 PM',
    '03:30 PM',
    '04:30 PM',
    '05:30 PM',
  ];

  const handleCategoryChange = (cat: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceCategory: cat,
      selectedServices: [],
    }));
  };

  const handleServiceToggle = (serviceName: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceName);
      if (exists) {
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((s) => s !== serviceName),
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, serviceName],
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const servicesText =
      formData.selectedServices.length > 0
        ? formData.selectedServices.join(', ')
        : formData.serviceCategory;

    const msg = `Hi Sonalee Beauty Parlour! I would like to book an appointment:\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n💅 Service: ${servicesText}\n📅 Date: ${formData.preferredDate || 'Earliest available'}\n⏰ Time: ${formData.preferredTime}\n📝 Notes: ${formData.notes || 'None'}`;

    const waUrl = `https://wa.me/${PARLOUR_INFO.whatsAppRaw}?text=${encodeURIComponent(msg)}`;
    setWhatsappRedirectUrl(waUrl);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceCategory: 'Bridal & Events',
      selectedServices: [],
      preferredDate: '',
      preferredTime: '11:00 AM',
      notes: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#E0A96D]/15 border border-[#E0A96D]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C88A4B]" />
            <span className="text-xs font-semibold tracking-wide uppercase text-[#8C532B]">
              Visit Us or Book Online
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1817]">
            Contact Us & <span className="text-gradient-rose italic font-normal">Appointment Booking</span>
          </h2>

          <p className="text-base text-gray-600">
            Located at Panganti Chowk, Shukrawar Peth, Pune. Book your spot or reach out to our beauty specialists today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Location & Info Block */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E0A96D]/30 shadow-lg space-y-6">
              
              <h3 className="font-serif text-2xl font-bold text-[#1A1817] pb-3 border-b border-gray-100">
                Parlour Information
              </h3>

              {/* Exact Location & Direct Info Block as requested */}
              <div className="space-y-5">
                
                {/* 📍 Address */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#E0A96D]/15 text-[#C88A4B] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C5A4B]">
                      📍 Address
                    </h4>
                    <p className="text-sm text-gray-800 font-medium mt-0.5">
                      923, Panganti Chowk, Shukrawar Peth, Pune, Maharashtra 411002
                    </p>
                  </div>
                </div>

                {/* 📞 Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#E0A96D]/15 text-[#C88A4B] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C5A4B]">
                      📞 Phone
                    </h4>
                    <a
                      href={`tel:${PARLOUR_INFO.phoneRaw}`}
                      className="text-base font-bold text-[#C88A4B] hover:underline block mt-0.5"
                    >
                      +91 9145000860
                    </a>
                  </div>
                </div>

                {/* ⏰ Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#E0A96D]/15 text-[#C88A4B] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C5A4B]">
                      ⏰ Operational Hours
                    </h4>
                    <p className="text-sm text-gray-800 font-medium mt-0.5">
                      Tue – Sun: 10:30 AM – 6:30 PM (Closed Mon)
                    </p>
                  </div>
                </div>

                {/* 💬 WhatsApp Direct Link */}
                <div className="flex items-start space-x-3.5 pt-2">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      💬 Direct WhatsApp
                    </h4>
                    <a
                      href={PARLOUR_INFO.whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-700 hover:underline inline-flex items-center space-x-1 mt-0.5"
                    >
                      <span>Click here to chat instantly</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

              {/* View on Google Maps Link Button */}
              <div className="pt-2">
                <a
                  href={PARLOUR_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-[#C88A4B] text-[#8C532B] font-semibold text-xs hover:bg-[#E0A96D]/10 transition-colors flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-4 h-4 text-[#C88A4B]" />
                  <span>🗺️ View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Google Map Embedded Frame */}
            <div className="rounded-3xl overflow-hidden border border-[#E0A96D]/30 shadow-md h-64 bg-gray-200 relative">
              <iframe
                title="Sonalee Beauty Parlour Location Map Shukrawar Peth Pune"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3768164098593!2d73.8540854!3d18.5118742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06830588691%3A0xb36f4553d10078b5!2sShukrawar%20Peth%2C%20Pune%2C%20Maharashtra%20411002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

          </div>

          {/* Right Column: High-Converting Appointment Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#E0A96D]/30 shadow-xl relative">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1A1817]">
                    Book Your Appointment
                  </h3>
                  <p className="text-xs text-gray-500">
                    Fill out the form below for instant salon confirmation & WhatsApp reminder.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-rose-gold-gradient text-white flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in-50">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-bold text-gray-900">
                      Appointment Booking Requested!
                    </h4>
                    <p className="text-xs text-gray-600 max-w-md mx-auto">
                      Thank you, <strong className="text-gray-900">{formData.name}</strong>. We have received your booking request for{' '}
                      <span className="text-[#C88A4B] font-semibold">{formData.preferredDate || 'your preferred date'} at {formData.preferredTime}</span>.
                    </p>
                  </div>

                  {/* Immediate Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 max-w-md mx-auto">
                    <a
                      href={whatsappRedirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center space-x-2 shadow-md hover:bg-emerald-700 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirm via WhatsApp Now</span>
                    </a>

                    <button
                      onClick={resetForm}
                      className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold text-xs hover:bg-gray-50 transition-colors"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Category Selection */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      1. Select Category *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        'Bridal & Events',
                        'Hair Styling & Treatments',
                        'Skin & Facial Care',
                        'Essential Care',
                      ].map((cat) => (
                        <button
                          type="button"
                          key={cat}
                          onClick={() => handleCategoryChange(cat)}
                          className={`p-2.5 rounded-xl text-[11px] font-semibold border transition-all text-center ${
                            formData.serviceCategory === cat
                              ? 'bg-rose-gold-gradient text-white border-transparent shadow-sm'
                              : 'bg-[#FAF8F5] text-gray-700 border-gray-200 hover:border-[#E0A96D]'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Specific Services Checkboxes */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      2. Choose Specific Treatments (Optional)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto p-2 bg-[#FAF8F5] rounded-xl border border-gray-200">
                      {SERVICES_DATA.filter((s) => s.category === formData.serviceCategory).map((s) => {
                        const isChecked = formData.selectedServices.includes(s.name);
                        return (
                          <label
                            key={s.id}
                            className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer text-xs transition-colors ${
                              isChecked ? 'bg-[#E0A96D]/20 font-semibold text-[#8C532B]' : 'hover:bg-white text-gray-700'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleServiceToggle(s.name)}
                              className="rounded text-[#C88A4B] focus:ring-[#C88A4B]"
                            />
                            <span>{s.name}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Radhika Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#C88A4B] focus:ring-1 focus:ring-[#C88A4B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9145000860"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#C88A4B] focus:ring-1 focus:ring-[#C88A4B]"
                      />
                    </div>
                  </div>

                  {/* Preferred Date & Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#C88A4B] focus:ring-1 focus:ring-[#C88A4B]"
                      />
                      <span className="text-[10px] text-gray-400 mt-0.5 block">Closed on Mondays</span>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#C88A4B] focus:ring-1 focus:ring-[#C88A4B]"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Special Requirements / Skin Concerns
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g., Sensitive skin, pre-bridal inquiry, special event date..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#C88A4B] focus:ring-1 focus:ring-[#C88A4B]"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-rose-gold-gradient text-white font-semibold text-xs shadow-rose-gold hover:opacity-95 transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Confirm Appointment</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
