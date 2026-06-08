import Reveal from './Reveal'
import { Icon } from './Sprite'
import useCountUp from '../hooks/useCountUp'

const STATS = [
  { count: 30, suffix: '+', label: 'Web & mobile projects designed' },
  { count: 100, suffix: '%', label: 'Client satisfaction across projects' },
  { count: 12, suffix: '+', label: 'Startups & teams collaborated with' },
  { count: 4, suffix: '+', label: 'Years crafting digital experiences' },
]

const LIST = [
  'Designed end-to-end web & mobile products for startups and growing teams.',
  'Built reusable design systems that sped up delivery and kept teams consistent.',
  'Combined analytical, data-informed thinking with clean, modern visual design.',
  'Collaborated cross-functionally from research through developer handoff.',
]

function StatCard({ count, suffix, label, delay }) {
  const ref = useCountUp(count, suffix)
  return (
    <Reveal as="div" className="stat-card glass-card" delay={delay}>
      <span className="stat-card__num" ref={ref}>0{suffix}</span>
      <p>{label}</p>
    </Reveal>
  )
}

export default function Achievements() {
  return (
    <section className="section achievements" id="achievements">
      <Reveal className="section__head">
        <span className="eyebrow">Key Achievements</span>
        <h2 className="section__title">Results that <span className="grad-text">speak.</span></h2>
      </Reveal>

      <div className="achievements__stats">
        {STATS.map((s, i) => <StatCard key={s.label} {...s} delay={i * 80} />)}
      </div>

      <div className="achievements__list">
        {LIST.map((t, i) => (
          <Reveal as="div" className="achievement" delay={i * 60} key={i}>
            <span><Icon id="i-check" /></span> {t}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
