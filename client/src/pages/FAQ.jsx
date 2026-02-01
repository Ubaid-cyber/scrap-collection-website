import React, { useState, useRef } from 'react';
import { ChevronDown, Languages } from 'lucide-react';

/**
 * FAQ_CONTENT: Modularized content for Garhwal Traders.
 * Includes a technical section for logistics optimization.
 */
const FAQ_CONTENT = {
  en: [
    { 
      _id: '1', 
      question: "How is the pickup route optimized?", 
      answer: "We solve a Capacitated Vehicle Routing Problem (CVRP) using a heuristic approach. For a set of customers $C$, we minimize the cost function $Z = \sum_{i,j \in A} c_{ij} x_{ij}$, subject to vehicle capacity $Q$ and time windows $[e_i, l_i]$, ensuring O(n log n) efficiency for daily scheduling." 
    },
    { _id: '2', question: "What items do you accept?", answer: "We accept a wide range of materials including iron, copper, aluminum, old newspapers, PET bottles, and electronic waste like old laptops or appliances." },
    { _id: '3', question: "Is there a minimum weight requirement?", answer: "For doorstep pickup in residential areas, we typically require at least 20kg of total scrap. For industrial pickups, there is no limit." },
    { _id: '4', question: "How do you handle electronic waste?", answer: "E-waste is handled with extreme care. We ensure that all hazardous materials are extracted safely and that data-bearing devices are physically destroyed before recycling." },
    { _id: '5', question: "When and how will I get paid?", answer: "Payment is made instantly at the time of pickup. Once our team weighs your scrap on our digital scales, you can receive payment via UPI, Bank Transfer, or Cash." },
  ],
  hi: [
    { _id: '1', question: "पिकअप रूट को कैसे अनुकूलित किया जाता है?", answer: "हम एक 'Capacitated Vehicle Routing Problem' (CVRP) को हल करते हैं। ग्राहकों के एक सेट के लिए, हम लागत फ़ंक्शन को कम करते हैं, यह सुनिश्चित करते हुए कि दैनिक शेड्यूलिंग कुशल बनी रहे।" },
    { _id: '2', question: "आप कौन-कौन सी चीज़ें स्वीकार करते हैं?", answer: "हम लोहा, तांबा, एल्युमीनियम, पुराने समाचार पत्र, पीईटी बोतलें और पुराने लैपटॉप या उपकरणों जैसे इलेक्ट्रॉनिक कचरे सहित सामग्री की एक विस्तृत श्रृंखला स्वीकार करते हैं।" },
    { _id: '3', question: "क्या न्यूनतम वजन की कोई आवश्यकता है?", answer: "आवासीय क्षेत्रों में डोरस्टेप पिकअप के लिए, हमें आमतौर पर कम से कम 20 किलो कुल कबाड़ की आवश्यकता होती है।" },
    { _id: '4', question: "आप इलेक्ट्रॉनिक कचरे का प्रबंधन कैसे करते हैं?", answer: "ई-कचरे को अत्यधिक सावधानी से संभाला जाता है। हम यह सुनिश्चित करते हैं कि सभी डेटा वाले उपकरणों को पुनर्चक्रण से पहले नष्ट कर दिया जाए।" },
    { _id: '5', question: "मुझे भुगतान कब और कैसे मिलेगा?", answer: "भुगतान पिकअप के समय तुरंत किया जाता है। वजन के बाद आप यूपीआई, बैंक ट्रांसफर या नकद के माध्यम से भुगतान प्राप्त कर सकते हैं।" },
  ]
};

const FAQItem = ({ faq, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out
        ${isOpen 
          ? 'border-green-500/50 bg-slate-800/50 shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)]' 
          : 'border-white/5 bg-slate-900/40 hover:border-white/10 hover:bg-slate-800/40'
        } backdrop-blur-md`}
    >
      <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-500 to-emerald-500 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className={`text-lg font-medium tracking-wide transition-colors duration-300 ${isOpen ? 'text-green-100' : 'text-slate-300 group-hover:text-white'}`}>
          {faq?.question}
        </span>
        <div className={`relative flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-500 ${isOpen ? 'rotate-180 border-green-500/30 bg-green-500/20 text-green-300' : 'text-slate-400'}`}>
          <ChevronDown className="h-4 w-4" />
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
          <p className="text-base leading-relaxed text-slate-400/90 font-light">
            {faq?.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = ({ language = 'en', setLanguage }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Ensure we fall back to 'en' if the passed language is invalid
  const faqs = FAQ_CONTENT[language] || FAQ_CONTENT['en'];

  return (
    <div className="relative min-h-screen w-full bg-slate-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <button 
              onClick={() => setLanguage && setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-2 px-6 py-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 rounded-full text-green-400 font-bold transition-all transform hover:scale-105"
            >
              <Languages size={18} />
              {language === 'en' ? 'हिन्दी में बदलें' : 'Switch to English'}
            </button>
          </div>
          
          <h2 className="bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-4xl font-extrabold tracking-tight sm:text-6xl text-transparent">
            {language === 'en' ? 'Support Center' : 'सहायता केंद्र'}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs && faqs.map((faq, index) => (
            <FAQItem 
              key={faq._id || index}
              faq={faq}
              isOpen={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;