import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'odonai', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-blue-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Odon Lab
                </h1>
                <p className="text-xs text-blue-300">Virology Research</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'projects', label: 'Projects' },
                { id: 'odonai', label: 'OdonAI' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'text-blue-100 hover:text-white hover:bg-blue-500/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-blue-500/20 text-blue-100 hover:bg-blue-500/30 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-blue-500/20">
              <nav className="px-6 py-4 space-y-3">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'odonai', label: 'OdonAI' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-blue-500 text-white'
                        : 'text-blue-100 hover:text-white hover:bg-blue-500/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.pexels.com/photos/8532850/pexels-photo-8532850.jpeg" 
              alt="Laboratory Research"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-indigo-900/80"></div>
          </div>
          
          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Welcome to 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 block">
                    Odon Lab
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  Advancing virology and immunology research at the University of Strathclyde under the leadership of Dr. Valerie Odon
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Research</h3>
                  <p className="text-blue-100 leading-relaxed">
                    We focus on cutting-edge virology research, exploring virus-host interactions, immune responses, and developing innovative therapeutic approaches.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73V16z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Education & Training</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Training the next generation of researchers and healthcare professionals in immunology and virology.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">About Dr. Valerie Odon</h2>
                <div className="text-left max-w-4xl mx-auto">
                  <p className="text-blue-100 text-lg leading-relaxed mb-6">
                    <strong className="text-white">Dr. Valerie Odon</strong> is a distinguished virologist and lecturer in Immunology at the Strathclyde Institute of Pharmacy and Biomedical Sciences, University of Strathclyde. With extensive expertise in viral immunology, she leads groundbreaking research initiatives that bridge fundamental virology with clinical applications.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Research Interests:</h4>
                      <ul className="space-y-2 text-blue-100">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          Virus-host cell interactions
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          Innate and adaptive immune responses
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          Viral pathogenesis mechanisms
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          Antiviral therapeutics development
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          Vaccine development and immunology
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Affiliation:</h4>
                      <div className="text-blue-100 space-y-2">
                        <p><strong className="text-white">University of Strathclyde</strong></p>
                        <p>Strathclyde Institute of Pharmacy and Biomedical Sciences</p>
                        <p>Department of Immunology</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Research Projects
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Exploring the frontiers of virology and immunology through innovative research initiatives
              </p>
            </div>

            <div className="grid gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Viral Pathogenesis Studies",
                  description: "Investigating the molecular mechanisms underlying viral infection and disease progression. Our research focuses on understanding how viruses interact with host cells and evade immune responses.",
                  keyAreas: "Viral entry mechanisms, replication strategies, immune evasion, and pathogenesis pathways.",
                  icon: "🧬"
                },
                {
                  title: "Antiviral Drug Development",
                  description: "Developing novel therapeutic approaches to combat viral infections. We utilize cutting-edge techniques to identify and characterize potential antiviral compounds.",
                  keyAreas: "Small molecule inhibitors, immunomodulatory agents, and combination therapies.",
                  icon: "🛡️"
                },
                {
                  title: "Vaccine Immunology",
                  description: "Studying immune responses to vaccines and developing improved vaccination strategies. Our work contributes to understanding vaccine efficacy and safety.",
                  keyAreas: "Adjuvant development, immune memory formation, and vaccine delivery systems.",
                  icon: "💉"
                },
                {
                  title: "Host-Pathogen Interactions",
                  description: "Examining the complex interplay between viruses and their hosts at the cellular and molecular level. This research informs our understanding of disease susceptibility and resistance mechanisms.",
                  keyAreas: "Advanced microscopy, proteomics, genomics, and systems biology approaches.",
                  icon: "🔬"
                }
              ].map((project, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start space-x-6">
                    <div className="text-4xl">{project.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-blue-100 mb-4 leading-relaxed">{project.description}</p>
                      <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30">
                        <strong className="text-white">Key Areas:</strong>
                        <span className="text-blue-100 ml-2">{project.keyAreas}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  <span className="text-3xl mr-3">🤝</span>
                  Collaborations
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  We actively collaborate with leading research institutions, pharmaceutical companies, and healthcare organizations worldwide to advance our research goals and translate discoveries into clinical applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OdonAI Section */}
        <section id="odonai" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fGJsdWV8MTc1MTYyMjk0NHww&ixlib=rb-4.1.0&q=85" 
              alt="AI Technology"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-indigo-900/90"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Odon<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Artificial Intelligence Applications in Virology and Immunology Research
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 mb-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">AI-Powered Research</h3>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed text-center">
                  OdonAI represents our commitment to integrating artificial intelligence and machine learning technologies into virology and immunology research. We leverage computational approaches to accelerate discovery and enhance our understanding of complex biological systems.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="text-3xl mr-3">🧠</span>
                    Machine Learning Applications
                  </h4>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      Viral sequence analysis and classification
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      Prediction of viral mutations and evolution
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      Drug target identification and optimization
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      Biomarker discovery for immune responses
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="text-3xl mr-3">📊</span>
                    Data Analytics
                  </h4>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2"></span>
                      High-throughput screening data analysis
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2"></span>
                      Genomic and proteomic data integration
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2"></span>
                      Clinical trial data modeling
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2"></span>
                      Epidemiological pattern recognition
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 mb-12">
                <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
                  <span className="text-4xl mr-3">⚙️</span>
                  Computational Tools
                </h3>
                <p className="text-blue-100 text-lg text-center mb-8">
                  We develop and utilize state-of-the-art computational tools and algorithms to:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-500/30">
                    <h5 className="text-xl font-semibold text-white mb-3">Structural Biology</h5>
                    <p className="text-blue-100 text-sm">
                      Predict viral protein structures and drug-target interactions using AI-driven molecular modeling approaches.
                    </p>
                  </div>
                  <div className="bg-indigo-500/20 rounded-xl p-6 border border-indigo-500/30">
                    <h5 className="text-xl font-semibold text-white mb-3">Systems Immunology</h5>
                    <p className="text-blue-100 text-sm">
                      Model complex immune system networks and predict responses to viral infections and treatments.
                    </p>
                  </div>
                  <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-500/30">
                    <h5 className="text-xl font-semibold text-white mb-3">Personalized Medicine</h5>
                    <p className="text-blue-100 text-sm">
                      Develop AI algorithms to predict individual patient responses to antiviral therapies and vaccines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl p-8 border border-blue-400/40 text-center">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                  <span className="text-3xl mr-3">💡</span>
                  Innovation in Research
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  By combining traditional laboratory techniques with cutting-edge AI technologies, OdonAI accelerates the pace of discovery and opens new avenues for understanding viral diseases and developing effective treatments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contact Us
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Get in touch with the Odon Lab team
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="text-3xl mr-3">👨‍🔬</span>
                    Dr. Valerie Odon
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Position:</p>
                        <p className="text-blue-100">Lecturer in Immunology</p>
                        <p className="text-blue-100">Strathclyde Institute of Pharmacy and Biomedical Sciences</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Institution:</p>
                        <p className="text-blue-100">University of Strathclyde</p>
                        <p className="text-blue-100">Glasgow, Scotland, UK</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Email:</p>
                        <a href="mailto:valerie.odon@strath.ac.uk" className="text-blue-400 hover:text-blue-300 transition-colors">
                          valerie.odon@strath.ac.uk
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="text-3xl mr-3">📍</span>
                    Location
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Address:</p>
                        <p className="text-blue-100">Strathclyde Institute of Pharmacy and Biomedical Sciences</p>
                        <p className="text-blue-100">University of Strathclyde</p>
                        <p className="text-blue-100">161 Cathedral Street</p>
                        <p className="text-blue-100">Glasgow G4 0RE, Scotland, UK</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Phone:</p>
                        <a href="tel:+441415482000" className="text-blue-400 hover:text-blue-300 transition-colors">
                          +44 (0)141 548 2000
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">✉️</span>
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Name *</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-4 py-3 bg-white/5 border border-blue-500/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Email *</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full px-4 py-3 bg-white/5 border border-blue-500/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Subject *</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 bg-white/5 border border-blue-500/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                      placeholder="Research inquiry, collaboration, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Message *</label>
                    <textarea 
                      required 
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-blue-500/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none"
                      placeholder="Tell us about your research interests, collaboration ideas, or any questions you have..."
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
                  >
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </span>
                  </button>
                </form>
              </div>

              <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl p-8 border border-blue-400/40 text-center">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                  <span className="text-3xl mr-3">🎓</span>
                  Research Opportunities
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-4">
                  We welcome inquiries from prospective students, postdoctoral researchers, and collaborators interested in virology and immunology research. Please contact Dr. Odon directly to discuss potential opportunities.
                </p>
                <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30">
                  <strong className="text-white">Current Opportunities:</strong>
                  <span className="text-blue-100 ml-2">PhD positions, postdoctoral fellowships, and research collaborations in virology and immunology.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-blue-500/20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Odon Lab</span>
            </div>
            <p className="text-blue-100 mb-2">
              © 2024 Odon Lab - University of Strathclyde. All rights reserved.
            </p>
            <p className="text-blue-300">
              Advancing virology and immunology research for a healthier future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;