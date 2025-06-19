import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Website Budaya Batak',
    description: 'Website edukatif yang memperkenalkan aksara Batak, musik tradisional, dan budaya lokal Mandailing dengan interface yang menarik dan interaktif.',
    tech: ['React', 'Tailwind', 'JSON Data'],
    category: 'Web Development',
    status: 'Completed',
    image: '🏛️',
    gradient: 'from-orange-500 to-red-500',
    features: ['Responsive Design', 'Interactive Learning', 'Cultural Content'],
    link: '#',
    github: '#'
  },
  {
    title: 'Website Resep Masakan Nusantara',
    description: 'Website resep masakan Indonesia berbasis PHP dan MySQL dengan fitur favorit, filter kategori, dan sistem rating yang komprehensif.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    category: 'Full Stack',
    status: 'Completed',
    image: '🍜',
    gradient: 'from-green-500 to-teal-500',
    features: ['User Authentication', 'Database Management', 'Search & Filter'],
    link: '#',
    github: 'https://github.com/ikhsanlubis17/Nusantara_Flavours.git'
  },
  {
    title: 'Mobile App UI/UX Prototype',
    description: 'Desain UI/UX untuk aplikasi belajar Bahasa Indonesia menggunakan Figma dan prinsip Human-Centered Design untuk pengalaman belajar yang optimal.',
    tech: ['Figma', 'Prototyping', 'User Research'],
    category: 'UI/UX Design',
    status: 'Prototype',
    image: '📱',
    gradient: 'from-purple-500 to-pink-500',
    features: ['User Research', 'Wireframing', 'Interactive Prototype'],
    link: '#',
    github: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Website portofolio pribadi yang dibangun menggunakan React dan Tailwind CSS dengan fitur dark mode, scroll animation, filter proyek, dan desain yang modern serta responsif.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'Web Development',
    status: 'Completed',
    image: '../assets/porto-preview.png',
    gradient: 'from-blue-500 to-indigo-500',
    features: ['Dark/Light Mode', 'Responsive UI', 'Scroll Animation', 'Project Filtering'],
    link: 'https://ikhsanularifin.vercel.app/', 
    github: 'https://github.com/ikhsanlubis17/PortoBaru.git' 
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const categories = ['All', 'Web Development', 'Full Stack', 'UI/UX Design'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Prototype':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Projek Saya
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Kumpulan proyek yang telah saya kerjakan, dari pengembangan web hingga desain UI/UX
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Header */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  {project.image.endsWith('.png') || project.image.endsWith('.jpg') ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />) : (
                      <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                        {project.image}
                    </div>
                  )}
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 flex items-end justify-center pb-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <div className="flex space-x-3 pointer-events-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="z-20 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors duration-200 flex items-center"
                    >
                      <span className="mr-2">🔗</span>Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="z-20 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors duration-200 flex items-center"
                    >
                      <span className="mr-2">📂</span>GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium transform hover:scale-105 transition-transform duration-200`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform scale-105`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Punya Ide Proyek Menarik?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Saya selalu tertarik untuk mengerjakan proyek-proyek baru dan menantang. 
              Mari diskusikan ide Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Mulai Diskusi
              </button>
              <a
                href="#"
                className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-800 transform hover:scale-105 transition-all duration-300 border-2 border-purple-500"
              >
                Lihat Semua Proyek
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}