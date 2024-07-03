import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return(
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
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
        
        <p className="fixed left-0 top-0 flex w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <Link href="/about">About&nbsp;</Link>
        <Link href="/portfolio">Portfolio&nbsp;</Link>
        <Link href="/projects">Projects&nbsp;</Link>
        <Link href="/contact">Contact</Link>
        </p>
        </div>   
    )
}