import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return(
      <div className="flex fixed-left-0 top-0 w-full max-w-5xl items-center justify-between">
        <Link href="/">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/black-logo.svg"
          alt="Inverted Logo"
          width={180}
          height={37}
          priority
        />
        </Link>
        
        <p className="">
        <Link className = "hover:text-amber-600 hover:font-bold" href="/">Home&nbsp;&nbsp;&nbsp;</Link>
        <Link className = "hover:text-amber-600 hover:font-bold" href="/about">About&nbsp;&nbsp;&nbsp;</Link>
        <Link className = "hover:text-amber-600 hover:font-bold" href="/portfolio">Portfolio&nbsp;&nbsp;&nbsp;</Link>
        <Link className = "hover:text-amber-600 hover:font-bold" href="/projects">Projects&nbsp;&nbsp;&nbsp;</Link>
        </p>
        </div>   
    )
}