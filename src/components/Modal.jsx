import React from 'react';

export default function Modal({ isOpen, onClose, title, children, isCalculator }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className={`p-6 ${isCalculator ? 'bg-white' : ''}`}>
          {children}
        </div>

      </div>
    </div>
  );
}
