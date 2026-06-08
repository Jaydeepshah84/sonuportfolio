import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/smoothScroll'

/**
 * GSAP count-up driven by ScrollTrigger. Counts from 0 → target the first
 * time the element scrolls into view.
 */
export default function useCountUp(target, suffix = '') {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obj = { v: 0 }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      el.textContent = target + suffix
      return
    }

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: 'power3.out',
          onUpdate: () => {
            el.textContent = Math.round(obj.v) + suffix
          },
        })
      },
    })
    return () => st.kill()
  }, [target, suffix])

  return ref
}
