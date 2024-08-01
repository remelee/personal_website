import Header from "../header";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
    return (
      <div className="flex min-h-screen flex-col items-center space-y-14 p-24">
        <Header/> 
        <div className = "text-4xl text-center">
          E-mail: 
          <a className="hover:underline" href="mailto:rebeccameglee@gmail.com"> rebeccameglee@gmail.com</a>
          <br/>
          <a className="hover:underline" href="https://www.linkedin.com/in/rebecca-megan-lee/">LinkedIn</a>
        </div>
        </div>
        );
  }