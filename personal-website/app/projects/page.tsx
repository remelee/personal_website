'use client'

import Header from "../header";
import { useState } from "react";
import Image from 'next/image';

const PROJECTS = [
  { id: "01", 
    name: "Dementia detection model evaluation", 
    start: "Nov 2024", end: "Dec 2024", 
    slug: "dementia", 
    skills: "Python, TensorFlow, scikit-learn, Matplotlib, NLTK", 
    description: "Worked in a team of four to develop models predicting dementia from transcriptions of people describing a picture. "
    + "The data was labeled by whether the speaker had dementia. We trained and compared logistic regression, SVM, feed-forward neural networks, "
    + "and BERT models, evaluating through precision, recall, F1, and accuracy. We then visualized it using Matplotlib."
    + " We observed that a Bag of Words (BoW) embedding outperformed other approaches, supporting our hypothesis that dementia patients tend to "
    + "be more repetitive, thus this can be effectively captured by BoW.", 
    image: "/dementiaStat.png" },
  { id: "02", name: "Stock simulator", start: "Jun 2024", end: "Jun 2024", slug: "stock", skills: "Java, APIs, File I/O, GUI/CLI development, MVC architecture", 
    description: "Developed a stock trading simulator in Java with CLI and GUI interfaces, with Alpha Vantage API integration following" 
    + " an MVC architecture. Implemented real-time stock data retrieval allowing users to make transactions, as well as capabilities to" 
    + " manage, save, and load a stock portfolio.", 
    image: "/stock.png" },
  { id: "03", name: "Ocean awareness", start: "Feb 2024", end: "Feb 2024", slug: "ocean", 
    skills: "React, Typescript, SCSS, Next.js", 
    description: "Participated in HackBeanpot and created a functional informational website about the oceans in under 48 hours using "
    + "React, Typescript, SCSS, and Next.js. Developed a dynamic frontend experience featuring smooth fade-in effects and scroll snapping"
    + " to create an engaging user experience, and successfully deployed the site.", 
    image: "/oceans.png", 
    siteUrl: "https://ocean-awareness.vercel.app/" },
  { id: "04", name: "Crescent", start: "Oct 2024", end: "Dec 2023", slug: "crescent", skills: "React, JavaScript, CSS, HTML, Firebase", 
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
      <div className="mt-24 md:mt-52 border-t border-b border-foreground/20 py-2 overflow-hidden flex whitespace-nowrap">
        <div className="flex animate-marquee">
          {[0, 1, 2].map((i) => (
            <span key={i} className="mx-2 md:mx-4 text-[10px] md:text-sm tracking-widest uppercase text-[#3cd404]">
              <span className="text-red-500 mr-2">SKILLS:</span>
              {SKILLS}
              <span className="text-red-500 mr-2 ml-4 md:ml-8">FRAMEWORKS AND LIBRARIES:</span>
              {FRAMEWORKS}
              <span className="text-red-500 mr-2 ml-4 md:ml-8">TECHNOLOGIES:</span>
              {TECH}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Projects Table */}
      <div className="max-w-6xl mx-auto px-3 md:px-6 mt-12 md:mt-16 pb-24">
        <div className="border border-foreground/30 rounded-sm overflow-x-auto">
          {/* Table Header */}
          <div className="grid grid-cols-[1fr_70px] md:grid-cols-[60px_1fr_120px_120px_100px] gap-2 md:gap-4 p-2 md:p-4 border-b border-foreground/30 text-[10px] md:text-xs text-foreground/60 tracking-tighter uppercase">
            <span className="hidden md:inline">ID</span>
            <span>Project Name</span>
            <span className="hidden md:inline">Start Date</span>
            <span className="hidden md:inline">End Date</span>
            <span className="text-center">View</span>
          </div>

          {/* Table Rows */}
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="grid grid-cols-[1fr_70px] md:grid-cols-[60px_1fr_120px_120px_100px] gap-2 md:gap-4 p-2 md:p-4 items-center border-b border-foreground/10 last:border-0 hover:bg-foreground/5 transition-colors"
            >
              <span className="text-[10px] md:text-sm opacity-60 hidden md:inline">{project.id}</span>
              <span className="text-[10px] md:text-sm uppercase tracking-tight font-bold md:font-normal">{project.name}</span>
              <span className="text-[10px] md:text-sm hidden md:inline">{project.start}</span>
              <span className="text-[10px] md:text-sm hidden md:inline">{project.end}</span>
              
              <div className="flex justify-center">
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="px-2 md:px-4 py-1 border border-foreground/40 rounded-full text-[8px] md:text-[10px] tracking-widest uppercase hover:bg-foreground hover:text-background transition-all touch-target"
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-2 md:p-4">
          {/* Responsive modal: stacks on mobile, side-by-side on desktop */}
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] md:h-auto md:aspect-video bg-background border border-foreground/30 shadow-2xl flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
          
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-background/80 rounded-full text-foreground/50 hover:text-foreground"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Left Column: Image/Diagram */}
            <div className="w-full md:w-1/2 md:border-r border-foreground/10 border-b md:border-b-0 p-6 md:p-12 flex flex-col justify-center">
              <h3 className="text-xl underline underline-offset-8 mb-8">Results:</h3>
              
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
            <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto">
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