import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link,
  useLocation 
} from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Recycle,
  Moon,
  Sun,
  HelpCircle,
  Tag,
  MessageSquare
} from 'lucide-react';

/**
 * GARHWAL TRADERS - MULTI-PAGE REACT PLATFORM
 * State lifting is used here to ensure language and theme context 
 * is preserved across the Routing context.
 */

const translations = {
  en: {
    nav: { home: "Home", faq: "FAQ", pricing: "Pricing", contact: "Contact", login: "Login", services: "Services", ind: "Individuals", gov: "Government" },
    hero: {
      title: <>Turning Today's <span className="text-green-400">Waste</span> <br/>Into Tomorrow's <span className="text-green-400">Wealth</span></>,
      sub: "Garhwal's most trusted digital scrap collection platform. Fair pricing, instant pickup, and responsible recycling at your doorstep.",
      btnLang: "हिन्दी में बदलें",
      btnSell: "Sell Scrap Now"
    },
    scrap: {
      title: "What We Collect",
      sub: "Hover over the materials to learn more about our recycling process.",
      learnMore: "Learn More",
      categories: [
        { title: 'Plastic Waste', desc: 'We collect PET bottles, LDPE containers, and industrial plastic scrap.', details: 'Daily collection available.' },
        { title: 'Metal Scrap', desc: 'Iron, Aluminum, Copper, and Brass. Competitive market rates.', details: 'Heavy machinery picked up via crane-trucks.' },
        { title: 'E-Waste', desc: 'Old computers and appliances handled with certified disposal methods.', details: 'Data destruction certificates provided.' }
      ]
    },
    director: {
      label: "Director's Vision",
      title: "Pioneering a Cleaner Green Future.",
      quote: '"At Garhwal Traders, we don\'t just see waste; we see opportunities. Our mission is to bridge the gap between waste generation and sustainable circular economies."',
      name: "Vikram Singh",
      role: "Founder & Managing Director"
    },
    brands: "Trusted by Industry Leaders",
    footer: {
      desc: "Leading the revolution in scrap management across the region.",
      links: "Quick Links",
      services: "Services",
      contact: "Contact Us",
      address: "Garhwal Traders HQ, Main Market, Pauri, Uttarakhand",
      rights: "All rights reserved."
    }
  },
  hi: {
    nav: { home: "होम", faq: "सामान्य प्रश्न", pricing: "कीमतें", contact: "संपर्क", login: "लॉगिन", services: "सेवाएं", ind: "व्यक्तिगत", gov: "सरकारी" },
    hero: {
      title: <>आज के <span className="text-green-400">कचरे</span> को <br/>कल की <span className="text-green-400">संपत्ति</span> में बदलें</>,
      sub: "गढ़वाल का सबसे भरोसेमंद डिजिटल स्क्रैप संग्रह मंच। उचित मूल्य निर्धारण, त्वरित पिकअप और जिम्मेदार पुनर्चक्रण।",
      btnLang: "Switch to English",
      btnSell: "कबाड़ बेचें"
    },
    scrap: {
      title: "हम क्या एकत्र करते हैं",
      sub: "सामग्री पर माउस ले जाएं अधिक जानने के लिए।",
      learnMore: "और जानें",
      categories: [
        { title: 'प्लास्टिक कचरा', desc: 'हम पीईटी बोतलें और औद्योगिक प्लास्टिक इकट्ठा करते हैं।', details: 'दैनिक संग्रह उपलब्ध है।' },
        { title: 'धातु का कबाड़', desc: 'लोहा, एल्युमीनियम, तांबा और पीतल। बाजार दरें।', details: 'क्रेन-ट्रकों के माध्यम से भारी मशीनरी।' },
        { title: 'ई-कचरा', desc: 'पुराने कंप्यूटर और उपकरणों का सुरक्षित निपटान।', details: 'प्रमाणपत्र प्रदान किए जाते हैं।' }
      ]
    },
    director: {
      label: "निदेशक का दृष्टिकोण",
      title: "एक स्वच्छ हरित भविष्य का नेतृत्व करना।",
      quote: '"गढ़वाल ट्रेडर्स में, हम केवल कचरा नहीं देखते हैं; हम अवसर देखते हैं।"',
      name: "विक्रम सिंह",
      role: "संस्थापक और प्रबंध निदेशक"
    },
    brands: "उद्योग जगत के दिग्गजों द्वारा विश्वसनीय",
    footer: {
      desc: "क्षेत्र भर में स्क्रैप प्रबंधन में क्रांति का नेतृत्व करना।",
      links: "त्वरित संपर्क",
      services: "हमारी सेवाएं",
      contact: "संपर्क करें",
      address: "गढ़वाल ट्रेडर्स मुख्यालय, मुख्य बाजार, पौड़ी, उत्तराखंड",
      rights: "सर्वाधिकार सुरक्षित।"
    }
  }
};

// --- Helper Components ---

const BrandCollabs = ({ t }) => (
  <section className="py-16 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
    <div className="text-center mb-10">
      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">{t.brands}</h3>
    </div>
    <div className="flex space-x-12 animate-marquee whitespace-nowrap">
      {[1,2,3,4,5,6,1,2,3,4,5,6].map((i, idx) => (
        <div key={idx} className="flex items-center justify-center min-w-[150px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
          <div className="h-12 w-32 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center font-bold text-slate-400">BRAND {i}</div>
        </div>
      ))}
    </div>
    <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee { display: flex; width: 200%; animation: marquee 20s linear infinite; }`}</style>
  </section>
);

// --- Page Components ---

const Home = ({ t, toggleLanguage, setView }) => (
  <div className="animate-in fade-in duration-700">
    {/* Hero Section */}
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover scale-105 brightness-50">
          <source src="assets/videos/intro_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-slate-900"></div>
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">{t.hero.title}</h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">{t.hero.sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={toggleLanguage} className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all">
            {t.hero.btnLang}
          </button>
          <Link to="/login" className="px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:bg-green-400 transition-all shadow-xl shadow-green-500/40 flex items-center justify-center gap-2 group">
            {t.hero.btnSell} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>

    {/* Scrap Materials Section */}
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.scrap.title}</h2>
          <p className="text-slate-600 dark:text-slate-400">{t.scrap.sub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.scrap.categories.map((item, idx) => (
            <div key={idx} className="group relative h-96 rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2">
              <img src={`assets/scrap/images/${['plastic', 'metal', 'ewaste'][idx]}.jpg`} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm line-clamp-2 group-hover:line-clamp-none transition-all">{item.desc}</p>
                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-green-400 font-medium text-sm">{item.details}</p>
                    <button className="mt-4 text-white flex items-center gap-2 text-sm font-semibold hover:underline">
                      {t.scrap.learnMore} <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Director Message */}
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="relative w-full md:w-1/2">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-green-600 rounded-2xl"></div>
          <img src="assets/director.jpg" alt="Director" className="relative z-10 w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl grayscale dark:grayscale-[0.5]" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80' }} />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <div className="inline-block p-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg font-bold text-sm tracking-widest uppercase">{t.director.label}</div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">{t.director.title}</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 italic leading-relaxed">{t.director.quote}</p>
          <div className="pt-4">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">{t.director.name}</h4>
            <p className="text-green-600 font-medium">{t.director.role}</p>
          </div>
        </div>
      </div>
    </section>

    <BrandCollabs t={t} />
  </div>
);

const FAQ = ({ t }) => (
  <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 animate-in slide-in-from-bottom-4 duration-500">
    <div className="text-center mb-12">
      <HelpCircle className="mx-auto text-green-600 mb-4" size={48} />
      <h1 className="text-4xl font-bold dark:text-white mb-4">{t.nav.faq}</h1>
      <p className="text-slate-500 dark:text-slate-400">Frequently Asked Questions about Garhwal Traders</p>
    </div>
    <div className="space-y-6">
      {[1,2,3,4].map(i => (
        <div key={i} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-bold dark:text-white mb-2">Question {i}: How do I schedule a pickup?</h3>
          <p className="text-slate-600 dark:text-slate-300">Answer: You can schedule a pickup by clicking "Sell Scrap Now" and logging into your dashboard or calling our support line directly.</p>
        </div>
      ))}
    </div>
  </div>
);

const Pricing = ({ t }) => (
  <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 animate-in slide-in-from-bottom-4 duration-500">
    <div className="text-center mb-12">
      <Tag className="mx-auto text-green-600 mb-4" size={48} />
      <h1 className="text-4xl font-bold dark:text-white mb-4">{t.nav.pricing}</h1>
      <p className="text-slate-500 dark:text-slate-400">Current market rates for common scrap materials</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {['Iron', 'Copper', 'Aluminum'].map(item => (
        <div key={item} className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl text-center border-t-4 border-green-600">
          <h3 className="text-2xl font-bold dark:text-white mb-4">{item}</h3>
          <div className="text-4xl font-black text-green-600 mb-6">₹XX <span className="text-sm text-slate-400">/ kg</span></div>
          <button className="w-full py-3 bg-slate-100 dark:bg-slate-700 dark:text-white rounded-xl font-bold hover:bg-green-600 hover:text-white transition-all">Check Live Rate</button>
        </div>
      ))}
    </div>
  </div>
);

const Contact = ({ t }) => (
  <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 animate-in slide-in-from-bottom-4 duration-500">
    <div className="text-center mb-12">
      <MessageSquare className="mx-auto text-green-600 mb-4" size={48} />
      <h1 className="text-4xl font-bold dark:text-white mb-4">{t.nav.contact}</h1>
      <p className="text-slate-500 dark:text-slate-400">Get in touch with the Garhwal Traders team</p>
    </div>
    <div className="grid md:grid-cols-2 gap-12 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl">
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600"><Phone /></div>
          <div><h4 className="font-bold dark:text-white">Phone</h4><p className="text-slate-500">+91 98765 43210</p></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600"><Mail /></div>
          <div><h4 className="font-bold dark:text-white">Email</h4><p className="text-slate-500">contact@garhwaltraders.in</p></div>
        </div>
      </div>
      <form className="space-y-4">
        <input className="w-full p-4 bg-slate-50 dark:bg-slate-800 dark:text-white rounded-xl border-none" placeholder="Your Name" />
        <textarea className="w-full p-4 bg-slate-50 dark:bg-slate-800 dark:text-white rounded-xl border-none h-32" placeholder="How can we help?"></textarea>
        <button className="w-full py-4 bg-green-600 text-white font-bold rounded-xl shadow-lg">Send Message</button>
      </form>
    </div>
  </div>
);

// --- Main App Component ---

const App = () => {
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const Header = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-slate-200 dark:border-slate-800 py-3 shadow-sm' 
        : 'bg-transparent border-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
            <Recycle className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tight uppercase ${!scrolled ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
            GARHWAL <span className="text-green-600">TRADERS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`font-bold hover:text-green-600 transition-colors ${!scrolled ? 'text-white' : 'text-slate-700 dark:text-slate-300'}`}>{t.nav.home}</Link>
          <Link to="/faq" className={`font-bold hover:text-green-600 transition-colors ${!scrolled ? 'text-white' : 'text-slate-700 dark:text-slate-300'}`}>{t.nav.faq}</Link>
          <Link to="/pricing" className={`font-bold hover:text-green-600 transition-colors ${!scrolled ? 'text-white' : 'text-slate-700 dark:text-slate-300'}`}>{t.nav.pricing}</Link>
          <Link to="/contact" className={`font-bold hover:text-green-600 transition-colors ${!scrolled ? 'text-white' : 'text-slate-700 dark:text-slate-300'}`}>{t.nav.contact}</Link>
          <Link to="/login" className="px-6 py-2.5 rounded-full bg-green-600 text-white font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-600/20">{t.nav.login}</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="dark:text-white" /> : <Menu className={!scrolled ? 'text-white' : 'dark:text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
        <div className="px-6 py-6 flex flex-col gap-4 font-bold">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-slate-700 dark:text-white py-2">{t.nav.home}</Link>
          <Link to="/faq" onClick={() => setIsMenuOpen(false)} className="text-slate-700 dark:text-white py-2">{t.nav.faq}</Link>
          <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="text-slate-700 dark:text-white py-2">{t.nav.pricing}</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-slate-700 dark:text-white py-2">{t.nav.contact}</Link>
          <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full py-3 bg-green-600 text-white rounded-xl text-center">{t.nav.login}</Link>
        </div>
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="bg-slate-900 dark:bg-black text-white pt-20 pb-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Recycle className="text-green-500 w-8 h-8" />
              <span className="text-2xl font-bold">GARHWAL <span className="text-green-600">TRADERS</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed">{t.footer.desc}</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-green-500">{t.footer.links}</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-white">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-white">Our Process</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-green-500">{t.footer.services}</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Household Pickup</li>
              <li>Corporate Solutions</li>
              <li>Government Contracts</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-green-500">{t.footer.contact}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3"><MapPin size={20} className="text-green-500 shrink-0" /><span>{t.footer.address}</span></li>
              <li className="flex items-center gap-4"><Phone size={18} /> +91 98765 43210</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Garhwal Traders. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen font-sans text-slate-900 bg-white dark:bg-slate-950 transition-colors duration-500 flex flex-col">
          <Header />
          
          {/* Main Content Area */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home t={t} toggleLanguage={toggleLanguage} />} />
              <Route path="/faq" element={<FAQ t={t} />} />
              <Route path="/pricing" element={<Pricing t={t} />} />
              <Route path="/contact" element={<Contact t={t} />} />
              <Route path="/login" element={
                <div className="pt-24 min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
                  <div className="bg-white dark:bg-slate-800 p-12 rounded-3xl shadow-2xl w-full max-w-md text-center">
                    <User size={48} className="mx-auto text-green-600 mb-4" />
                    <h2 className="text-2xl font-bold dark:text-white mb-6">Login to Garhwal Traders</h2>
                    <form className="space-y-4">
                      <input className="w-full p-4 bg-slate-50 dark:bg-slate-700 dark:text-white rounded-xl" placeholder="Username" />
                      <input className="w-full p-4 bg-slate-50 dark:bg-slate-700 dark:text-white rounded-xl" type="password" placeholder="Password" />
                      <button className="w-full py-4 bg-green-600 text-white font-bold rounded-xl">Sign In</button>
                    </form>
                  </div>
                </div>
              } />
            </Routes>
          </main>

          <Footer />

          {/* Persistent Dark Mode Button */}
          <button 
            onClick={toggleDarkMode}
            className="fixed bottom-6 left-6 z-[60] w-14 h-14 rounded-full bg-green-600 dark:bg-yellow-500 text-white dark:text-slate-900 shadow-2xl hover:scale-110 active:scale-90 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group overflow-hidden flex items-center justify-center"
          >
            <div className={`transition-all duration-700 transform ${darkMode ? 'rotate-[360deg] scale-0' : 'rotate-0 scale-100'}`}>
              <Moon size={24} fill="currentColor" />
            </div>
            <div className={`absolute transition-all duration-700 transform ${darkMode ? 'rotate-0 scale-100' : 'rotate-[-360deg] scale-0'}`}>
              <Sun size={26} fill="currentColor" />
            </div>
          </button>
        </div>
      </div>
    </Router>
  );
};

export default App;