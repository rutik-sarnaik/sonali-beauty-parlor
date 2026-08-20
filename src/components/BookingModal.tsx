import React, { useState } from 'react';
import { X, Calendar, Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { PARLOUR_INFO, SERVICES_DATA } from '../data/parlourData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialCategory?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialCategory = 'Bridal & Events',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [selectedService, setSelectedService] = useState(initialService || '');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00 AM');
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const msg = `Hi Sonalee Beauty Parlour! I want to book an appointment:\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n💅 Service: ${selectedService || category}\n📅 Date: ${date || 'Earliest'}\n⏰ Time: ${time}`;

    setWaLink(`https://wa.me/${PARLOUR_INFO.whatsAppRaw}?text=${encodeURIComponent(msg)}`);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in-50">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E0A96D]/40 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-4 border-b border-gray-100 pb-4">
          <div className="w-10 h-10 rounded-full bg-rose-gold-gradient text-white flex items-center justify-center font-bold">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-[#1A1817]">
              Instant Appointment Booking
            </h3>
            <p className="text-xs text-gray-500">
              Sonalee Beauty Parlour • Shukrawar Peth, Pune
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-xl font-bold text-gray-900">
              Booking Submitted!
            </h4>
            <p className="text-xs text-gray-600">
              We have reserved your slot preference for <strong className="text-gray-900">{name}</strong>.
            </p>
            <div className="flex flex-col space-y-2 pt-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center space-x-2 shadow-sm hover:bg-emerald-700"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp Instantly</span>
              </a>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-full border border-gray-300 text-gray-700 font-semibold text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sneha Kulkarni"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-gray-200 rounded-xl focus:border-[#C88A4B] focus:ring-1 focus:ring-[#C88A4B]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9145000860"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-gray-200 rounded-xl focus:border-[#C88A4B] focus:ring-1 focus:ring-[#C88A4B]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-gray-200 rounded-xl focus:border-[#C88A4B]"
                >
                  <option value="Bridal & Events">Bridal & Events</option>
                  <option value="Hair Styling & Treatments">Hair Styling</option>
                  <option value="Skin & Facial Care">Skin & Facial</option>
                  <option value="Essential Care">Essential Care</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Specific Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-gray-200 rounded-xl focus:border-[#C88A4B]"
                >
                  <option value="">-- Choose Treatment --</option>
                  {SERVICES_DATA.filter((s) => s.category === category).map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-gray-200 rounded-xl focus:border-[#C88A4B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Time Slot
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-gray-200 rounded-xl focus:border-[#C88A4B]"
                >
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="01:30 PM">01:30 PM</option>
                  <option value="03:30 PM">03:30 PM</option>
                  <option value="05:30 PM">05:30 PM</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-rose-gold-gradient text-white font-semibold text-xs shadow-rose-gold hover:opacity-95 transition-opacity flex items-center justify-center space-x-2 mt-2"
            >
              <Send className="w-4 h-4" />
              <span>Confirm Appointment Slot</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
