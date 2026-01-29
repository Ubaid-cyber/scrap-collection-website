import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import FAQ  from './pages/FAQ.jsx';
import Contact from "./pages/Contact.jsx";
import Pricing from "./pages/Pricing.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-slate-950 text-slate-200 font-sans text-justify selection:bg-indigo-500/30">
        
        {/* Navbar */}
        <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            
            <Link to="/" className="text-2xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                BunUI
              </span>
              <span className="text-indigo-500">.</span>
            </Link>

            <div className="flex gap-10 text-sm font-medium">
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