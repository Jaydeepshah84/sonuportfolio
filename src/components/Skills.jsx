import { useEffect, useRef } from 'react'
import Reveal from './Reveal'
import { Icon } from './Sprite'
import { gsap, ScrollTrigger } from '../lib/smoothScroll'

const COLS = [
  {
    icon: 'i-pen', cat: 'Design',
    bars: [['UI Design', 95], ['Wireframing', 90], ['Prototyping', 92], ['UX Research', 88], ['Interaction Design', 86]],
  },
  {
    icon: 'i-swatch', cat: 'Tools',
    bars: [['Figma', 95], ['Adobe XD', 88], ['Photoshop', 85], ['Illustrator', 80], ['Framer / Webflow', 84]],
  },
  {
    icon: 'i-users', cat: 'Professional',
    bars: [['Problem Solving', 93], ['Leadership', 87], ['Team Collaboration', 91], ['Communication', 89], ['Time Management', 90]],
  },
]

export default function Skills() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.bar').forEach((bar) => {
        const fill = bar.querySelector('b')
        const level = bar.dataset.level
        gsap.fromTo(
          fill,
          { width: '0%' },
          {
            width: level + '%', duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: bar, start: 'top 88%', once: true },
          }
        )
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section skills" id="skills" ref={root}>
      <Reveal className="section__head">
        <span className="eyebrow">Core Skills</span>
        <h2 className="section__title">A toolkit built for <span className="grad-text">great design.</span></h2>
      </Reveal>

      <div className="skills__grid">
        {COLS.map((col, i) => (
          <Reveal as="div" className="skills__col glass-card" delay={i * 100} key={col.cat}>
            <h3 className="skills__cat"><Icon id={col.icon} /> {col.cat}</h3>
            {col.bars.map(([name, level]) => (
              <div className="bar" data-level={level} key={name}>
                <span>{name}<em style={{ fontStyle: 'normal', color: 'var(--accent-3)' }}>{level}%</em></span>
                <i><b /></i>
              </div>
            ))}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
