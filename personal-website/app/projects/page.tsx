'use client'

import Header from "../header";
import { useState } from "react";
import Image from 'next/image';

const PROJECTS = [
  { id: "00", name: "Hotel Review Sentiment Analysis", start: "Mar 2026", end: "Apr 2026", slug: "hotel",
    skills: "Python, scikit-learn, matplotlib, pytorch",
    description: "Analyzed hotel review sentiment as a binary classification problem using a Booking.com dataset of ~26,000 reviews, labeling ratings ≥ 8 as positive. Used TF-IDF text features alongside a custom cleanliness score for domain-specific signal. I trained Naive Bayes and Feedforward Neural Network models and compared them with Logistic Regression, SVM, and an ensemble of all four. All models achieved 83 - 86% accuracy; We found that simpler linear models matched or outperformed the neural network and noted that TF-IDF's lack of semantic context creates a performance ceiling across all approaches.",
    image: "/hotel.png", },
  { id: "01", name: "GameNite", start: "Jan 2026", end: "Apr 2026", slug: "gamenite",
    skills: "React, Typescript, Node.js, Express, Socket.io, REST, MongoDB, Zod, Vitest, Jest, Playwright",
    description: "GameNite is a full-stack web app featuring Nim, Number Guesser, and Uno with social and customization features. I redesigned the UI, added dark mode, overhauled the profile page, implemented messaging, and built a coin system with an in-app store for cosmetics.",
    image: "/gamenite.png", 
    siteUrl: "https://gamenite-609.onrender.com/" },
  { id: "02", name: "Hot Chocolate Stand", start: "Mar 2026", end: "Apr 2026", slug: "hotcocoa",
    skills: "Unity, C#",
    description: "Hot Chocolate Stand is a game where you manage a stand while competing against an AI rival. I developed the customer and reputation systems, and helped tune the adversary's behavior.",
    image: "/hotcocoa.png", 
    siteUrl: "https://lilytengoku.itch.io/hot-chocolate-stand" },
  { id: "03", 
    name: "Song Similarity", 
    start: "Feb 2026", end: "Mar 2026", 
    slug: "song", 
    skills: "Python, PyTorch, scikit-learn", 
    description: "Collaborated on a three-approach music recommendation system trained on 106,000 songs from the Free Music Archive. I implemented an unsupervised LSTM autoencoder that learns compressed song representations from 518 audio features (MFCCs, chroma, spectral statistics, etc.) across 7 time steps, without requiring genre labels. Achieved a 51% genre hit rate on similarity search (8x above the random baseline). We evaluated models using silhouette score, weighted F1, and cosine similarity. I also built a Gradio web demo for real-time song similarity search with infrastructure shared across all three approaches.",
    image: "/song.png" },
  { id: "04",
    name: "Dementia Detection Model Evaluation",
    start: "Nov 2024", end: "Dec 2024",
    slug: "dementia",
    skills: "Python, TensorFlow, scikit-learn, Matplotlib, NLTK",
    description: "Worked in a team of four to build models predicting dementia from transcriptions of patients describing a picture. Trained and compared logistic regression, SVM, feedforward neural networks, and BERT models, evaluating on precision, recall, F1, and accuracy. Found that Bag of Words (BoW) embeddings outperformed other approaches, supporting our hypothesis that dementia patients tend to use more repetitive language, which is a pattern BoW captures well.",
    image: "/dementiaStat.png" },
  { id: "05", name: "Stock Simulator", start: "Jun 2024", end: "Jun 2024", slug: "stock", skills: "Java, APIs, File I/O, GUI/CLI development, MVC architecture",
    description: "Developed a stock trading simulator with both CLI and GUI interfaces, following MVC architecture and integrating the Alpha Vantage API for real-time stock data. Implemented transaction support and portfolio management with save and load functionality.",
    image: "/stock.png" },
  { id: "06", name: "Ocean Awareness", start: "Feb 2024", end: "Feb 2024", slug: "ocean",
    skills: "React, Typescript, SCSS, Next.js",
    description: "Built an informational website about ocean conservation at HackBeanpot in under 48 hours. Created a dynamic frontend with smooth fade-in effects and scroll snapping for an engaging experience, and deployed the finished site.",
    image: "/oceans.png", 
    siteUrl: "https://ocean-awareness.vercel.app/" },
  { id: "07", name: "Crescent", start: "Oct 2024", end: "Dec 2023", slug: "crescent", skills: "React, JavaScript, CSS, HTML, Firebase",
    description: "Led frontend development on an Agile team to build a dating app-style website with profile creation, swiping, and messaging features. Integrated Firebase for backend storage and real-time synchronization of user data.",
    image: "/crescent.png", videoUrl: "https://www.youtube.com/watch?v=evrzhJGlR6Q" },
];

const SKILLS = "Python, Java, HTML/CSS, JavaScript, C/C++, C#, LaTeX, Bash, SQL, Assembly";
const FRAMEWORKS = " React, Node.js, NumPy, Pandas, TensorFlow, PyTorch, Scikit-learn, Keras, Matplotlib";
const TECH = " Git, Kubernetes, Datadog, Postman, Google Cloud Platform, Docker, MongoDB, Unity, Unreal Engine 5, Jupyter Notebook, VS Code, IntelliJ IDEA"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className="min-h-screen bg-background text-foreground font-mono transition-colors duration-300 relative">
      <Header />

      {/* 1. Skills Marquee Section */}
      <div className="mt-24 md:mt-32 lg:mt-40 border-t border-b border-foreground/20 py-2 overflow-hidden flex whitespace-nowrap">
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
                  className="px-2 md:px-7 py-1 border border-foreground/40 rounded-full text-[8px] md:text-[10px] tracking-widest uppercase hover:bg-foreground hover:text-background transition-all touch-target"
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
            <div className="w-full max-h-[40vh] md:max-h-none md:w-2/5 md:border-r border-foreground/10 border-b md:border-b-0 p-4 md:p-8 flex flex-col justify-center overflow-hidden">
              <h3 className="text-xl underline underline-offset-8 mb-8">Results:</h3>

              <div className="bg-white dark:bg-black p-4 rounded-sm relative">
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
            <div className="w-full md:w-3/5 p-6 md:p-12 overflow-y-auto">
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