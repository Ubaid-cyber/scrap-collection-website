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
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#f5f7f0] text-center selection:bg-[#8faf82]/30">


      
      {/* --- Background Effects --- */}
      {/* Grid Pattern - Sage/Cream tinted */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#78967608_1px,transparent_1px),linear-gradient(to_bottom,#78967608_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Soft Organic Shapes - Sage Green/Beige instead of Purple */}
      <div className="absolute left-0 top-0 -translate-x-[40%] -translate-y-[40%] h-[600px] w-[600px] rounded-full bg-[#8faf82]/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 translate-x-[30%] translate-y-[30%] h-[500px] w-[500px] rounded-full bg-[#d4c4a8]/20 blur-[100px] pointer-events-none"></div>
      <div className="absolute right-1/4 top-1/2 h-[300px] w-[300px] rounded-full bg-[#a8c686]/10 blur-[80px] pointer-events-none"></div>


      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        
        {/* Badge - Updated to sage/orange Kabadi style */}
        <div className="animate-fade-in-up inline-flex items-center rounded-full border border-[#8faf82]/40 bg-[#8faf82]/10 px-3 py-1 text-sm font-medium text-[#5a724a] backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-[#ff8c42] mr-2 animate-pulse"></span>
          v1.0 is now live
        </div>

        {/* Hero Title - Dark text for light background */}
        <h1 className="text-3xl font-extrabold tracking-tight text-[#2d3a2d] sm:text-7xl md:text-7xl">
          Build Faster with <br className="hidden sm:block" />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#5a724a] via-[#8faf82] to-[#ff8c42]">
            Bun & Tailwind
            {/* Subtle underline decoration - sage colored */}
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#8faf82]/50" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Description - Dark gray for readability */}
        <p className="mx-auto max-w-2xl text-lg text-[#5a6b5a] sm:text-xl leading-relaxed">
          Experience the extreme speed of the modern stack. 
          Instant server starts, utility-first styling, and a UI that 
          <span className="text-[#2d3a2d] font-semibold"> blows the mind</span>.
        </p>

        {/* Interactive Code Snippet (React State Demo) - Light theme */}
        <div className="group relative mx-auto flex max-w-sm items-center justify-between gap-4 rounded-xl border border-[#8faf82]/20 bg-white/60 p-2 pl-5 pr-2 backdrop-blur-md transition-all hover:border-[#8faf82]/40 hover:bg-white/80 hover:shadow-2xl hover:shadow-[#8faf82]/10">
          <code className="font-mono text-sm text-[#5a724a]">
            <span className="mr-2 text-[#ff8c42]">$</span>
            {command}
          </code>
          <button 
            onClick={handleCopy}
            className="rounded-lg bg-[#8faf82]/10 p-2 transition-all hover:bg-[#8faf82]/20 active:scale-95"
            title="Copy to clipboard"
          >
            {copied ? (
              <svg className="h-4 w-4 text-[#5a724a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="h-4 w-4 text-[#5a6b5a] group-hover:text-[#2d3a2d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>

        {/* Action Buttons - Kabadi Orange/Dark Green theme */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 pt-4">
          <Link to="/faq" className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff8c42] to-[#5a724a] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <button className="relative flex items-center bg-[#2d3a2d] rounded-full px-8 py-4 font-semibold text-white transition-all hover:bg-[#3d4f3d]">
              Get Answers 
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </button>
          </Link>
          
          <button className="px-8 py-4 rounded-full font-semibold text-[#5a6b5a] hover:text-[#2d3a2d] transition-colors border border-transparent hover:border-[#8faf82]/30 hover:bg-[#8faf82]/10">
            Another Random Button
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;