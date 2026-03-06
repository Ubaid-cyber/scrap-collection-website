/**
 * FILE: AdminLogin.jsx
 * PURPOSE: Secure login page for Admin. Saves 'adminToken' to authorize access.
**/

import { useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      
      const data = await res.json();

      // 🔴 FIX: Sirf check karein ki login successful hai aur token mil gaya hai.
      if (res.ok && data.token) {
        localStorage.setItem("adminToken", data.token); // Token save karein
        window.location.href = "/admin-dashboard"; // Dashboard par redirect karein
      } else {
        // Agar password galat hoga, tabhi ye alert aayega
        alert(data.message || "Invalid Admin Credentials!");
      }
    } catch(error) {
      alert("Backend error! Make sure server is running on port 5000.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b1830] px-4">
      <div className="w-full max-w-[340px] bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-green-500/20 shadow-xl">
        <div className="flex justify-center mb-4">
          <ShieldCheck className="text-green-500 w-12 h-12" />
        </div>
        <h2 className="text-center text-2xl font-bold text-white mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="email" placeholder="Admin Email" 
            className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700 outline-none focus:border-green-500"
            value={email} onChange={(e) => setEmail(e.target.value)} required 
          />
          <input 
            type="password" placeholder="Password" 
            className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700 outline-none focus:border-green-500"
            value={password} onChange={(e) => setPassword(e.target.value)} required 
          />
          <button type="submit" className="bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl font-bold transition-all">
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}