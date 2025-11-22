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
    <section id="graphics" className="section bg-slate-600">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-200">
          Graphics & Design Samples
        </h2>
        <p className="text-slate-600 mb-12 max-w-2xl">
          A collection of my graphic design work showcasing my creative approach to visual communication.
        </p>

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design) => (
            <div
              key={design.id}
              onClick={() => setSelectedImage(design)}
              className="group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end justify-start p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-bold text-lg">{design.title}</h3>
                    <p className="text-white/80 text-sm">{design.category}</p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-3">
                    <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title Below */}
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-slate-900 text-sm">{design.title}</h3>
                <p className="text-slate-600 text-xs">{design.category}</p>
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
          <div className="space-y-4">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-lg"
            />
            <div>
              <p className="text-slate-700 mb-2">
                <span className="font-semibold">Category:</span> {selectedImage.category}
              </p>
              <p className="text-slate-600 text-sm">
                Click to view full resolution or download this design.
              </p>
            </div>
            <button className="w-full bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                Download Design
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
}

