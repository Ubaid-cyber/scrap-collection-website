import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link
} from 'react-router-dom';
import Contact from "./pages/Contact.jsx"
import { 
  Menu, 
  X, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Recycle, 
  Moon, 
  Sun, 
  MessageSquare,
  ShieldCheck,
  Send
} from 'lucide-react';

/**
 * GARHWAL TRADERS - STREAMLINED PLATFORM
**/

const translations = {
  en: {
    nav: { home: "Home", contact: "Contact", login: "Login" },
    hero: {
      title: <>Turning Today's <span className="text-green-400">Waste</span> <br/>Into Tomorrow's <span className="text-green-400">Wealth</span></>,
      sub: "Garhwal's most trusted digital scrap collection platform. Fair pricing, instant pickup, and responsible recycling at your doorstep.",
      btnLang: "हिन्दी में बदलें",
      btnAction: "Get in Touch"
    },
    director: {
      label: "Director's Vision",
      title: "Pioneering a Cleaner Green Future.",
      quote: '"At Garhwal Traders, we don\'t just see waste; we see opportunities. Our mission is to bridge the gap between waste generation and sustainable circular economies."',
      name: "Vikram Singh",
      role: "Founder & Managing Director"
    },
    brands: "Trusted by Industry Leaders",
  },
  hi: {
    nav: { home: "होम", contact: "संपर्क", login: "लॉगिन" },
    hero: {
      title: <>आज के <span className="text-green-400">कचरे</span> को <br/>कल की <span className="text-green-400">संपत्ति</span> में बदलें</>,
      sub: "गढ़वाल का सबसे भरोसेमंद डिजिटल स्क्रैप संग्रह मंच। उचित मूल्य निर्धारण, त्वरित पिकअप और जिम्मेदार पुनर्चक्रण।",
      btnLang: "Switch to English",
      btnAction: "संपर्क करें"
    },
    director: {
      label: "निदेशक का दृष्टिकोण",
      title: "एक स्वच्छ हरित भविष्य का नेतृत्व करना।",
      quote: '"गढ़वाल ट्रेडर्स में, हम केवल कचरा नहीं देखते हैं; हम अवसर देखते हैं।"',
      name: "Vikram Singh",
      role: "संस्थापक और प्रबंध निदेशक"
    },
    brands: "उद्योग जगत के दिग्गजों द्वारा विश्वसनीय",
  }
};

// const Contact = () => (
//   <div className="pt-32 pb-20 px-6 min-h-screen bg-slate-50 dark:bg-slate-950">
//     <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
//       <div className="space-y-8">
//         <h2 className="text-4xl font-black text-slate-900 dark:text-white">Let's connect.</h2>
//         <p className="text-lg text-slate-600 dark:text-slate-400">Ready to recycle? Or have questions about our bulk industrial scrap services? Drop us a message.</p>
        
//         <div className="space-y-6">
//           <div className="flex items-center gap-4 group">
//             <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600">
//               <Phone size={24} />
//             </div>
//             <div>
//               <p className="text-sm font-bold text-slate-400 uppercase">Call Us</p>
//               <p className="text-lg font-bold dark:text-white">+91 98765 43210</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4 group">
//             <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600">
//               <Mail size={24} />
//             </div>
//             <div>
//               <p className="text-sm font-bold text-slate-400 uppercase">Email</p>
//               <p className="text-lg font-bold dark:text-white">hello@garhwaltraiders.com</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4 group">
//             <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600">
//               <MapPin size={24} />
//             </div>
//             <div>
//               <p className="text-sm font-bold text-slate-400 uppercase">Location</p>
//               <p className="text-lg font-bold dark:text-white">Pauri Market, Uttarakhand</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
//         <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//           <div className="grid grid-cols-2 gap-4">
//             <input className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border-none focus:ring-2 focus:ring-green-500 transition-all dark:text-white" placeholder="First Name" />
//             <input className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border-none focus:ring-2 focus:ring-green-500 transition-all dark:text-white" placeholder="Last Name" />
//           </div>
//           <input className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border-none focus:ring-2 focus:ring-green-500 transition-all dark:text-white" placeholder="Email Address" type="email" />
//           <textarea className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border-none focus:ring-2 focus:ring-green-500 transition-all dark:text-white h-32" placeholder="Your Message"></textarea>
//           <button className="w-full py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all flex items-center justify-center gap-2">
//             Send Message <Send size={20} />
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
// );

const BrandCollabs = ({ t }) => {
  const brands = [1, 2, 3, 4, 5, 6];
  const displayBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 overflow-hidden relative">
      <div className="text-center mb-14">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
          {t.brands}
        </h3>
      </div>

      <div className="flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap">
          {displayBrands.map((i, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 flex flex-col items-center justify-center min-w-[200px] px-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group/item"
            >
              <div className="aspect-square w-full bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-sm group-hover/item:shadow-md mb-4">
                 <Recycle className="text-slate-300 dark:text-slate-600 w-1/2 h-1/2" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Brand {i}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const Home = ({ t, toggleLanguage }) => (
  <div className="animate-in fade-in duration-700">
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900">
          <img 
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-40" 
            alt="Recycling Background"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-slate-900"></div>
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">{t.hero.title}</h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">{t.hero.sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={toggleLanguage} className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all">{t.hero.btnLang}</button>
          <Link to="/contact" className="px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:bg-green-400 transition-all shadow-xl flex items-center justify-center gap-2 group">
            {t.hero.btnAction} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>

    {/* Director Section */}
    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="relative w-full md:w-5/12 max-w-sm">
          <div className="absolute inset-0 border-2 border-green-600 rounded-3xl "></div>
          <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl bg-slate-100 dark:bg-slate-800">
            <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
                alt="Director" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
        </div>
        <div className="w-full md:w-7/12 space-y-6">
          <div className="inline-block p-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg font-bold text-sm tracking-widest uppercase">{t.director.label}</div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">{t.director.title}</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 italic leading-relaxed">{t.director.quote}</p>
          <div className="pt-4"><h4 className="text-xl font-bold dark:text-white">{t.director.name}</h4><p className="text-green-600 font-medium">{t.director.role}</p></div>
        </div>
      </div>
    </section>

    <BrandCollabs t={t} />
  </div>
);

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

  const toggleLanguage = () => setLanguage(l => l === 'en' ? 'hi' : 'en');
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen font-sans text-slate-900 bg-white dark:bg-slate-950 transition-colors duration-500 flex flex-col">
          
          <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-slate-200 dark:border-slate-800 py-3 shadow-sm' : 'bg-transparent border-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform"><Recycle className="text-white w-6 h-6" /></div>
                <span className={`text-xl font-bold tracking-tight uppercase ${!scrolled ? 'text-white' : 'dark:text-white'}`}>GARHWAL <span className="text-green-600">TRADERS</span></span>
              </Link>

              <div className="hidden md:flex items-center gap-8 font-bold">
                <Link to="/" className={`hover:text-green-600 transition-colors ${!scrolled ? 'text-white' : 'text-slate-700 dark:text-slate-300'}`}>{t.nav.home}</Link>
                <Link to="/contact" className={`hover:text-green-600 transition-colors ${!scrolled ? 'text-white' : 'text-slate-700 dark:text-slate-300'}`}>{t.nav.contact}</Link>
                <Link to="/login" className="px-6 py-2.5 rounded-full bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/20">{t.nav.login}</Link>
              </div>

              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="dark:text-white" /> : <Menu className={!scrolled ? 'text-white' : 'dark:text-white'} />}
              </button>
            </div>

            {/* Mobile Nav */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="p-6 flex flex-col gap-4 font-bold">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</Link>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</Link>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>{t.nav.login}</Link>
              </div>
            </div>
          </nav>

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home t={t} toggleLanguage={toggleLanguage} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={
                <div className="pt-40 min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-6">
                  <div className="bg-white dark:bg-slate-800 p-12 rounded-3xl shadow-2xl w-full max-w-md border dark:border-slate-700 text-center">
                    <User size={64} className="mx-auto text-green-600 mb-6" />
                    <h2 className="text-3xl font-bold dark:text-white mb-6">Partner Portal</h2>
                    <div className="space-y-4">
                      <input className="w-full p-4 bg-slate-50 dark:bg-slate-700 rounded-xl dark:text-white outline-none focus:ring-2 focus:ring-green-500" placeholder="Username" />
                      <input className="w-full p-4 bg-slate-50 dark:bg-slate-700 rounded-xl dark:text-white outline-none focus:ring-2 focus:ring-green-500" type="password" placeholder="Password" />
                      <button className="w-full py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors">Sign In</button>
                    </div>
                  </div>
                </div>
              } />
            </Routes>
          </main>

          <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div>
                <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                  <Recycle className="text-green-500 w-8 h-8" />
                  <span className="text-2xl font-bold">GARHWAL TRADERS</span>
                </div>
                <p className="text-slate-400">Making recycling easy across Uttarakhand. Leading the way in sustainable waste management.</p>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-green-500 uppercase tracking-widest">Navigation</h4>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact & Location</Link>
                <Link to="/login" className="text-slate-400 hover:text-white transition-colors">Partner Portal</Link>
              </div>
              <div>
                <h4 className="font-bold text-green-500 uppercase tracking-widest mb-6">Headquarters</h4>
                <p className="text-slate-400 leading-relaxed">
                  Pauri Market, Near Main Square<br/>
                  Uttarakhand, India<br/>
                  <span className="block mt-4 text-white font-bold">+91 98765 43210</span>
                </p>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
              <p>© 2024 Garhwal Traders. All Rights Reserved.</p>
              <div className="flex gap-6">
                <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                <span className="hover:text-white cursor-pointer">Terms of Service</span>
              </div>
            </div>
          </footer>

          <button onClick={toggleDarkMode} className="fixed bottom-6 left-6 z-[60] w-14 h-14 rounded-full bg-green-600 dark:bg-yellow-500 text-white dark:text-slate-900 shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95">
            {darkMode ? <Sun size={26} fill="currentColor" /> : <Moon size={24} fill="currentColor" />}
          </button>
        </div>
      </div>
    </Router>
  );
};

export default App;