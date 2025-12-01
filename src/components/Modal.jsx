import React from 'react';

export default function Modal({ isOpen, onClose, title, children, isCalculator }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex justify-between items-center p-5 sm:p-6 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50">
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white hover:bg-red-50 text-slate-400 hover:text-red-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className={`p-5 sm:p-6 ${isCalculator ? 'bg-white' : 'bg-gradient-to-br from-white to-slate-50'}`}>
          {children}
        </div>

      </div>
    </div>
  );
}
