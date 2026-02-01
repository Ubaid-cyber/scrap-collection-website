import { useState } from "react";
import { 
  Home, 
  Building2, 
  Factory, 
  Truck, 
  Scale, 
  FileCheck, 
  Coins, 
  Recycle, 
  ShieldCheck, 
  ChevronRight 
} from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("individuals");

  const serviceContent = {
    individuals: {
      title: "Household Scrap Collection",
      description: "Hassle-free doorstep pickup for your daily recyclables. We weigh digitally and pay instantly.",
      features: [
        { icon: Truck, title: "Doorstep Pickup", desc: "Book a slot, and our team comes to your home. No heavy lifting required." },
        { icon: Scale, title: "Digital Weighing", desc: "Transparent weighing using ISO-certified digital scales in front of you." },
        { icon: Coins, title: "Instant Payment", desc: "Get paid via UPI or Cash immediately after the pickup is complete." },
        { icon: Recycle, title: "All Items Accepted", desc: "Newspapers, cardboard, PET bottles, e-waste, and metal appliances." },
      ]
    },
    government: {
      title: "Government & Municipal Services",
      description: "Authorized disposal partner for government offices, departments, and public sector undertakings.",
      features: [
        { icon: FileCheck, title: "Tender Clearing", desc: "Official participation in scrap auctions and tender-based disposal." },
        { icon: ShieldCheck, title: "Compliance & Audit", desc: "Green certificates and formal disposal reports for audit purposes." },
        { icon: Truck, title: "Vehicle Scrapping", desc: "Authorized dismantling of old government vehicles with RTO deregistration." },
        { icon: FileCheck, title: "Record Destruction", desc: "Secure shredding and recycling of confidential paper records." },
      ]
    },
    industrial: {
      title: "Industrial & Bulk Scrap",
      description: "End-to-end waste management solutions for factories, construction sites, and warehouses.",
      features: [
        { icon: Factory, title: "Factory Dismantling", desc: "Expert teams for dismantling sheds, machinery, and plant structures safely." },
        { icon: Truck, title: "Heavy Logistics", desc: "Fleet of hydras and large trucks to handle tons of ferrous/non-ferrous scrap." },
        { icon: Coins, title: "GST Billing", desc: "Formal invoices with GST compliance for all corporate transactions." },
        { icon: Recycle, title: "Regular Contracts", desc: "Scheduled pickups for manufacturing units generating daily waste." },
      ]
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-green-50 to-transparent dark:from-green-900/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-green-600 tracking-widest uppercase mb-3">Our Expertise</h2>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
            Scrap Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Every Sector.
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            From small household pickups to large-scale industrial dismantling, 
            we handle it all with transparency and eco-compliance.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-white dark:bg-slate-900 p-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-lg inline-flex relative">
            {/* Sliding Background Pill (Optional advanced CSS, here using simple conditional classes) */}
            
            <button 
              onClick={() => setActiveTab("individuals")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === "individuals" ? "bg-green-600 text-white shadow-md" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"}`}
            >
              <Home size={18} /> Individuals
            </button>
            
            <button 
              onClick={() => setActiveTab("government")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === "government" ? "bg-green-600 text-white shadow-md" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"}`}
            >
              <Building2 size={18} /> Government
            </button>
            
            <button 
              onClick={() => setActiveTab("industrial")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === "industrial" ? "bg-green-600 text-white shadow-md" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"}`}
            >
              <Factory size={18} /> Industrial
            </button>
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 key={activeTab}">
          
          {/* Section Description */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {serviceContent[activeTab].title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {serviceContent[activeTab].description}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceContent[activeTab].features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-14 h-14 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <feature.icon size={28} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action Banner (Dynamic based on tab) */}
          <div className="mt-16 bg-slate-900 dark:bg-green-900/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">
                {activeTab === 'individuals' ? "Ready to clear the clutter?" : 
                 activeTab === 'government' ? "Need a formal proposal?" : 
                 "Have tons of scrap?"}
              </h3>
              <p className="text-slate-400">
                {activeTab === 'individuals' ? "Schedule a pickup today and get the best rates." : 
                 activeTab === 'government' ? "Contact our tender department for documentation." : 
                 "Get a quote for bulk lifting and dismantling."}
              </p>
            </div>
            
            <button className="relative z-10 bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-green-900/20 flex items-center gap-2 group whitespace-nowrap">
              {activeTab === 'individuals' ? "Book Pickup" : "Contact Us"}
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>


        {/* Universal Process Section */}
        <div className="mt-24 border-t border-slate-200 dark:border-slate-800 pt-16">
          <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center px-4">
            
            <div className="flex flex-col items-center">
              <div className="text-6xl font-black text-slate-200 dark:text-slate-800 mb-6">01</div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Request Service</h4>
              <p className="text-sm text-slate-500">Book online or call us for an inspection/pickup.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-6xl font-black text-slate-200 dark:text-slate-800 mb-6">02</div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Pickup & Weighing</h4>
              <p className="text-sm text-slate-500">Our team arrives, loads, and weighs using digital scales.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-6xl font-black text-slate-200 dark:text-slate-800 mb-6">03</div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Instant Payment</h4>
              <p className="text-sm text-slate-500">Receive payment immediately via Cash or Bank Transfer.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}