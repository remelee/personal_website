'use client'

import { useEffect, useState } from 'react'

const LINES = [
  '> booting rebecca.lee v3.2.1',
  '> loading modules ......... [ok]',
  '> mounting sparkles ....... [ok]',
  '> compiling ascii ......... [ok]',
  '> ready.',
]

const CHAR_DELAY = 14
const LINE_PAUSE = 70
const FINAL_HOLD = 320

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

const signalDone = () => {
  ;(window as unknown as { __bootDone?: boolean }).__bootDone = true
  window.dispatchEvent(new Event('bootcomplete'))
}

export default function BootSequence() {
  const [output, setOutput] = useState<string[]>([])
  const [visible, setVisible] = useState<boolean | null>(null)

  useEffect(() => {
    if (sessionStorage.getItem('bootPlayed') === '1') {
      signalDone()
      setVisible(false)
      return
    }

    setVisible(true)

    let cancelled = false
    const acc: string[] = []

    const run = async () => {
      for (const line of LINES) {
        acc.push('')
        for (let i = 0; i < line.length; i++) {
          if (cancelled) return
          acc[acc.length - 1] = line.slice(0, i + 1)
          setOutput([...acc])
          await sleep(CHAR_DELAY)
        }
        await sleep(LINE_PAUSE)
      }
      await sleep(FINAL_HOLD)
      if (cancelled) return
      sessionStorage.setItem('bootPlayed', '1')
      signalDone()
      setVisible(false)
    }

    run()
    return () => {
      cancelled = true
    }
  }, [])

  if (visible !== true) return null

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        background: 'var(--background)',
        color: 'var(--foreground)',
        fontFamily: "'Courier New', Courier, monospace",
        padding: '32px 24px',
        fontSize: '14px',
        lineHeight: 1.7,
      }}
    >
      {output.map((line, i) => (
        <div key={i}>
          {line}
          {i === output.length - 1 && <span className="blink-cursor">_</span>}
        </div>
      ))}
    </div>
  )
}
