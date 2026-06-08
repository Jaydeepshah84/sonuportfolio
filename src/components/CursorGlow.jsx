import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    const el = ref.current
    let gx = innerWidth / 2, gy = innerHeight / 2, cx = gx, cy = gy
    let raf

    const onMove = (e) => { gx = e.clientX; gy = e.clientY }
    const render = () => {
      cx += (gx - cx) * 0.18
      cy += (gy - cy) * 0.18
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(render)
    }
    const over = (e) => {
      if (e.target.closest('a, button, .service, .interest, .glass-card, .chip-toggle, .tool, .work-card'))
        el.classList.add('is-hover')
    }
    const out = (e) => {
      if (e.target.closest('a, button, .service, .interest, .glass-card, .chip-toggle, .tool, .work-card'))
        el.classList.remove('is-hover')
    }

    addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    render()
    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [])

  return <div className="cursor-glow" ref={ref} />
}
