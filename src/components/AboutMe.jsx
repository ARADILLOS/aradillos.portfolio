import React from 'react';

export default function AboutMe() {
  return (
    <section id="about" className="section bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="card card-hover mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            About Me
          </h2>

          <div className="space-y-6">
            {/* Background */}
            <div>
              <h3 className="text-xl font-semibold text-black-600 mb-3">Background</h3>
              <p className="text-slate-700 leading-relaxed">
                I'm a BSIT (Bachelor of Science in Information Technology) student passionate about creating beautiful and functional digital experiences. With a strong foundation in computer science and a growing expertise in UI/UX design, I bridge the gap between technology and user-centered design.
              </p>
            </div>

            {/* Why UI/UX */}
            <div>
              <h3 className="text-xl font-semibold text-black-600 mb-3">Why UI/UX Design?</h3>
              <p className="text-slate-700 leading-relaxed">
                I'm fascinated by how good design can make technology accessible and enjoyable for everyone. I believe that every pixel counts, and every interaction should feel intuitive. The intersection of aesthetics, functionality, and user psychology drives my passion for UI/UX design.
              </p>
            </div>

            {/* Goals & Skills */}
            <div>
              <h3 className="text-xl font-semibold text-black-600 mb-3">Goals & Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Goals</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Become a proficient UI/UX designer</li>
                    <li>✓ Create impactful digital products</li>
                    <li>✓ Develop full-stack design skills</li>
                    <li>✓ Build a strong portfolio</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Skills</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Figma & Design Tools</li>
                    <li>✓ React & Frontend Development</li>
                    <li>✓ Tailwind CSS & Styling</li>
                    <li>✓ User Research & Prototyping</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind CSS', 'JavaScript', 'Figma', 'UI/UX', 'Responsive Design', 'Git', 'Vite'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
