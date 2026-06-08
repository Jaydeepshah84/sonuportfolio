import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  ['#home', 'Home'],
  ['#about', 'About'],
  ['#work', 'Portfolio'],
  ['#tools', 'Tools'],
  ['#testimonials', 'Testimonials'],
  ['#connect', 'Connect'],
]

export default function Navbar() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scrollspy
  useEffect(() => {
    const sections = LINKS.map(([h]) => document.querySelector(h)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive('#' + e.target.id) }),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  // Lock page scroll while the full-screen menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <motion.header
        className={`nav${stuck ? ' is-stuck' : ''}${open ? ' menu-open' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav__inner">
          <a href="#home" className="brand" onClick={close}>
            Sonu <span className="brand__accent">Singh</span>
          </a>

          <nav className="nav__links nav__links--desktop">
            {LINKS.map(([href, label]) => (
              <a key={href} href={href} className={`nav__link${active === href ? ' is-active' : ''}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className="nav__right">
            <a href="#connect" className="btn btn--pill">
              Let's Work <span className="btn__arrow">↗</span>
            </a>
            <button
              className="nav__burger"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen mobile menu — rendered OUTSIDE the transformed header */}
      <div className={`nav__overlay${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav className="nav__overlay-links">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className={active === href ? 'is-active' : ''} onClick={close}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav__overlay-foot">
          <a href="#connect" className="btn btn--primary" onClick={close}>Let's Work ↗</a>
        </div>
      </div>
    </>
  )
}
