import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

// Pages Imports
import Contact from "./pages/Contact.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Pickup from "./pages/Pickup.jsx";
import Services from "./pages/Services.jsx";
import ScrollToTop from "./ScrollToTop.tsx"; // Path fixed

// Admin Imports
import AdminRoute from "./pages/AdminRoute.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";

// Assets & Icons
import DirectorImage from "./assets/director.jpeg";
import IntroVideo from "./assets/intro_video.mp4";
import { Menu, X, ArrowRight, Recycle, Moon, Sun } from "lucide-react";
import mahindra from "./assets/brands/mahindra.png";
import reliance from "./assets/brands/relianceindustrieslimited.png";
import sail from "./assets/brands/sailsdotjs.png";
import tata from "./assets/brands/tata.png";
import logo from "./assets/logo.png";

/**
 * GARHWAL TRADERS - TRANSLATIONS
 **/
const translations = {
  en: {
    nav: {
      home: "Home",
      contact: "Contact",
      login: "Login",
      services: "Services",
    },
    hero: {
      title: (
        <>
          Turning Today's <span className="text-green-400">Waste</span> <br />
          Into Tomorrow's <span className="text-green-400">Wealth</span>
        </>
      ),
      sub: "Garhwal's most trusted digital scrap collection platform. Fair pricing, instant pickup, and responsible recycling at your doorstep.",
      btnLang: "हिन्दी में बदलें",
      btnAction: "Request Pickup",
    },
    director: {
      label: "Director's Vision",
      title: "Pioneering a Cleaner Green Future.",
      quote:
        '"At Garhwal Traders, we don\'t just see waste; we see opportunities. Our mission is to bridge the gap between waste generation and sustainable circular economies."',
      name: "Wajid",
      role: "Founder & Managing Director",
    },
    brands: "Trusted by Industry Leaders",
  },
  hi: {
    nav: { home: "होम", contact: "संपर्क", login: "लॉगिन", services: "सेवाएं" },
    hero: {
      title: (
        <>
          आज के <span className="text-green-400">कचरे</span> को <br />
          कल की <span className="text-green-400">संपत्ति</span> में बदलें
        </>
      ),
      sub: "गढ़वाल का सबसे भरोसेमंद डिजिटल स्क्रैप संग्रह मंच। उचित मूल्य निर्धारण, त्वरित पिकअप और जिम्मेदार पुनर्चक्रण।",
      btnLang: "Switch to English",
      btnAction: "संपर्क करें",
    },
    director: {
      label: "निदेशक का दृष्टिकोण",
      title: "एक स्वच्छ हरित भविष्य का नेतृत्व करना।",
      quote:
        '"गढ़वाल ट्रेडर्स में, हम केवल कचरा नहीं देखते हैं; हम अवसर देखते हैं।"',
      name: "Wajid",
      role: "संस्थापक और प्रबंध निदेशक",
    },
    brands: "उद्योग जगत के दिग्गजों द्वारा विश्वसनीय",
  },
};

// --- SUB-COMPONENTS ---
const BrandCollabs = ({ t }: { t: any }) => {
  const brands = [
    { name: "Mahindra", logo: mahindra },
    { name: "Reliance", logo: reliance },
    { name: "SAIL", logo: sail },
    { name: "Tata", logo: tata },
  ];

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
          {displayBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex flex-col items-center justify-center min-w-[220px] px-6 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square w-full bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-sm mb-4">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-20 h-20 object-contain filter invert brightness-150"
                />
              </div>

              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {brand.name}
              </span>
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

const Home = ({
  t,
  toggleLanguage,
}: {
  t: any;
  toggleLanguage: () => void;
}) => (
  <div className="animate-in fade-in duration-700">
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src={IntroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-slate-900"></div>
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white dark:text-white leading-tight mb-6">
          {t.hero.title}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
          {t.hero.sub}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={toggleLanguage}
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all"
          >
            {t.hero.btnLang}
          </button>
          <Link
            to="/pickup"
            className="px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:bg-green-400 transition-all shadow-xl flex items-center justify-center gap-2 group"
          >
            {t.hero.btnAction}{" "}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>

    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="relative w-full md:w-5/12 max-w-sm">
          <div className="absolute inset-0 border-2 border-green-600 rounded-3xl "></div>
          <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl bg-slate-100 dark:bg-slate-800">
            <img
              src={DirectorImage}
              alt="Director"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
        <div className="w-full md:w-7/12 space-y-6">
          <div className="inline-block p-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg font-bold text-sm tracking-widest uppercase">
            {t.director.label}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            {t.director.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 italic leading-relaxed">
            {t.director.quote}
          </p>
          <div className="pt-4">
            <h4 className="text-xl font-bold dark:text-white">
              {t.director.name}
            </h4>
            <p className="text-green-600 font-medium">{t.director.role}</p>
          </div>
        </div>
      </div>
    </section>
    <BrandCollabs t={t} />
  </div>
);

// --- TYPESCRIPT INTERFACE ---
interface AppContentProps {
  t: any;
  toggleLanguage: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrolled: boolean;
  isLoggedIn: boolean;
  handleLogout: () => void;
}

// --- MAIN ROUTER CONTENT ---
const AppContent: React.FC<AppContentProps> = ({
  t,
  toggleLanguage,
  darkMode,
  toggleDarkMode,
  isMenuOpen,
  setIsMenuOpen,
  scrolled,
  isLoggedIn,
  handleLogout,
}) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div>
      <ScrollToTop />

      <div className="min-h-screen font-sans text-slate-900 bg-white dark:bg-slate-950 transition-colors duration-500 flex flex-col">
        {!isAdminRoute && (
          <div className="fixed top-0 w-full z-50 flex flex-col">
            {/* Classic Yellow Beta Banner */}
            <div className="bg-yellow-400 text-gray-900 text-center py-2 px-4 text-xs sm:text-sm font-medium w-full leading-snug shadow-sm">
              <span className="mr-1">🚧</span> This website is currently in Beta version. Some features may still be under development.
            </div>

            <nav
              className={`relative w-full transition-all duration-300 border-b ${
                scrolled
                  ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-slate-200 dark:border-slate-800 py-3 shadow-sm"
                  : "bg-transparent border-transparent py-5"
              }`}
            >
              <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link
                  to="/"
                  onClick={() => handleNavClick("/")}
                  className="flex items-center gap-2 group"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-md">
                    <img
                      src={logo}
                      alt="Garhwal Traders"
                      className="w-9 h-9 object-contain filter brightness-0 invert"
                    />
                  </div>
                  <span
                    className={`text-xl font-bold tracking-tight uppercase ${!scrolled ? "text-white" : "dark:text-white"}`}
                  >
                    GARHWAL <span className="text-green-600">TRADERS</span>
                  </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 font-bold">
                  <Link
                    to="/"
                    onClick={() => handleNavClick("/")}
                    className={`hover:text-green-600 transition-colors ${!scrolled ? "text-white" : "text-slate-700 dark:text-slate-300"}`}
                  >
                    {t.nav.home}
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => handleNavClick("/contact")}
                    className={`hover:text-green-600 transition-colors ${!scrolled ? "text-white" : "text-slate-700 dark:text-slate-300"}`}
                  >
                    {t.nav.contact}
                  </Link>
                  <Link
                    to="/services"
                    onClick={() => handleNavClick("/services")}
                    className={`hover:text-green-600 transition-colors ${!scrolled ? "text-white" : "text-slate-700 dark:text-slate-300"}`}
                  >
                    {t.nav.services}
                  </Link>

                  {isLoggedIn ? (
                    <>
                      <Link
                        to="/pickup"
                        onClick={() => handleNavClick("/pickup")}
                        className={`hover:text-green-600 transition-colors ${!scrolled ? "text-white" : "text-slate-700 dark:text-slate-300"}`}
                      >
                        Book Pickup
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="px-6 py-2.5 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all shadow-lg"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <div className="flex items-center gap-6">
                      <Link
                        to="/signup"
                        onClick={() => handleNavClick("/signup")}
                        className={`font-bold hover:text-green-600 transition-colors ${!scrolled ? "text-white" : "text-slate-700 dark:text-slate-300"}`}
                      >
                        Sign Up
                      </Link>
                      <Link
                        to="/login"
                        onClick={() => handleNavClick("/login")}
                        className="px-6 py-2.5 rounded-full bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/20"
                      >
                        {t.nav.login}
                      </Link>
                    </div>
                  )}
                </div>

                <button
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="dark:text-white" />
                  ) : (
                    <Menu
                      className={!scrolled ? "text-white" : "dark:text-white"}
                    />
                  )}
                </button>
              </div>

              <div
                className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
              >
                <div className="p-6 flex flex-col gap-4 font-bold">
                  <Link to="/" onClick={() => handleNavClick("/")}>
                    {t.nav.home}
                  </Link>
                  <Link to="/contact" onClick={() => handleNavClick("/contact")}>
                    {t.nav.contact}
                  </Link>
                  <Link
                    to="/services"
                    onClick={() => handleNavClick("/services")}
                  >
                    {t.nav.services}
                  </Link>
                  {isLoggedIn ? (
                    <>
                      <Link
                        to="/pickup"
                        onClick={() => handleNavClick("/pickup")}
                        className="text-green-600"
                      >
                        Book Pickup
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="text-left text-red-500 font-bold"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/signup"
                        onClick={() => handleNavClick("/signup")}
                      >
                        Sign Up
                      </Link>
                      <Link
                        to="/login"
                        onClick={() => handleNavClick("/login")}
                        className="text-green-600"
                      >
                        {t.nav.login}
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </nav>
          </div>
        )}

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home t={t} toggleLanguage={toggleLanguage} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pickup" element={<Pickup />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route
              path="/admin-dashboard"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />
          </Routes>
        </main>

        {!isAdminRoute && (
          <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div>
                <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                  <Recycle className="text-green-500 w-8 h-8" />
                  <span className="text-2xl font-bold">GARHWAL TRADERS</span>
                </div>
                <p className="text-slate-400">
                  Making recycling easy across Uttarakhand. Leading the way in
                  sustainable waste management.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-green-500 uppercase tracking-widest">
                  Navigation
                </h4>
                <Link
                  to="/"
                  onClick={() => handleNavClick("/")}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/contact"
                  onClick={() => handleNavClick("/contact")}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact & Location
                </Link>
                <Link
                  to="/login"
                  onClick={() => handleNavClick("/login")}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Partner Portal
                </Link>
              </div>
              <div>
                <h4 className="font-bold text-green-500 uppercase tracking-widest mb-6">
                  Headquarters
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  Pauri Market, Near Main Square
                  <br />
                  Uttarakhand, India
                  <br />
                  <span className="block mt-4 text-white font-bold">
                    +91 98765 43210
                  </span>
                </p>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
              <p>© 2026 gARHWAL Traders. All Rights Reserved.</p>
              <div className="flex gap-6">
                <span className="hover:text-white cursor-pointer">
                  Privacy Policy
                </span>
                <span className="hover:text-white cursor-pointer">
                  Terms of Service
                </span>
              </div>
            </div>
          </footer>
        )}

        {!isAdminRoute && (
          <button
            onClick={toggleDarkMode}
            className="fixed bottom-6 left-6 z-[60] w-14 h-14 rounded-full bg-green-600 dark:bg-yellow-500 text-white dark:text-slate-900 shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          >
            {darkMode ? (
              <Sun size={26} fill="currentColor" />
            ) : (
              <Moon size={24} fill="currentColor" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

// --- APP ENTRY POINT ---
const App: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  // add dark
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // add
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const isLoggedIn = !!localStorage.getItem("token");
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => setLanguage((l) => (l === "en" ? "hi" : "en"));
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <Router>
      <AppContent
        t={t}
        toggleLanguage={toggleLanguage}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />
    </Router>
  );
};

export default App;