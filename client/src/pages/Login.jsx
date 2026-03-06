import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://scrap-collection-website.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok && data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "/pickup";
    } else {
      alert(data.message || data.error || "Login failed");
    }

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  return (
    // Design aur spacing ko Signup/Pickup jaisa exact same kar diya hai
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b1830] px-4 pt-20 pb-12">

      {/* max-w-[340px] aur p-6 kiya hai taaki uniform lage */}
      <div className="w-full max-w-[340px] bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-slate-700">

        <h2 className="text-center text-2xl font-bold text-white mb-1">
          Partner Portal
        </h2>
        <p className="text-center text-slate-400 text-xs mb-6">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

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

          <button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white py-3 text-sm rounded-xl font-bold tracking-wide shadow-lg hover:shadow-green-500/30 transition-all active:scale-[0.98]">
            Sign In
          </button>

        </form>

        {/* Signup par wapas jane ka link add kar diya hai */}
        <p className="mt-5 text-center text-xs text-slate-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-500 hover:text-green-400 font-semibold transition-colors">
            Sign up here
          </Link>
        </p>

      </div>
    </div>
  );
}