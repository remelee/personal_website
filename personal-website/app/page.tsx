import Image from "next/image";
import Header from "./header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-20 p-24">
      <Header/>
      <div className = "text-center text-9xl"> Hi, I&apos;m Rebecca.</div>
      <div className = "text-center text-xl"> I am a second year computer science major at Northeastern University with a passion for tech and design. </div>
    </main>
  );
}
