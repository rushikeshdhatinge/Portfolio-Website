import React from "react";

export default function AboutSection() {
  const highlights = [
    {
      icon: "Code",
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: "Palette",
      title: "Design Focus",
      description: "Crafting beautiful interfaces with attention to user experience"
    },
    {
      icon: "Zap",
      title: "Performance",
      description: "Building fast, optimized applications that users love"
    }
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case "Code":
        return (
          <svg className="w-8 h-8 text-cyan-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case "Palette":
        return (
          <svg className="w-8 h-8 text-cyan-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        );
      case "Zap":
        return (
          <svg className="w-8 h-8 text-cyan-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate developer  experience 
                  building web applications that combine beautiful design with powerful functionality.
                </p>
                <p>
                  My journey started with curiosity about how websites work, and it has evolved into a love for 
                  creating digital experiences that solve real problems and delight users.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="bg-slate-900/50 border border-slate-700 p-6 hover:border-cyan-400/50 transition-colors rounded-lg">
                  {getIcon(item.icon)}
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8da74d26f_Rushi.png" 
                alt="Rushikesh Profile" 
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl transform rotate-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}