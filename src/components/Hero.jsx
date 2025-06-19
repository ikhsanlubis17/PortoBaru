"use client"

import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Coffee } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const roles = [
    { text: "Frontend Developer", color: "text-blue-600 dark:text-blue-400", icon: Code },
    { text: "Mahasiswa Informatika", color: "text-emerald-600 dark:text-emerald-400", icon: Coffee },
    { text: "UI/UX Enthusiast", color: "text-purple-600 dark:text-purple-400", icon: Palette },
    { text: "Problem Solver", color: "text-orange-600 dark:text-orange-400", icon: Code }
  ];

  const photos = [
    {
      src: "/src/assets/PP.jpeg",
      alt: "Ikhsanul Arifin - Professional",
      theme: "from-blue-500/20 to-purple-500/20 dark:from-blue-400/20 dark:to-purple-400/20"
    },
    {
      src: "/src/assets/PP2.jpeg", 
      alt: "Ikhsanul Arifin - Casual",
      theme: "from-emerald-500/20 to-cyan-500/20 dark:from-emerald-400/20 dark:to-cyan-400/20"
    },
    {
      src: "/src/assets/PP3.jpeg",
      alt: "Ikhsanul Arifin - Creative",
      theme: "from-purple-500/20 to-pink-500/20 dark:from-purple-400/20 dark:to-pink-400/20"
    },
    {
      src: "/src/assets/PP2.jpeg",
      alt: "Ikhsanul Arifin - Working",
      theme: "from-orange-500/20 to-red-500/20 dark:from-orange-400/20 dark:to-red-400/20"
    }
  ];

  const stats = [
    { number: "2+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
    { number: "15+", label: "Projects Built", color: "from-purple-500 to-pink-500" },
    { number: "6", label: "Technologies", color: "from-emerald-500 to-teal-500" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    const photoInterval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
      setImageLoaded(false);
    }, 5000);

    return () => {
      clearInterval(roleInterval);
      clearInterval(photoInterval);
    };
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('about') || document.getElementById('projects') || document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => setImageError(true);

  const handlePhotoChange = (index) => {
    setCurrentPhoto(index);
    setImageLoaded(false);
    setImageError(false);
  };

  const CurrentIcon = roles[currentRole].icon;

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden pt-20"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/5 dark:bg-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full blur-3xl" />
        
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              
              <div className="lg:col-span-7 space-y-8 lg:space-y-12">
                <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                      Welcome to my digital space
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                      Hi, I'm{' '}
                      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent">
                        Rian
                      </span>
                    </h1>
                  </div>
                </div>

                <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <div className="flex items-center space-x-4 text-2xl sm:text-3xl lg:text-4xl font-semibold">
                    <span className="text-slate-700 dark:text-slate-300">A</span>
                    <div className="flex items-center space-x-3 min-h-[3rem]">
                      <CurrentIcon className={`w-8 h-8 sm:w-10 sm:h-10 ${roles[currentRole].color} transition-all duration-500`} />
                      <span className={`${roles[currentRole].color} transition-all duration-500 min-w-0`}>
                        {roles[currentRole].text}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    Membangun pengalaman digital yang bermakna melalui kode yang clean dan desain yang intuitif. 
                    Passionate dalam mengeksplorasi teknologi baru dan menyelesaikan tantangan kompleks.
                  </p>
                </div>

                <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                          {stat.number}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <button 
                    onClick={scrollToProjects}
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center">
                      View My Work
                      <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={scrollToContact}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300"
                  >
                    Get In Touch
                  </button>
                </div>

                <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <div className="flex items-center space-x-6">
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Connect with me</span>
                    <div className="flex space-x-3">
                      {[
                        { icon: Github, href: "https://github.com/ikhsanlubis17", label: "GitHub", color: "hover:bg-slate-900 hover:text-white" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/ikhsanularifin", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
                        { icon: Mail, href: "mailto:lubis163774@gmail.com", label: "Email", color: "hover:bg-emerald-600 hover:text-white" }
                      ].map((social, index) => (
                        <a
                          key={social.label}
                          href={social.href}
                          className={`w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                          aria-label={social.label}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-5 flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <div className="relative">
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
                    <div className={`absolute -top-6 -left-6 w-full h-full bg-gradient-to-br ${photos[currentPhoto].theme} rounded-3xl transition-all duration-1000`} />
                    <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-slate-500/10 to-slate-600/10 dark:from-slate-400/10 dark:to-slate-500/10 rounded-3xl" />
                    
                    <div className="relative w-full h-full bg-slate-200 dark:bg-slate-700 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-600">
                      {!imageError ? (
                        <>
                          <img
                            key={currentPhoto}
                            src={photos[currentPhoto].src || "/placeholder.svg"}
                            alt={photos[currentPhoto].alt}
                            className={`w-full h-full object-cover transition-all duration-700 ${
                              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                            }`}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                          />
                          
                          {!imageLoaded && (
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 animate-pulse" />
                          )}
                        </>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-8xl font-bold text-white dark:text-slate-800 mb-4">IA</div>
                            <div className="text-white/80 dark:text-slate-800/80 text-lg font-medium">Ikhsanul Arifin</div>
                          </div>
                        </div>
                      )}
                      
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {photos.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => handlePhotoChange(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentPhoto 
                                ? 'bg-white shadow-lg w-6' 
                                : 'bg-white/50 hover:bg-white/70'
                            }`}
                            aria-label={`Switch to photo ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="absolute -top-3 -right-3 flex items-center space-x-2 bg-white dark:bg-slate-800 rounded-full px-4 py-2 shadow-lg border border-slate-200 dark:border-slate-600">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Available</span>
                    </div>
                    
                    <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 rounded-2xl px-6 py-3 shadow-xl border border-slate-200 dark:border-slate-600">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-600 rounded-full" />
                        <div>
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Based in Indonesia</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">Open to remote work</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`flex justify-center mt-16 lg:mt-20 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex flex-col items-center space-y-4">
                <button 
                  onClick={scrollToNext}
                  className="group flex flex-col items-center space-y-3 py-2 px-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300 cursor-pointer"
                  aria-label="Scroll to next section"
                >
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                    Discover more
                  </span>
                  <div className="animate-bounce group-hover:animate-none">
                    <ArrowDown className="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 group-hover:translate-y-1 transition-all duration-300" />
                  </div>
                </button>
            
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
