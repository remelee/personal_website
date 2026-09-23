import Header from "./header";
import TypewriterIntro from "./typewriter-intro";

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
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-48 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
        <TypewriterIntro
          className="max-w-2xl text-xl md:text-4xl leading-relaxed font-mono"
          segments={[
            { text: "I’m Rebecca. A " },
            { text: "senior", underline: true },
            { text: " at Northeastern studying " },
            { text: "computer science", underline: true },
            { text: " with a concentration in " },
            { text: "artificial intelligence", underline: true },
            { text: "." },
          ]}
        />

        <div className="text-right font-mono space-y-4 pt-2 text-sm md:text-base">
          <div className="tracking-widest uppercase text-xs md:text-sm text-[#0aa30a]">[Status: Looking for full-time]</div>
          <a 
            href="/RebeccaLeeResume.pdf" 
            target="_blank" 
            className="block underline underline-offset-4 hover:text-accent-hover transition-colors"
          >
            Download my resume
          </a>
        </div>
      </div>
      <div className="relative w-full mt-16 md:mt-32 border-t border-foreground/10 pt-8 md:pt-12 overflow-hidden pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max animate-marquee">
          {[0, 1, 2, 3, 4].map((i) => (
            <pre key={i} className="font-mono text-[6px] md:text-[10px] leading-none opacity-50 px-0 whitespace-pre">
              {asciiArt}
            </pre>
          ))}
        </div>
      </div>
    </main>
  );
}