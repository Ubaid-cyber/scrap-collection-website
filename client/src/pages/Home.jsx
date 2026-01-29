import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [copied, setCopied] = useState(false);
  const command = "bun create app-latest";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-950 text-center selection:bg-indigo-500/30">


      
      {/* --- Background Effects --- */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute left-0 top-0 -translate-x-[40%] -translate-y-[40%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 translate-x-[40%] translate-y-[40%] h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px] pointer-events-none"></div>


      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
          v1.0 is now live
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-7xl md:text-7xl">
          Build Faster with <br className="hidden sm:block" />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Bun & Tailwind
            {/* Subtle underline decoration */}
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-indigo-500/50" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-2xl text-lg text-slate-400 sm:text-xl leading-relaxed">
          Experience the extreme speed of the modern stack. 
          Instant server starts, utility-first styling, and a UI that 
          <span className="text-slate-200 font-semibold"> blows the mind</span>.
        </p>

        {/* Interactive Code Snippet (React State Demo) */}
        <div className="group relative mx-auto flex max-w-sm items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/40 p-2 pl-5 pr-2 backdrop-blur-md transition-all hover:border-indigo-500/30 hover:bg-black/60 hover:shadow-2xl hover:shadow-indigo-500/10">
          <code className="font-mono text-sm text-indigo-300">
            <span className="mr-2 text-pink-500">$</span>
            {command}
          </code>
          <button 
            onClick={handleCopy}
            className="rounded-lg bg-white/5 p-2 transition-all hover:bg-white/10 active:scale-95"
            title="Copy to clipboard"
          >
            {copied ? (
              <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="h-4 w-4 text-slate-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 pt-4">
          <Link to="/faq" className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <button className="relative flex items-center bg-slate-900 rounded-full px-8 py-4 font-semibold text-white transition-all hover:bg-slate-800">
              Get Answers 
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </button>
          </Link>
          
          <button className="px-8 py-4 rounded-full font-semibold text-slate-300 hover:text-white transition-colors border border-transparent hover:border-white/10 hover:bg-white/5">
            Another Random Button
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;