'use client'

import Header from "../header";
import { useState } from "react";
import Image from 'next/image';

const PROJECTS = [
  { id: "01", 
    name: "Dementia detection model evaluation", 
    start: "Nov 2024", end: "Dec 2024", 
    slug: "dementia", 
    skills: "python, tensorflow, scikit-learn, matplotlib", 
    description: "Worked in a team of four to develop models predicting dementia using DementiaBank data, "
    + "training logistic regression, SVM, feed-forward neural networks, and BERT models to examine how different"
    + "models perform. I evaluated model performance through precision, recall, F1, and accuracy, and visualized it using Matplotlib", 
    image: "/dementiaStat.png" },
  { id: "02", name: "Stock simulator", start: "Jun 2024", end: "Jun 2024", slug: "stock", skills: "java", 
    description: "Developed a stock trading simulator in Java with CLI and GUI interfaces, with Alpha Vantage API integration following" 
    + " an MVC architecture. Implemented real-time stock data retrieval allowing users to make transactions, as well as manage, save," 
    + " and load a stock portfolio ", 
    image: "/stock.png" },
  { id: "03", name: "Ocean awareness", start: "Feb 2024", end: "Feb 2024", slug: "ocean", 
    skills: "React, Typescript, SCSS, Next.js", 
    description: "Participated in HackBeanpot and created a functional informational website about the oceans in under 48 hours with "
    + "React, Typescript, SCSS, and Next.js. Built and deployed a dynamic frontend experience featuring smooth fade-in effects and scroll snapping", 
    image: "/oceans.png", 
    siteUrl: "https://ocean-awareness.vercel.app/" },
  { id: "04", name: "Crescent", start: "Oct 2024", end: "Dec 2023", slug: "crescent", skills: "React, JavaScript, CSS, HTML", 
    description: "Led frontend development to build a stylized website using React, JavaScript, CSS, and HTML that resembles popular" 
    + " dating apps with profile creation, swiping, and messaging features, as part of an Agile team. Incorporated Firebase for backend"
    + " storage and instant data synchronization of user profiles ", 
    image: "/crescent.png", videoUrl: "https://www.youtube.com/watch?v=evrzhJGlR6Q" },
];

const SKILLS = "Python, Java, C/C++, HTML/CSS, JavaScript, LaTeX, Bash, SQL, Assembly";
const FRAMEWORKS = " React, Node.js, NumPy, Pandas, TensorFlow, PyTorch, Scikit-learn, Keras, Matplotlib";
const TECH = " Git, Kubernetes, Datadog, Postman, Google Cloud Platform, Docker, Jupyter Notebook, VS Code, IntelliJ IDEA"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className="min-h-screen bg-background text-foreground font-mono transition-colors duration-300 relative">
      <Header />

      {/* 1. Skills Marquee Section */}
      <div className="mt-52 border-t border-b border-foreground/20 py-2 overflow-hidden flex whitespace-nowrap">
        <div className="flex animate-marquee">
          {[0, 1, 2].map((i) => (
            <span key={i} className="mx-4 text-sm tracking-widest uppercase text-[#3cd404]">
              <span className="text-red-500 mr-2">SKILLS:</span>
              {SKILLS}
              <span className="text-red-500 mr-2 ml-8">FRAMEWORKS AND LIBRARIES:</span>
              {FRAMEWORKS}
              <span className="text-red-500 mr-2 ml-8">TECHNOLOGIES:</span>
              {TECH}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Projects Table */}
      <div className="max-w-6xl mx-auto px-6 mt-16 pb-24">
        <div className="border border-foreground/30 rounded-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-[60px_1fr_120px_120px_100px] gap-4 p-4 border-b border-foreground/30 text-xs text-foreground/60 tracking-tighter uppercase">
            <span>ID</span>
            <span>Project Name</span>
            <span>Start Date</span>
            <span>End Date</span>
            <span className="text-center">View</span>
          </div>

          {/* Table Rows */}
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="grid grid-cols-[60px_1fr_120px_120px_100px] gap-4 p-4 items-center border-b border-foreground/10 last:border-0 hover:bg-foreground/5 transition-colors"
            >
              <span className="text-sm opacity-60">{project.id}</span>
              <span className="text-sm uppercase tracking-tight">{project.name}</span>
              <span className="text-sm">{project.start}</span>
              <span className="text-sm">{project.end}</span>
              
              <div className="flex justify-center">
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-1 border border-foreground/40 rounded-full text-[10px] tracking-widest uppercase hover:bg-foreground hover:text-background transition-all"
                >
                  Open
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. The Project Overlay (Modal) */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-6xl aspect-video bg-background border border-foreground/30 shadow-2xl flex overflow-hidden">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-50 text-foreground/50 hover:text-foreground transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Left Column: Image/Diagram */}
            <div className="w-1/2 border-r border-foreground/10 p-12 flex flex-col justify-center">
              <h3 className="text-xl underline underline-offset-8 mb-8">Diagram of results:</h3>
              
              <div className="bg-white p-4 rounded-sm relative">
                {selectedProject.image ? (
                  <div className="relative w-full aspect-[4/3]">
                    <Image 
                      src={selectedProject.image} 
                      alt={selectedProject.name}
                      fill
                      className="object-contain"
                      priority // Ensures the project image loads immediately when the modal opens
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-[4/3] bg-gray-100 flex items-center justify-center text-black text-xs">
                    [ {selectedProject.name} NO IMAGE DATA ]
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Info */}
            <div className="w-1/2 p-12 overflow-y-auto">
              <h2 className="text-4xl font-twinkle leading-tight mb-8">
                {selectedProject.name}
              </h2>
              
              <div className="mb-8">
                <span className="text-xl underline underline-offset-8 mr-4">Skills:</span>
                <span className="text-lg opacity-80">{selectedProject.skills}</span>
              </div>

              <ul className="space-y-6 text-lg leading-relaxed list-disc list-inside opacity-90">
                {selectedProject.description}
              </ul>

              {/* NEW: Action Buttons */}
              <div className="mt-12 flex gap-4">
                {selectedProject.siteUrl && (
                  <a 
                    href={selectedProject.siteUrl} 
                    target="_blank" 
                    className="px-6 py-2 border border-foreground bg-foreground text-background text-xs uppercase tracking-widest hover:bg-transparent hover:text-foreground transition-all"
                  >
                    Visit Live Site
                  </a>
                )}

                {selectedProject.videoUrl && (
                  <a 
                    href={selectedProject.videoUrl} 
                    target="_blank" 
                    className="px-6 py-2 border border-foreground/40 text-xs uppercase tracking-widest hover:border-foreground transition-all flex items-center gap-2"
                  >
                    <span>▶</span> Watch Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}