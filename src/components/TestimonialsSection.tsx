import React, { useState } from 'react';
import { Star, Sparkles, Quote, CheckCircle2, ThumbsUp, PlusCircle, MessageSquare } from 'lucide-react';
import { REVIEWS_DATA, PARLOUR_INFO } from '../data/parlourData';
import { ReviewItem } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // New review form state
  const [newAuthor, setNewAuthor] = useState('');
  const [newService, setNewService] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment) return;

    const newRev: ReviewItem = {
      id: `r-${Date.now()}`,
      author: newAuthor,
      service: newService || 'Beauty Service',
      rating: newRating,
      comment: newComment,
      date: 'Just now',
      verified: true,
      avatarBg: 'bg-[#C88A4B]',
    };

    setReviewsList([newRev, ...reviewsList]);
    setReviewSubmitted(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setReviewSubmitted(false);
      setNewAuthor('');
      setNewService('');
      setNewComment('');
    }, 1500);
  };

  return (
    <section id="testimonials" className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E0A96D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with exact Rating badge */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#E0A96D]/15 border border-[#E0A96D]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C88A4B]" />
            <span className="text-xs font-semibold tracking-wide uppercase text-[#8C532B]">
              Real Feedback from Pune Beauties
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1817]">
            Client Reviews & <span className="text-gradient-rose italic font-normal">Testimonials</span>
          </h2>

          {/* Exact Rating Badge specified in prompt */}
          <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-white border border-[#E0A96D]/30 shadow-md">
            <div className="flex items-center space-x-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="font-serif font-bold text-sm text-[#1A1817]">
              ⭐ 4.8 / 5.0
            </span>
            <span className="text-xs text-gray-500 font-medium">
              (236+ Google & Local Reviews)
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-white p-6 border border-[#E0A96D]/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-8 h-8 text-[#E0A96D]/20 absolute top-4 right-4 group-hover:text-[#E0A96D]/40 transition-colors" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400">{review.date}</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-9 h-9 rounded-full ${
                      review.avatarBg || 'bg-[#C88A4B]'
                    } text-white flex items-center justify-center font-serif font-bold text-sm shadow-sm`}
                  >
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#1A1817] flex items-center space-x-1">
                      <span>{review.author}</span>
                      {review.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline-block" title="Verified Local Client" />
                      )}
                    </h3>
                    <p className="text-[11px] text-[#C88A4B] font-medium">{review.service}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setShowReviewModal(true)}
            className="px-6 py-3 rounded-full bg-white border border-[#C88A4B] text-[#8C532B] hover:bg-[#E0A96D]/10 text-xs font-semibold transition-all flex items-center space-x-2 shadow-sm"
          >
            <PlusCircle className="w-4 h-4 text-[#C88A4B]" />
            <span>Write a Review</span>
          </button>

          <a
            href={PARLOUR_INFO.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-rose-gold-gradient text-white text-xs font-semibold hover:opacity-95 transition-all flex items-center space-x-2 shadow-rose-gold"
          >
            <Star className="w-4 h-4 fill-white" />
            <span>Read 236+ Reviews on Google Maps</span>
          </a>
        </div>

      </div>

      {/* Write a Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#E0A96D]/30 relative animate-in zoom-in-95">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-lg"
            >
              ✕
            </button>

            <h3 className="font-serif text-xl font-bold text-[#1A1817] mb-1">
              Share Your Experience
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              We value your feedback at Sonalee Beauty Parlour!
            </p>

            {reviewSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <h4 className="font-serif text-lg font-bold text-gray-900">Thank You!</h4>
                <p className="text-xs text-gray-600">Your review has been added successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:border-[#C88A4B] focus:ring-1 focus:ring-[#C88A4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Service Availed</label>
                  <input
                    type="text"
                    placeholder="e.g. Hair Spa / Facial / Bridal Makeup"
                    value={newService}
                    onChange={(e) => setNewService(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:border-[#C88A4B] focus:ring-1 focus:ring-[#C88A4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Rating</label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className={`text-xl ${star <= newRating ? 'text-amber-400' : 'text-gray-300'}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Your Review *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your salon experience, cleanliness, and staff behavior..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:border-[#C88A4B] focus:ring-1 focus:ring-[#C88A4B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-rose-gold-gradient text-white text-xs font-semibold shadow-rose-gold hover:opacity-95"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
