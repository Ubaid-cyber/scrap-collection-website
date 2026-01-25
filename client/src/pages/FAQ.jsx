import React, { useState, useEffect, useRef } from 'react';

// Optional: Default data to make it look cool immediately if fetch fails
const MOCK_FAQS = [
  { _id: '1', question: "What makes this product different?", answer: "We utilize a proprietary compression algorithm that reduces server load by 40% while maintaining 99.99% uptime. It's built for scale from day one." },
  { _id: '2', question: "Can I cancel my subscription?", answer: "Absolutely. You can pause or cancel your subscription at any time directly from your dashboard. No hidden fees, no phone calls required." },
  { _id: '3', question: "Is technical support included?", answer: "Yes, 24/7 priority support is included with every Enterprise plan. Standard plans include email support with a guaranteed 4-hour response time." },
  { _id: '4', question: "Do you offer community discounts?", answer: "We support open source! If you are a student or a non-profit organization, reach out to our team for a special 50% lifetime discount." },
];

const FAQItem = ({ faq, isOpen, onClick, index }) => {
  const contentRef = useRef(null);

  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out
        ${isOpen 
          ? 'border-indigo-500/50 bg-slate-800/50 shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)]' 
          : 'border-white/5 bg-slate-900/40 hover:border-white/10 hover:bg-slate-800/40'
        } backdrop-blur-md`}
    >
      {/* Active Glow Effect Stick */}
      <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className={`text-lg font-medium tracking-wide transition-colors duration-300 ${isOpen ? 'text-indigo-100' : 'text-slate-300 group-hover:text-white'}`}>
          {faq.question}
        </span>
        
        {/* Animated Icon */}
        <div className={`relative flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-500 ${isOpen ? 'rotate-180 border-indigo-500/30 bg-indigo-500/20 text-indigo-300' : 'text-slate-400'}`}>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div
        ref={contentRef}
        style={{ 
          height: isOpen ? contentRef.current?.scrollHeight : 0,
          opacity: isOpen ? 1 : 0
        }}
        className="overflow-hidden transition-[height,opacity] duration-500 ease-in-out"
      >
        <div className="px-6 pb-6 pt-0">
          <p className="text-base leading-relaxed text-slate-400/90">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [faqs, setFaqs] = useState(MOCK_FAQS); // Default to mock data first
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/faqs');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        // Only set data if we actually got an array back, else keep Mocks
        if (Array.isArray(data) && data.length > 0) setFaqs(data);
      } catch (err) {
        console.log("Using mock data (API might be down):", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen w-full bg-slate-950 px-6 py-24 sm:py-32 lg:px-8">
      
      {/* Background Decor: Cyberpunk Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
            Support & Details
          </span>
          <h2 className="bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about the product and how it operates. 
            Can't find the answer? <span className="text-indigo-400 hover:text-indigo-300 cursor-pointer underline decoration-indigo-500/30 underline-offset-4 transition-colors">Chat with us</span>.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-10">
          {loading ? (
             // Simple Loading Skeleton
             [1,2,3].map((i) => (
                <div key={i} className="h-20 w-full animate-pulse rounded-2xl bg-slate-900/50 border border-white/5" />
             ))
          ) : (
            faqs.map((faq, index) => (
              <FAQItem 
                key={faq._id || index}
                index={index}
                faq={faq}
                isOpen={activeIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;