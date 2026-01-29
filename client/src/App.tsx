import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home.jsx';
import FAQ  from './pages/FAQ.jsx';
import Contact from "./pages/Contact.jsx";
import Pricing from "./pages/Pricing.jsx";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <Router>
      <div className="min-h-screen w-full text-slate-200 font-sans">
        
        {/* Navbar */}
        <nav className="sticky top-0 z-50 w-full border-b border-white/5 backdrop-blur-xl bg-slate-900/80">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            
            <Link to="/" className="text-2xl font-bold tracking-tight" onClick={closeMenu}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                BunUI
              </span>
              <span className="text-indigo-500">.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-10 text-gray-500 font-bold">
              <Link to="/" className="text-slate-400 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link to="/faq" className="text-slate-400 hover:text-white transition-colors duration-200">
                FAQ
              </Link>
              <Link to="/pricing" className="text-slate-400 hover:text-white transition-colors duration-200">
                Pricing
              </Link>
              <Link to="/contact" className="text-slate-400 hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/5 overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-4 py-4 space-y-4">
              <Link 
                to="/" 
                onClick={closeMenu}
                className="block text-slate-400 hover:text-white transition-colors duration-200 font-medium py-2"
              >
                Home
              </Link>
              <Link 
                to="/faq" 
                onClick={closeMenu}
                className="block text-slate-400 hover:text-white transition-colors duration-200 font-medium py-2"
              >
                FAQ
              </Link>
              <Link 
                to="/pricing" 
                onClick={closeMenu}
                className="block text-slate-400 hover:text-white transition-colors duration-200 font-medium py-2"
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className="block text-slate-400 hover:text-white transition-colors duration-200 font-medium py-2"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;