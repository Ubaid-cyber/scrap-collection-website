import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-28 pb-12 bg-[#0b1830] px-4">
      {/* Exactly matched Pickup card styling: w-[340px], p-6, rounded-2xl */}
      <div className="w-full max-w-[340px] bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-slate-700">
        {/* Text sizes aur margins Pickup ki tarah set kiye (mb-1 aur mb-6) */}
        <h2 className="text-center text-2xl font-bold text-white mb-1">
          Create Account
        </h2>
        <p className="text-center text-slate-400 text-xs mb-6">
          Join Garhwal Traders today
        </p>

        {/* Form gap ko gap-4 se gap-3 kiya */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 text-sm rounded-xl bg-slate-700 text-white outline-none focus:ring-2 focus:ring-green-500 transition-all"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 text-sm rounded-xl bg-slate-700 text-white outline-none focus:ring-2 focus:ring-green-500 transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 text-sm rounded-xl bg-slate-700 text-white outline-none focus:ring-2 focus:ring-green-500 transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white py-3 text-sm rounded-xl font-bold tracking-wide transition-all shadow-lg hover:shadow-green-500/30 active:scale-[0.98]"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-500 hover:text-green-400 font-semibold transition-colors"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
