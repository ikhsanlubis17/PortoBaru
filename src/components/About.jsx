import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiGithub,
} from 'react-icons/si'


export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    {
      name: 'React.js',
      level: 'Advanced',
      color: 'from-blue-500 to-cyan-500',
      icon: <FontAwesomeIcon icon={faReact} size="2x" />,
    },
    {
      name: 'Tailwind CSS',
      level: 'Advanced',
      color: 'from-cyan-400 to-blue-500',
      icon: <SiTailwindcss size={32} />,
    },
    {
      name: 'JavaScript',
      level: 'Advanced',
      color: 'from-yellow-400 to-orange-500',
      icon: <SiJavascript size={32} />,
    },
    {
      name: 'HTML & CSS',
      level: 'Advanced',
      color: 'from-orange-500 to-blue-600',
      icon: (
        <div className="flex gap-1">
          <SiHtml5 size={28} />
          <SiCss3 size={28} />
        </div>
      ),
    },
    {
      name: 'UI/UX Design',
      level: 'Intermediate',
      color: 'from-pink-500 to-purple-500',
      icon: <SiFigma size={32} />,
    },
    {
      name: 'Git & GitHub',
      level: 'Advanced',
      color: 'from-gray-800 to-gray-600',
      icon: (
        <div className="flex gap-1">
          <SiGit size={28} />
          <SiGithub size={28} />
        </div>
      ),
    }
  ];

  const interests = [
    { 
      title: 'Frontend Development', 
      description: 'Membangun antarmuka pengguna yang responsif dan interaktif dengan teknologi modern', 
      icon: '💻',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    { 
      title: 'UI/UX Design', 
      description: 'Menciptakan pengalaman pengguna yang intuitif dan estetik', 
      icon: '🎨',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    { 
      title: 'Modern Web Tech', 
      description: 'Mengeksplorasi teknologi web terdepan dan framework terbaru', 
      icon: '🚀',
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    { 
      title: 'Problem Solving', 
      description: 'Menyelesaikan tantangan kompleks dengan solusi kreatif dan efisien', 
      icon: '🧩',
      gradient: 'from-orange-500/20 to-red-500/20'
    }
  ];

  const learningTech = [
    { name: 'Next.js', color: 'bg-black text-white' },
    { name: 'TypeScript', color: 'bg-blue-600 text-white' },
    { name: 'Framer Motion', color: 'bg-purple-600 text-white' },
    { name: 'Node.js', color: 'bg-green-600 text-white' }
  ];

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

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-24 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Mahasiswa Informatika yang passionate dalam menciptakan pengalaman digital yang bermakna
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Personal Introduction - Spans 2 columns */}
          <div className={`lg:col-span-2 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                  👋
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Hello, I'm a Developer!
                  </h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Saya adalah mahasiswa <span className="font-semibold text-blue-600 dark:text-blue-400">Informatika</span> yang 
                    passionate dalam dunia pengembangan web, khususnya di bidang <span className="font-semibold text-purple-600 dark:text-purple-400">Frontend Development</span> 
                    <span> dan </span><span className="font-semibold text-emerald-600 dark:text-emerald-400">UI/UX Design</span>.
                  </p>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                Setiap baris kode yang saya tulis adalah langkah menuju visi menciptakan pengalaman digital yang tidak hanya 
                fungsional, tetapi juga memberikan dampak positif bagi pengguna. Saya percaya bahwa teknologi terbaik adalah 
                yang dapat mempermudah hidup manusia.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600">
                  🎓 Mahasiswa Informatika
                </span>
                <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
                  💻 Frontend Developer
                </span>
                <span className="px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700">
                  🎨 UI/UX Enthusiast
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">📊</span>
                Quick Stats
              </h3>
              
              <div className="space-y-6">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">2+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years Learning</div>
                </div>
                
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-2xl">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">10+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Projects Built</div>
                </div>
                
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-2xl">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">6</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Interests Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Skills */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                <span className="text-3xl mr-4">🛠️</span>
                Technical Skills
              </h3>
              
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group p-4 bg-slate-50 dark:bg-slate-700 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="w-10 h-10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white">
                            {skill.name}
                          </div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">
                            {skill.level}
                          </div>
                        </div>
                      </div>
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                <span className="text-3xl mr-4">💡</span>
                Interests & Focus
              </h3>
              
              <div className="space-y-4">
                {interests.map((interest, index) => (
                  <div 
                    key={index}
                    className={`p-6 bg-gradient-to-br ${interest.gradient} border border-slate-200 dark:border-slate-600 rounded-2xl hover:shadow-lg transition-all duration-300 group`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {interest.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                          {interest.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Currently Learning */}
        <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700 mb-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center justify-center">
              <span className="text-3xl mr-4">📚</span>
              Currently Learning
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {learningTech.map((tech, index) => (
                <div 
                  key={index}
                  className={`px-6 py-3 ${tech.color} rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-lg`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 rounded-3xl p-12 text-white dark:text-slate-900 shadow-2xl">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Let's Collaborate!</h3>
            <p className="text-slate-300 dark:text-slate-600 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Saya selalu terbuka untuk proyek-proyek menarik, kolaborasi kreatif, dan kesempatan belajar baru. 
              Mari kita ciptakan sesuatu yang luar biasa bersama!
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}