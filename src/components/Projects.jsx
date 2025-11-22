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
    <section id="projects" className="section bg-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
          School-Based Projects
        </h2>
        <p className="text-slate-200 mb-12 max-w-2xl">
          Showcase of my academic projects combining technical skills with thoughtful design.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="card card-hover overflow-hidden cursor-pointer">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden rounded-lg mb-4 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Year & Button */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">{project.year}</span>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-semibold hover:bg-indigo-200 transition-colors"
                >
                  View Details
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
