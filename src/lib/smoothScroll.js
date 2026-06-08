import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Initialise Lenis smooth scrolling and bind it to GSAP's ticker so
 * ScrollTrigger stays in sync. Returns the Lenis instance for cleanup.
 */
export function initSmoothScroll() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) return null

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  lenis.on('scroll', ScrollTrigger.update)

  const raf = (time) => lenis.raf(time * 1000)
  gsap.ticker.add(raf)
  gsap.ticker.lagSmoothing(0)

  lenis._gsapRaf = raf
  return lenis
}

export function destroySmoothScroll(lenis) {
  if (!lenis) return
  gsap.ticker.remove(lenis._gsapRaf)
  lenis.destroy()
}

export { gsap, ScrollTrigger }
