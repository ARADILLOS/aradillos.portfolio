import React, { useState } from 'react';
import Modal from './Modal';

export default function Header() {
  const [resumeModal, setResumeModal] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'resume.pdf';   // path to your PDF file
    link.download = 'resume.pdf'; // filename for download
    link.click();
  };

  return (
    <header id="header" className="relative section bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4 sm:px-6 lg:px-8">
        {/* Circular Profile Image */}
        <div className="flex-shrink-0 group">
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-br from-white/30 via-blue-200/20 to-blue-300/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
            
            {/* Profile image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/40 group-hover:border-white/60 transition-all duration-500 group-hover:scale-105">
              <img
                src="profile.jpg"
                alt="Jhemica Aradillos"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Decorative rotating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/30 group-hover:rotate-180 transition-transform duration-[3s]"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold animate-slide-up leading-tight">
              Aradillos, Jhemica
            </h1>
            
            <div className="inline-block">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white/95 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20">
                BSIT Student | Aspiring UI/UX Designer
              </p>
            </div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Crafting beautiful, intuitive digital experiences through thoughtful design and clean code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-4">
            <button
              onClick={handleDownloadResume}
              className="group bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm sm:text-base">Download Resume</span>
            </button>
            <a
              href="#about"
              className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <span className="text-sm sm:text-base">Learn More</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/70 text-xs sm:text-sm font-medium uppercase tracking-wider">Scroll</span>
        <div className="animate-bounce">
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </header>
  );
}

