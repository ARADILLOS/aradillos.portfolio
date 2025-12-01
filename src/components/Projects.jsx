import React, { useState } from 'react';
import Modal from './Modal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Shortest Job First (Non-Preemptive) Calculator',
      description: 'A CPU scheduling simulator featuring a full result table and Gantt chart.',
      details: 'Implements Short Job First scheduling with quantum-based processing. Shows table results including Arrival Time, Burst Time, Completion Time, Turnaround Time, and Waiting Time. Outputs a generated Gantt Chart.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
      tags: ['HTML', 'JavaScript', 'CSS'],
      year: '2025',
      isCalculator: true
    },
    {
      id: 2,
      title: 'To be updated',
      description: 'To be updated',
      details: 'To be updated',
      image: 'profile.jpg',
      tags: ['To be updated'],
      year: 'To be updated'
    },
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            School-Based Projects
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Showcase of my academic projects combining technical skills with thoughtful design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Project Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-blue-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Year badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 shadow-lg">
                  {project.year}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-slate-50 to-blue-50 text-blue-600 rounded-full text-xs font-medium border border-blue-100 hover:shadow-md transition-shadow"
                      style={{ animationDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-gradient-to-r from-slate-900 to-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:from-slate-800 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2 group/btn"
                >
                  <span className="text-sm sm:text-base">View Details</span>
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
     <Modal
  isOpen={!!selectedProject}
  onClose={() => setSelectedProject(null)}
  title={selectedProject?.title}
>
  {selectedProject?.isCalculator ? (
    // Render calculator project
    <iframe
      src="/ShortJobFirst.html"   // Make sure this file exists in /public
      title="Shortest Job First (Non-Preemptive) Calculator"
      className="w-full h-[80vh] rounded-lg"
      style={{ border: "none" }}
    />
  ) : (
    // Render normal project details
    <>
      <img
        src={selectedProject?.image}
        alt={selectedProject?.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">About This Project</h3>
        <p className="text-slate-700 leading-relaxed">{selectedProject?.details}</p>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Technologies Used</h3>
        <div className="flex flex-wrap gap-2">
          {selectedProject?.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="bg-slate-100 p-4 rounded-lg">
          <p className="text-sm text-slate-600">
            Completed: <span className="font-semibold">{selectedProject?.year}</span>
          </p>
        </div>
      </div>
    </>
  )}
</Modal>

    </section>
  );
}
