'use client'
import { useEffect, useState } from 'react'

export default function DarkToggle() {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    const root = document.documentElement
    const saved = localStorage.getItem('theme')
    const initial = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setIsDark(initial)
    if(initial) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [])
  function toggle() {
    const root = document.documentElement
    if(isDark) {
      root.classList.remove('dark'); localStorage.setItem('theme','light'); setIsDark(false)
    } else {
      root.classList.add('dark'); localStorage.setItem('theme','dark'); setIsDark(true)
    }
  }
  return (
    <button onClick={toggle} className="px-3 py-2 border rounded">
      {isDark ? 'Light' : 'Dark'}
    </button>
  )
}
