export type ServiceCategory = 'Bridal & Events' | 'Hair Styling & Treatments' | 'Skin & Facial Care' | 'Essential Care';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  name: string;
  description: string;
  features: string;
  priceHighlight: string;
  numericPrice: number;
  duration: string;
  popular?: boolean;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Hair' | 'Skin' | 'Nails' | 'All';
  image: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
  avatarBg?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email?: string;
  serviceCategory: string;
  selectedServices: string[];
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
