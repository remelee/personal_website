import Header from "./header";

export default function Home() {
  const asciiArt = `          ^^                                       ..
            []                                       []
          .:[]:_          ^^                       ,:[]:.
        .: :[]: :-.                             ,-: :[]: :.
      .: : :[]: : :\`._                       ,.': : :[]: : :.
    .: : : :[]: : : : :-._               _,-: : : : :[]: : : :.
_..: : : : :[]: : : : : : :-._________.-: : : : : : :[]: : : : :-._
_:_:_:_:_:_:[]:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:[]:_:_:_:_:_:_
!!!!!!!!!!!![]!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!![]!!!!!!!!!!!!!
^^^^^^^^^^^^[]^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[]^^^^^^^^^^^^^
            []                                       []
            []                                       []
            []                                       []
 ~~^-~^_~^~/  \\~^-~^~_~^-~_^~-^~_^~~-^~_~^~-~_~-^~_^/  \\~^-~_~^-~~-
~ _~~- ~^-^~-^~~- ^~_^-^~~_ -~^_ -~_-~~^- _~~_~-^_ ~^-^~~-_^-~ ~^
   ~ ^- _~~_-  ~~ _ ~  ^~  - ~~^ _ -  ^~-  ~ _  ~~^  - ~_   - ~^_~
     ~-  ^_  ~^ -  ^~ _ - ~^~ _   _~^~-  _ ~~^ - _ ~ - _ ~~^ -
jgs     ~^ -_ ~^^ -_ ~ _ - _ ~^~-  _~ -_   ~- _ ~^ _ -  ~ ^-
            ~^~ - _ ^ - ~~~ _ - _ ~-^ ~ __- ~_ - ~  ~^_-
                ~ ~- ^~ -  ~^ -  ~ ^~ - ~~  ^~ - ~`;

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 pt-48 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-2xl text-4xl leading-relaxed font-mono">
          I&apos;m Rebecca. A{" "}
          <span className="underline decoration-1 underline-offset-8">junior</span> at 
          Northeastern studying{" "}
          <span className="underline decoration-1 underline-offset-8">computer science</span> with a 
          concentration in{" "}
          <span className="underline decoration-1 underline-offset-8">artificial intelligence</span>.
        </div>

        <div className="text-right font-mono space-y-4 pt-2">
          <div className="tracking-widest uppercase text-sm">[Status: Open to Work]</div>
          <a 
            href="/RebeccaLeeResume.pdf" 
            target="_blank" 
            className="block text-lg underline underline-offset-4 hover:text-accent-hover transition-colors"
          >
            Download my resume
          </a>
        </div>
      </div>
      {/* Animated ASCII Section */}
      <div className="relative w-full mt-32 border-t border-foreground/10 pt-12 overflow-hidden pointer-events-none">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* The Container - 'flex' keeps them in one line, 'w-max' prevents wrapping */}
        <div className="flex w-max animate-marquee">
          {/* Render 5 copies to ensure coverage on all screen sizes */}
          {[0, 1, 2, 3, 4].map((i) => (
            <pre key={i} className="font-mono text-[10px] leading-none opacity-50 px-0 whitespace-pre">
              {asciiArt}
            </pre>
          ))}
        </div>
      </div>
    </main>
  );
}