import React from "react";

export default function CertificatesSection() {
  const certificates = [
    {
      title: "The Complete 2024 Web Development Bootcamp",
      issuer: "Dr. Angela Yu | Udemy",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&h=400&fit=crop",
      url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    }
  ];

  return (
    <section id="certificates" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Certificates & Learning</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Proof of my dedication to continuous growth and learning
          </p>
        </div>
        
        <div className="flex justify-center">
          {certificates.map((cert, index) => (
            <div key={index} className="w-full max-w-2xl bg-slate-900/50 border border-slate-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group rounded-lg">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img 
                    className="h-48 w-full object-cover md:w-48" 
                    src={cert.image} 
                    alt={cert.title}
                  />
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="uppercase tracking-wide text-sm text-cyan-400 font-semibold">{cert.issuer}</div>
                    <p className="block mt-1 text-lg leading-tight font-medium text-white">{cert.title}</p>
                  </div>
                  <div className="mt-6">
                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                      <button className="border border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400 px-3 py-2 rounded text-sm flex items-center transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Certificate
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}