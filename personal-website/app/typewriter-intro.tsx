'use client'

import { useEffect, useState } from 'react'

type Segment = { text: string; underline?: boolean }

type Props = {
  segments: Segment[]
  className?: string
  charDelay?: number
}

export default function TypewriterIntro({ segments, className, charDelay = 26 }: Props) {
  const [progress, setProgress] = useState(0)
  const [started, setStarted] = useState(false)

  const total = segments.reduce((n, s) => n + s.text.length, 0)

  useEffect(() => {
    const start = () => setStarted(true)
    if ((window as unknown as { __bootDone?: boolean }).__bootDone) {
      start()
      return
    }
    window.addEventListener('bootcomplete', start, { once: true })
    return () => window.removeEventListener('bootcomplete', start)
  }, [])

  useEffect(() => {
    if (!started || progress >= total) return
    const t = setTimeout(() => setProgress((p) => p + 1), charDelay)
    return () => clearTimeout(t)
  }, [started, progress, total, charDelay])

  let remaining = progress
  const rendered: React.ReactNode[] = []
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i]
    const take = Math.max(0, Math.min(seg.text.length, remaining))
    remaining -= seg.text.length
    if (take === 0) continue
    const shown = seg.text.slice(0, take)
    rendered.push(
      seg.underline ? (
        <span key={i} className="underline decoration-1 underline-offset-4 md:underline-offset-8">
          {shown}
        </span>
      ) : (
        <span key={i}>{shown}</span>
      )
    )
  }

  return (
    <div className={className} aria-label={segments.map((s) => s.text).join('')}>
      {rendered}
      <span className="blink-cursor" aria-hidden>_</span>
    </div>
  )
}
