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
    <header className="section bg-gradient-to-br from-gray-700 via-gray-800 to-blue-400 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Circular Profile Image */}
        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            {/* Outer glow ring */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full animate-pulse"></div>
            
            {/* Profile image container */}
            <img
              src="../public/profile.jpg"
              alt="Jhemica Aradillos"
              className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white/30"
            />
            
            {/* Decorative circle */}
            <div className="absolute inset-0 rounded-full border-2 border-white/50"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
            Aradillos, Jhemica
          </h1>
          
          <p className="text-xl md:text-2xl font-semibold mb-4 text-white/90">
            BSIT Student | Aspiring UI and UX Designer
          </p>
          
          <p className="text-lg text-white/80 mb-8 max-w-xl">
            Crafting beautiful, intuitive digital experiences through thoughtful design and clean code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={handleDownloadResume}
              className="btn-primary bg-white text-indigo-600 hover:bg-slate-100"
            >
              Download Resume
            </button>
            <a
              href="#about"
              className="btn-secondary bg-white/20 text-white border-2 border-white hover:bg-white/30"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  );
}
