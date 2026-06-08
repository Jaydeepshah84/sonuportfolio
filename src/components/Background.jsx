import { useEffect, useRef } from 'react'
import { gsap } from '../lib/smoothScroll'

export default function Background() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax drift on the orbs as the page scrolls
      gsap.to('.orb--1', { yPercent: 30, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1 } })
      gsap.to('.orb--2', { yPercent: -25, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1 } })
      gsap.to('.orb--3', { yPercent: 20, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.4 } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-fx" ref={root}>
      <div className="orb orb--1" />
      <div className="orb orb--2" />
      <div className="orb orb--3" />
      <div className="grid-overlay" />
      <div className="noise" />
    </div>
  )
}
