import React from 'react';

export default function AboutMe() {
  return (
    <section id="about" className="section bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 inline-block relative">
            About Me
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-900 to-blue-600 rounded-full transform scale-x-50 transition-transform duration-300 group-hover:scale-x-100"></div>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Get to know my journey, passion, and aspirations
          </p>
        </div>

        <div className="card card-hover mb-8 bg-white/80 backdrop-blur-sm">
          <div className="space-y-8">
            {/* Background */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">Background</h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                I'm a BSIT (Bachelor of Science in Information Technology) student passionate about creating beautiful and functional digital experiences. With a strong foundation in computer science and a growing expertise in UI/UX design, I bridge the gap between technology and user-centered design.
              </p>
            </div>

            {/* Why UI/UX */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-200 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">Why UI/UX Design?</h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                I'm fascinated by how good design can make technology accessible and enjoyable for everyone. I believe that every pixel counts, and every interaction should feel intuitive. The intersection of aesthetics, functionality, and user psychology drives my passion for UI/UX design.
              </p>
            </div>

            {/* Goals & Skills */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">Goals & Skills</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-4 sm:p-6 rounded-xl">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <span>🎯</span> Goals
                  </h4>
                  <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Become a proficient UI/UX designer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Create impactful digital products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Develop full-stack design skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Build a strong portfolio</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-4 sm:p-6 rounded-xl">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <span>💻</span> Skills
                  </h4>
                  <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 mt-1">✓</span>
                      <span>Figma & Design Tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 mt-1">✓</span>
                      <span>React & Frontend Development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 mt-1">✓</span>
                      <span>Tailwind CSS & Styling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 mt-1">✓</span>
                      <span>User Research & Prototyping</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-slate-200 to-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['React', 'Tailwind CSS', 'JavaScript', 'Figma', 'UI/UX', 'Responsive Design', 'Git', 'Vite'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-2 bg-gradient-to-r from-slate-100 to-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
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
