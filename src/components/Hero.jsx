import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Magnetic from './Magnetic'
import { Icon } from './Sprite'
import useCountUp from '../hooks/useCountUp'
import FigmaLogo from './FigmaLogo'
import HeroCollage from './HeroCollage'
import HeroBg from './HeroBg'

const ease = [0.22, 1, 0.36, 1]
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }

function Stat({ count, suffix, label }) {
  const ref = useCountUp(count, suffix)
  return (
    <div className="hero__stat">
      <span className="num" ref={ref}>0{suffix}</span>
      <small>{label}</small>
    </div>
  )
}

export default function Hero() {
  // 3D tilt on the photo
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 15 })
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 15 })
  const photoRef = useRef(null)

  const onTilt = (e) => {
    const el = photoRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }
  const resetTilt = () => { px.set(0); py.set(0) }

  return (
    <section className="hero section" id="home">
      <HeroBg />
      <div className="hero__inner">
        <motion.div className="hero__left" variants={container} initial="hidden" animate="show">
          <motion.span className="chip" variants={item}>
            <i className="dot" /> Product Designer · UI/UX Specialist
          </motion.span>
          <motion.h1 className="hero__title" variants={item}>
            Designing Digital<br />
            <span className="grad-text">Experiences</span> That<br />
            Users Love.
          </motion.h1>
          <motion.p className="hero__sub" variants={item}>
            UI/UX designer helping startups and growing businesses craft clean,
            intuitive web &amp; mobile products — backed by an analytical,
            data-informed approach to every decision.
          </motion.p>

          <motion.div className="hero__cta" variants={item}>
            <Magnetic><a href="#connect" className="btn btn--primary">Hire Me</a></Magnetic>
            <Magnetic>
              <a
                href="https://drive.google.com/file/d/1q5duWAXx00vAlUNeI27VjLg6x7j4Nb-x/view?usp=sharing"
                className="btn btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="dribbble" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M5 7c3.5 3 9 4.5 14 3.5M3.5 14c4-1.5 9-1 12.5 2.5M9 3c3 3.5 5.5 8.5 6 17" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                View My Work
              </a>
            </Magnetic>
          </motion.div>

          <motion.div className="hero__stats" variants={item}>
            <Stat count={4} suffix="+" label="Years Designing" />
            <Stat count={30} suffix="+" label="Projects Shipped" />
            <Stat count={100} suffix="%" label="Client Satisfaction" />
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__right"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
        >
          <motion.svg
            className="hero__doodle"
            viewBox="0 0 90 120"
            aria-hidden="true"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 1.4, delay: 0.9, ease: 'easeInOut' }}
          >
            <motion.path
              d="M78 8C70 4 40 2 30 24c-8 18 14 26 20 14C56 27 36 22 20 36c-12 11-12 30-4 44"
              fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"
            />
            <path d="M10 70l6 12 12-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>

          <motion.div
            className="hero__photo tilt"
            ref={photoRef}
            onMouseMove={onTilt}
            onMouseLeave={resetTilt}
            style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
          >
            <div className="hero__photo-glow" />
            <div className="hero__avatar">
              <img src="/assets/sonu.png" alt="Sonu Singh" />
              <span className="hero__avatar-fallback">SS</span>
            </div>

            <motion.span className="float-tag float-tag--excel" animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
              <Icon id="i-pen" /> UI Design
            </motion.span>
            <motion.span className="float-tag float-tag--kpi" animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}>
              <Icon id="i-layout" /> Prototyping
            </motion.span>
            <motion.span className="float-tag float-tag--ops" animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>
              <Icon id="i-bulb" /> UX Research
            </motion.span>
            <motion.span className="float-logo" aria-label="Figma" animate={{ y: [0, -14, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
              <FigmaLogo />
            </motion.span>
          </motion.div>
        </motion.div>
      </div>

      <HeroCollage />

      <a href="#about" className="scroll-cue" aria-label="Scroll down"><span /></a>
    </section>
  )
}
