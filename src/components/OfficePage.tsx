import React, { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin, Phone, Mail, Star, Calendar, Video, MessageSquare, Send, ChevronDown, Clock, MessageCircle } from 'lucide-react';
// import { ArrowLeft, ChevronLeft, ChevronRight, MapPin, Phone, Mail, Star, Calendar, Video, MessageSquare, Send, ChevronDown, MessageCircle } from 'lucide-react';
import anime from 'animejs';

interface OfficeData {
  country: string;
  flag: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  bannerImage: string;
  galleryImages: string[];
}

interface ConsultationCard {
  id: string;
  title: string;
  rating: number;
  duration: string;
  type: string;
  originalPrice?: string;
  price: string;
  popular?: boolean;
  icon: 'calendar' | 'video' | 'message';
}

const consultationCards: ConsultationCard[] = [
  {
    id: 'consultation',
    title: '1:1 Online Video Meeting Consultation',
    rating: 5,
    duration: '15 mins',
    type: 'Video Meeting',
    originalPrice: '€15',
    price: 'Free for 1st time',
    icon: 'calendar',
    popular: true
  },
  {
    id: 'career',
    title: '1:1 Physical Face to Face Consultation',
    rating: 5,
    duration: '30 mins',
    type: 'In-Person Meeting',
    price: '€20',
    popular: true,
    icon: 'calendar'
  },
  {
    id: 'visa',
    title: '1:1 Voice Call Consultation',
    rating: 5,
    duration: '15 mins',
    type: 'Voice Call',
    price: '€10',
    icon: 'video'
  },
  {
    id: 'priority',
    title: 'Priority DM',
    rating: 5,
    duration: 'Replies in 2 days',
    type: 'Priority DM',
    price: '€5',
    icon: 'message'
  }
];

const officesData: Record<string, OfficeData> = {
  pakistan: {
    country: 'Pakistan',
    flag: '/images/pk.jpg',
    city: 'Karachi',
    address: 'Karachi, Pakistan',
    phone: '+92-3191233945',
    email: 'ahan@theyellowsolutions.com',
    whatsapp: '+923191233945',
    description: 'Our Pakistan office serves as our main development hub in South Asia, housing our talented team of developers, designers, and project managers who work on cutting-edge software solutions.',
    bannerImage: '/images/banner_pk.webp',
    galleryImages: []
  },
  germany: {
    country: 'Germany',
    flag: '/images/de.jpg',
    city: 'Berlin',
    address: 'Mollwitzstraße 3, Berlin, Germany',
    phone: '+49-176-20189563',
    email: 'huzaifa@theyellowsolutions.com',
    whatsapp: '+4917620189563',
    description: 'Our German office focuses on European operations and client services, providing localized support and fostering relationships with our European clientele.',
    bannerImage: '/images/banner_germany.webp',
    galleryImages: [
      '/images/germany/IMG_7035.webp',
      '/images/germany/IMG_7033.webp',
      '/images/germany/IMG_7032.webp',
      '/images/germany/IMG_7037.webp',
      '/images/germany/IMG_7038.webp',
      '/images/germany/IMG_7040.webp'
    ]
  }
};

const faqs = [
  {
    question: 'What services does your Pakistan office provide?',
    answer: 'Our Pakistan office is our main development hub, focusing on software development, UI/UX design, and project management.'
  },
  {
    question: 'Can I visit the Karachi office in person?',
    answer: 'Yes, our Karachi office welcomes clients and partners. Please contact us beforehand to schedule a meeting.'
  },
  {
    question: 'Do you offer job opportunities in Pakistan?',
    answer: 'Yes, we regularly hire talented developers, designers, and sales agents. Keep an eye on our careers page for openings.'
  },
  {
    question: 'How can I contact the Pakistan office?',
    answer: 'You can reach us via phone, email, or by filling out the contact form on our website.'
  }
];

const OfficePage: React.FC = () => {
  const { country } = useParams<{ country: string }>();
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showWhatsAppMessage, setShowWhatsAppMessage] = useState(true);
  // Gallery state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 0; i < 12; i++) {
      const startHour = (18 + i) % 24;
      const endHour = (19 + i) % 24;

      const formatHour = (hour: number) => {
        if (hour === 0) return '12am';
        if (hour < 12) return `${hour}am`;
        if (hour === 12) return '12pm';
        return `${hour - 12}pm`;
      };

      const startFormatted = formatHour(startHour);
      const endFormatted = formatHour(endHour);

      slots.push(`${startFormatted}-${endFormatted}`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();


  const officeData = country ? officesData[country] : null;


  useEffect(() => {
    // Hide WhatsApp message after 4 seconds
    const timer = setTimeout(() => {
      setShowWhatsAppMessage(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    if (!officeData) {
      navigate('/');
      return;
    }
    anime({
      targets: '.office-content',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      easing: 'easeOutExpo'
    });
  }, [officeData, navigate]);


  const handleWhatsAppClick = () => {
    if (officeData) {
      const message = encodeURIComponent(`Hello! I'm interested in your services at the ${officeData.city} office.`);
      window.open(`https://wa.me/${officeData.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
    }
  };

  const handleCardSelect = (cardId: string) => {
    setSelectedCard(cardId);
    setSubmitted(false);
  };

const handleTimeSlotSelect = (slot: string) => {
    setSelectedTimeSlot(slot);
  };

const handleBookNow = () => {
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const subject = `Meeting - ${dateStr} ${selectedTimeSlot}`;

    // Navigate to home page with pre-filled subject
    navigate(`/?subject=${encodeURIComponent(subject)}#contact`);
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!selectedCard || !formData.email) return;

  setIsSubmitting(true);

  const selectedService = consultationCards.find(card => card.id === selectedCard);
  const consultationTitle = selectedService ? selectedService.title : '';

  const googleFormData = new FormData();
  googleFormData.append('entry.780593269', consultationTitle); // Title auto-filled
  googleFormData.append('entry.1734008313', formData.email);   // Email

  try {
    await fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLSc5bBzu4eyCEpBOlzbB_uDlPykE_4sK0dfoeXJvHvj3D_YaeQ/formResponse',
      {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormData,
      }
    );

    setSubmitted(true);
    setFormData({ title: '', email: '' });

    setTimeout(() => {
      setSubmitted(false);
      setSelectedCard(null);
    }, 5000);
  } catch (error) {
    console.error('Form submission failed:', error);
    setSubmitted(true);
    setFormData({ title: '', email: '' });

    setTimeout(() => {
      setSubmitted(false);
      setSelectedCard(null);
    }, 5000);
  } finally {
    setIsSubmitting(false);
  }
};




// Meeting form submission (Pakistan)
  const handleMeetingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTimeSlot || !formData.email) return;

    setIsSubmitting(true);

    const googleFormData = new FormData();
    googleFormData.append('entry.915107989', selectedTimeSlot); // Slot auto-filled
    googleFormData.append('entry.1336949324', formData.email);   // Email

    try {
      await fetch(
        'https://docs.google.com/forms/d/1VkBXXuZet_IHG2VJOQxmQD-c56SEFbiI0gAfyWxVqM8/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          body: googleFormData,
        }
      );

      setSubmitted(true);
      setFormData({ title: '', email: '' });
      setTimeout(() => {
        setSubmitted(false);
        setSelectedTimeSlot(null);
      }, 5000);
    } catch (error) {
      console.error('Form submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getIcon = (iconType: 'calendar' | 'video' | 'message') => {
    switch (iconType) {
      case 'calendar':
        return <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />;
      case 'video':
        return <Video className="w-5 h-5 text-gray-500 dark:text-gray-400" />;
      case 'message':
        return <MessageSquare className="w-5 h-5 text-gray-500 dark:text-gray-400" />;
      default:
        return <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />;
    }
  };

  const nextImage = () => {
    if (officeData) {
      setCurrentImageIndex((prev) => (prev + 1) % officeData.galleryImages.length);
    }
  };

  const prevImage = () => {
    if (officeData) {
      setCurrentImageIndex((prev) => (prev - 1 + officeData.galleryImages.length) % officeData.galleryImages.length);
    }
  };

  if (!officeData) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-24">
      {/* Banner Section */}
      <section className="w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-cover">
        <img
          src={officeData.bannerImage}
          alt={`${officeData.country} Office Banner`}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Office Information */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="office-content opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                <span className="heading">Our {officeData.city} Office</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {officeData.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">{officeData.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">{officeData.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">{officeData.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="office-content opacity-0">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={officeData.flag}
                  alt={`${officeData.country} Flag`}
                  className="w-full h-48 object-cover opacity-70"
                />
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    <span className="heading">{officeData.country}</span>
                  </h3>
                  <p className="text-primary font-semibold">{officeData.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Services Section - Only for Germany */}
      {country === 'germany' && (
        <>
          <section className="section-padding bg-gray-50 dark:bg-gray-900">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                <span className="heading">Consultation</span> <span className="gradient-text">Services</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {consultationCards.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => handleCardSelect(card.id)}
                    className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                      selectedCard === card.id 
                        ? 'border-primary shadow-lg scale-105' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary/30'
                    }`}
                  >
                    {card.popular && (
                      <div className="absolute -top-3 left-6">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{card.rating}</span>
                      </div>
                      {selectedCard === card.id && (
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                      <span className="heading">{card.title}</span>
                    </h3>

                    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {getIcon(card.icon)}
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{card.duration}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{card.type}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {card.originalPrice && (
                            <p className="text-sm text-gray-400 line-through">{card.originalPrice}</p>
                          )}
                          <div className="flex items-center">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">{card.price}</span>
                            <ArrowLeft className="w-4 h-4 ml-2 text-gray-400 rotate-180" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
     
              {selectedCard && (
  <div className="max-w-md mx-auto mt-12 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
    {submitted ? (
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
          Booking Request Sent!
        </h3>
        <p className="text-green-600 dark:text-green-300">
          We'll contact you soon to confirm your consultation.
        </p>
      </div>
    ) : (
      <form onSubmit={handleSubmit}>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Book: {consultationCards.find(card => card.id === selectedCard)?.title}
        </h3>

        {/* Only Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Your Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setSelectedCard(null)}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting || !formData.email}
            className="flex-1 btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              <span className="inline-flex items-center">
                <span>Send Request</span>
                <Send className="ml-2 w-4 h-4" />
              </span>
            )}
          </button>
        </div>
      </form>
    )}
  </div>
)}
            </div>
          </section>


          
          {/* Gallery Section - Only Germany */}
<section className="section-padding">
  <div className="container">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
      <span className="heading">Office</span>{' '}
      <span className="gradient-text">Gallery</span>
    </h2>

    <div className="relative max-w-4xl mx-auto">
      {/* Image Viewer */}
      <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
        <img
          src={officeData.galleryImages[currentImageIndex]}
          alt={`${officeData.country} Office Gallery ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
          loading="lazy"
        />

        {/* Prev Button */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {officeData.galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImageIndex
                ? 'bg-primary'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
</section>
        </>
      )}



      


      {/* Meeting Booking Section - Only for Pakistan */}
{country === 'pakistan' && (
  <section className="section-padding bg-white dark:bg-gray-800">
    <div className="container max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        <span className="heading">Book a Free</span> <span className="gradient-text">Meeting</span>
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 text-sm md:text-base">
        (Choose preferable slot, final slot will be decided by us and we will contact you by email)
      </p>

      {/* Calendar Date Picker */}
      <div className="mb-6 text-center">
        <label htmlFor="meetingDate" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Select a Date
        </label>
        <input
          type="date"
          id="meetingDate"
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => {
            const selected = new Date(e.target.value);
            const day = selected.getDay(); // 0=Sun,6=Sat
            if (day === 0 || day === 6) {
              alert("Please select a weekday (Mon–Fri).");
              e.target.value = "";
              return;
            }
            setFormData(prev => ({ ...prev, date: e.target.value }));
            setSelectedTimeSlot(null); // reset slot if new date chosen
          }}
        />
      </div>

      {/* Slot buttons */}
      {/* Slot buttons - Always visible */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
  {timeSlots.map((slot, index) => (
    <button
      key={index}
      onClick={() => {
        if (!formData.date) {
          alert("Please select a date first.");
          return;
        }
        setSelectedTimeSlot(`${formData.date}-${slot}`);
      }}
      className={`p-3 md:p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
        selectedTimeSlot === `${formData.date}-${slot}`
          ? 'border-primary bg-primary text-white shadow-lg'
          : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10'
      }`}
    >
      <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
      <span className="text-sm md:text-base font-medium">{slot}</span>
    </button>
  ))}
</div>


      {/* Form after selecting slot */}
      {selectedTimeSlot && (
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          {submitted ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                Meeting Request Sent!
              </h3>
              <p className="text-green-600 dark:text-green-300">
                We'll contact you soon to confirm your meeting.
              </p>
            </div>
          ) : (
            <form onSubmit={handleMeetingSubmit}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Selected Slot: {selectedTimeSlot}
              </h3>

              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedTimeSlot(null)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.email}
                  className="flex-1 btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  </section>
)}


      



      {/* FAQ Section - Only for Pakistan */}
      {country === 'pakistan' && (
        <section className="section-padding bg-gray-50 dark:bg-gray-900">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              <span className="heading">Frequently Asked</span> <span className="gradient-text">Questions</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}



      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Message Tooltip */}
        <div 
          className={`absolute bottom-16 right-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 whitespace-nowrap transition-all duration-500 ${
            showWhatsAppMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <span className="text-sm font-medium">WhatsApp Us</span>
          {/* Arrow pointing down */}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800"></div>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        </button>
      </div>
    </div>
  );
};

export default OfficePage;















