'use client'

import { useEffect, useRef, useState } from 'react'

type Sparkle = {
  id: number
  x: number
  y: number
  char: string
  size: number
  opacity: number
  createdAt: number
}

const SPARKLE_CHARS = ['*', '+', '.', '·', '✦']
const LIFETIME_MS = 900
const MIN_DISTANCE = 14

export default function SparkleTrail() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const lastPos = useRef<{ x: number; y: number } | null>(null)
  const nextId = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e
      const last = lastPos.current
      if (last) {
        const dx = x - last.x
        const dy = y - last.y
        if (Math.hypot(dx, dy) < MIN_DISTANCE) return
      }
      lastPos.current = { x, y }

      const sparkle: Sparkle = {
        id: nextId.current++,
        x: x + (Math.random() - 0.5) * 12,
        y: y + (Math.random() - 0.5) * 12,
        char: SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)],
        size: 11 + Math.random() * 8,
        opacity: 0.55 + Math.random() * 0.45,
        createdAt: performance.now(),
      }
      setSparkles((prev) => [...prev, sparkle])
    }

    const tick = () => {
      const now = performance.now()
      setSparkles((prev) => {
        const next = prev.filter((s) => now - s.createdAt < LIFETIME_MS)
        return next.length === prev.length ? prev : next
      })
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', handleMove)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'hidden',
        color: 'var(--foreground)',
        fontFamily: "'Courier New', Courier, monospace",
      }}
    >
      {sparkles.map((s) => (
        <span
          key={s.id}
          style={{
            position: 'absolute',
            left: s.x,
            top: s.y,
            color: 'currentColor',
            opacity: s.opacity,
            fontSize: s.size,
            animation: `sparkle-fade ${LIFETIME_MS}ms ease-out forwards`,
            willChange: 'opacity, transform',
            userSelect: 'none',
          }}
        >
          {s.char}
        </span>
      ))}
    </div>
  )
}
