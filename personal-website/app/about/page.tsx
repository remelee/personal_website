import Header from "../header";
// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
    return (
      <div className="flex min-h-screen flex-col items-center space-y-10 p-24">
        <Header/> 
        <div className = "text-xl text-center text-balance">
        <div className = "text-6xl font-bold">About Me</div>
        <br/>
        <p>Hi, my name is Rebecca Lee. I am a second year at Northeastern University studying computer science with a 
        concentration in artificial intelligence. I find it fascinating the way tech has influence in nearly every sector,
        and I have immersed myself in various aspects of computer science through classes, extracurriculars, and personal exploration. 
        From machine learning to website creation, I aspire for opportunities to test out my skills and learn more.</p>
        <br/>
        <p>Besides computer science, I like art and baking. Creating things has always been something I enjoyed, and I have fun trying
          new things. ({"If you know any good recipes, let me know!"})</p>
          <br/>
        
          <div className = "text-4xl font-semibold">Feel free to get in contact!</div>
          <br/>
          E-mail: 
          <a className="hover:underline" href="mailto:rebeccameglee@gmail.com"> rebeccameglee@gmail.com</a>
          <br/>
          <a className="hover:underline" href="https://www.linkedin.com/in/rebecca-megan-lee/">LinkedIn</a>
        </div>
        </div>
        );
  }