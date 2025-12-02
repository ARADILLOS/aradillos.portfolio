import React, { useState } from 'react';
import Modal from './Modal';

export default function Graphics() {
  const [selectedImage, setSelectedImage] = useState(null);

  const designs = [
    {
      id: 1,
      title: 'Calling Card Design',
      category: 'Calling Card',
      image: 'junkshopcc.jpg',
    },
    {
      id: 2,
      title: 'Calling Card Design',
      category: 'Design 2',
      image: 'junkshopcc2.jpg',
    },
    {
      id: 3,
      title: 'Loyalty Card Design',
      category: 'Front Side',
      image: 'reisen.jpg',
    },
    {
      id: 4,
      title: 'Loyalty Card Design',
      category: 'Back Side',
      image: 'loyaltycard.jpg',
    },
    {
      id: 5,
      title: 'Poster Design',
      category: 'Car Rental Poster',
      image: 'carrental.jpg',
    },
    {
      id: 6,
      title: 'Logo Design',
      category: 'Company Logo',
      image: 'logo.jpg',
    },
  ];

  return (
    <section id="graphics" className="section bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-900 to-blue-600 rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
            Graphics & Design Samples
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            A collection of my graphic design work showcasing my creative approach to visual communication.
          </p>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {designs.map((design, index) => (
            <div
              key={design.id}
              onClick={() => setSelectedImage(design)}
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-blue-100 hover:border-blue-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-slate-100 to-blue-100">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-1">{design.title}</h3>
                    <p className="text-purple-200 text-sm">{design.category}</p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-600 rounded-full text-xs font-semibold shadow-lg">
                    Click to view
                  </span>
                </div>
              </div>

              {/* Title Below */}
              <div className="p-5 bg-gradient-to-br from-white to-purple-50">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-1">{design.title}</h3>
                <p className="text-purple-600 text-sm font-medium">{design.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        title={selectedImage?.title}
      >
        {selectedImage && (
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-2">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full rounded-xl"
              />
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 rounded-xl">
              <p className="text-slate-700 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="font-semibold text-slate-900">Category:</span> 
                <span className="text-purple-600 font-medium">{selectedImage.category}</span>
              </p>
              <p className="text-slate-600 text-sm">
                View this design in full resolution or download for your reference.
              </p>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 sm:py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
              <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="text-sm sm:text-base">Download Design</span>
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
}

