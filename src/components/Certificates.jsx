import React, { useState } from 'react';
import Modal from './Modal';

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'Creative Web Design',
      issuer: 'Tesda',
      date: 'March 2023',
      description: 'Comprehensive course covering HTML, CSS, and Javascript.',
      image: 'To be updated',
    },
    {
      id: 2,
      title: 'NCII',
      issuer: 'Tesda',
      date: 'To be updated',
      description: 'To be updated',
      image: 'To be updated',
    },
    {
      id: 3,
      title: 'No content available',
      issuer: 'No content available',
      date: 'No content available',
      description: 'No content available',
      image: 'No content available',
    },

  ];

  return (
    <section id="certificates" className="section bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-200">
          Certificates & Credentials
        </h2>
        <p className="text-slate-400 mb-12 max-w-2xl">
          Professional certifications and training courses completed to enhance my skills.
        </p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCertificate(cert)}
              className="card card-hover cursor-pointer overflow-hidden"
            >
              {/* Certificate Image */}
              <div className="relative h-40 overflow-hidden rounded-lg mb-4 group">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">{cert.title}</h3>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600 font-semibold">{cert.issuer}</p>
                <p className="text-xs text-slate-500">{cert.date}</p>
              </div>

              {/* View Button */}
              <button
                onClick={() => setSelectedCertificate(cert)}
                className="w-full px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-semibold hover:bg-blue-200 transition-colors text-sm"
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Details Modal */}
      <Modal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        title={selectedCertificate?.title}
      >
        {selectedCertificate && (
          <div className="space-y-6">
            {/* Certificate Image */}
            <div className="relative h-96 overflow-hidden rounded-lg">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Certificate Details */}
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-sm text-slate-600 mb-1">Issued By</p>
                <p className="text-lg font-bold text-indigo-600">{selectedCertificate.issuer}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-600 mb-1">Date Obtained</p>
                  <p className="font-semibold text-slate-900">{selectedCertificate.date}</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-600 mb-1">Status</p>
                  <p className="font-semibold text-green-600">Completed ✓</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Description</h3>
                <p className="text-slate-700 leading-relaxed">{selectedCertificate.description}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
