import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white p-10 shadow-xl">
      {/* Glow */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-400/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl" />

      <h1 className="relative text-4xl font-bold tracking-tight text-slate-900">
        Contact
      </h1>
      <p className="relative mt-2 text-slate-600">
        Drop a message. It actually feels alive.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="relative mt-8 grid gap-4 max-w-md"
      >
        <input
          placeholder="Your email"
          className="rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <textarea
          placeholder="Your message"
          rows={4}
          className="rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <button
          className="group relative overflow-hidden rounded-lg bg-slate-900 px-6 py-3 text-white"
        >
          <span className="relative z-10">
            {sent ? "Sent ✓" : "Send"}
          </span>
          <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-transform duration-300 group-hover:translate-y-0" />
        </button>
      </form>
    </div>
  );
}
