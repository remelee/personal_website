'use client'

import Header from "../header";

export default function ContactPage() {
  const castleAscii = `                                 ____                                         
                              .-"    \`-.      ,                               
                            .'          '.   /j\\                               
                           /               \\,/:/#\\                /\\           
                          ;               ,//' '/#\\              //#\\          
                          |              /' :   '/#\\            /  /#\\         
                          :         ,  /' /'    '/#\\__..--"""""/    /#\\__      
                           \\       /'\\'-._:__    '/#\\        ;      /#, """---
                            \`-.   / ;#\\']" ; """--./#J        ':____...!       
                               \`-/   /#\\  J  [;[;[;Y]          |      ;        
""""""---....             __.--"/    '/#\\ ;   " "  |     !     |   #! |        
              ""--.. _.--""     /      ,/#\\'-..____.;_,   |    |   '  |        
                   "-.        :_....___,/#} "####" | '_.-",    | #['  |        
                       '-._      |[;[;[;[;|         |.;'  /;\\  |      |        
                       ,   \`-.   |        :     _   .;'    /;\\ |   #" |        
                       !      \`._:      _  ;   ##' .;'      /;\\|  _,  |        
                      .#\\"""---..._    ';, |      .;{___     /;\\  ]#' |__....--
           .--.      ;'/#\\         \\    ]! |       "| , """--./_J    /         
          /  '%;    /  '/#\\         \\   !' :        |!# #! #! #|    :\`.__      
         i__..'%] _:_   ;##J         \\      :"#...._!   '  "  "|__  |    \`--.._
          | .--""" !|""""  |"""----...J     | '##"" \`-._       |  """---.._    
     ____: |      #|      |         #|     |          "]      ;   ___...-"T,  
    /   :  :      !|      |   _______!_    |           |__..--;"""     ,;MM;  
   :____| :    .-.#|      |  /\\      /#\\   |          /'               ''MM;  
    |""": |   /   \\|   .----+  ;      /#\\  :___..--"";                   ,'MM; 
   _Y--:  |  ;     ;.-'      ;  \\______/#: /         ;                  ''MM; 
  /    |  | ;_______;     ____!  |"##"""MM!         ;                    ,'MM;
 !_____|  |  |"#"#"|____.'""##"  |       :         ;                     ''MM  
  | """"--!._|     |##""         !       !         :____.....-------"""""" |'
  |          :     |______                         ___!_ "#""#""#"""#"""#"""|  
__|          ;     |MM"MM"""""---..._______...--""MM"MM]                   |  
 "\\-.      :      |#                                  :                   |  
    /#'.    |      /##,                                !                   |  
    .',/'\\   |       #:#,                               ;       .==.       |  
  /"\\'#"\',.|       ##;#,                               !     ,'||||',     |  
        /;/ \`:       ######,          ____             _ :     M||||||M     |  
        ###          /;"\\.__"-._  """                 |===..M!!!!!!M_____|  
                            \`--..\`--.._____             _!_                    
                                           \`--...____\`;`;
  return (
    <main className="min-h-screen bg-background text-foreground font-mono relative overflow-hidden">
      <Header />

      <div className="max-w-7xl mx-auto px-12 pt-48 flex flex-col md:flex-row items-start justify-between gap-20">
        
        {/* Left Side: Contact Info */}
        <div className="flex-1 space-y-12 z-10">
          <div className="space-y-4">
            <h2 className="text-xl opacity-80 uppercase tracking-[0.2em]">You can contact me via:</h2>
            
            <div className="space-y-6">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/rebecca-megan-lee" 
                target="_blank"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <span className="text-2xl">in</span>
                <span className="text-xl group-hover:underline decoration-foreground/30 underline-offset-4 tracking-tight">
                  linkedin.com/in/rebeccameganlee
                </span>
              </a>

              {/* Email */}
              <a 
                href="mailto:lee.rebec@northeastern.edu" 
                className="flex items-center gap-4 group cursor-pointer"
              >
                <span className="text-2xl">✉</span>
                <span className="text-xl group-hover:underline decoration-foreground/30 underline-offset-4 tracking-tight">
                  lee.rebec@northeastern.edu
                </span>
              </a>
            </div>
          </div>

          {/* Terminal Window Decoration */}
          <div className="w-full max-w-md border border-foreground/20 rounded-sm bg-foreground/5 overflow-hidden shadow-2xl">
            <div className="bg-foreground/10 px-4 py-2 flex justify-between border-b border-foreground/20">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full border border-foreground/30" />
                <div className="w-2 h-2 rounded-full border border-foreground/30" />
                <div className="w-2 h-2 rounded-full border border-foreground/30" />
              </div>
              <span className="text-[10px] opacity-40 uppercase tracking-widest">Console.sh</span>
            </div>
            <div className="p-6 text-[12px] leading-relaxed opacity-70">
              <p className="text-[#3cd404]">{`> ping rebecca-lee.com`}</p>
              <p>64 bytes from rebecca-lee.com: icmp_seq=1 ttl=64 time=0.042 ms</p>
              <p>64 bytes from rebecca-lee.com: icmp_seq=2 ttl=64 time=0.038 ms</p>
              <p className="mt-2">--- rebecca-lee.com ping statistics ---</p>
              <p>Status: Online & Ready to Work</p>
            </div>
          </div>
        </div>

        {/* Right Side: Large ASCII Art */}
        <div className="hidden lg:block flex-1 opacity-40 select-none pointer-events-none">
          <pre className="text-[15px] leading-[16px] whitespace-pre font-mono">
            {castleAscii}
          </pre>
        </div>
      </div>
    </main>
  );
}