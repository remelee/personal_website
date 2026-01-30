'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null 

  return (
    // The outer header stays full width and transparent
    <header className="fixed left-0 top-0 z-50 w-full bg-background px-6">
      <div className="
        max-w-7xl mx-auto 
        flex items-center justify-between
        border-t border-b border-foreground/20
        h-32 
        mt-6
      ">
        
        {/* Name */}
        <Link className="text-5xl font-display pt-1" href="/">
          Rebecca Lee
        </Link>
        
        {/* Nav & Toggle */}
        <div className="flex items-center gap-12">
          <nav className="flex items-center gap-8 font-mono text-sm tracking-[0.2em]">
            <Link className="hover:text-[#349eeb] dark:hover:text-[#A3B9FF] transition-colors" href="/projects">
              Projects
            </Link>
            <Link className="hover:text-[#349eeb] dark:hover:text-[#A3B9FF] transition-colors" href="/contact">
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 border border-foreground/10 rounded-md hover:bg-[#F7D2A7] dark:hover:bg-[#A3B9FF] transition-all"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  )
}