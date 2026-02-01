import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    // Optional: Reset after 3 seconds
    // setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="pt-32 pb-20 px-6 min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 w-full">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-8 flex flex-col justify-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">
              Let's connect.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md">
              Ready to recycle? Or have questions about our bulk industrial scrap services? Drop us a message.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Call Us</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">hello@garhwaltraiders.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Location</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">Pauri Market, Uttarakhand</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

          <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input 
                required
                className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border-2 border-transparent focus:border-green-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all dark:text-white placeholder-slate-400" 
                placeholder="First Name" 
              />
              <input 
                required
                className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border-2 border-transparent focus:border-green-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all dark:text-white placeholder-slate-400" 
                placeholder="Last Name" 
              />
            </div>
            <input 
              required
              className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border-2 border-transparent focus:border-green-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all dark:text-white placeholder-slate-400" 
              placeholder="Email Address" 
              type="email" 
            />
            <textarea 
              required
              className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border-2 border-transparent focus:border-green-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all dark:text-white h-32 resize-none placeholder-slate-400" 
              placeholder="Your Message"
            ></textarea>
            
            <button 
              disabled={sent}
              className={`w-full py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0
                ${sent 
                  ? "bg-green-700 text-white cursor-default" 
                  : "bg-green-600 text-white hover:bg-green-700"
                }`}
            >
              {sent ? (
                <>
                  Message Sent <CheckCircle2 size={20} />
                </>
              ) : (
                <>
                  Send Message <Send size={20} />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}