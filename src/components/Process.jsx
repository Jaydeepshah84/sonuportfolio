import Reveal from './Reveal'
import { Icon } from './Sprite'

const STEPS = [
  { no: '01', icon: 'i-bulb', title: 'Understand', text: 'I listen closely to understand your business goals, user needs and product vision.' },
  { no: '02', icon: 'i-eye', title: 'Research', text: 'I explore user behaviour and competitor trends to shape an effective design strategy.' },
  { no: '03', icon: 'i-layout', title: 'Wireframe', text: 'I create low-fidelity layouts to map out structure, navigation and user flow.', feature: true },
  { no: '04', icon: 'i-pen', title: 'Visual Design', text: 'I craft high-fidelity, on-brand interfaces with polished detail in every pixel.' },
  { no: '05', icon: 'i-mobile', title: 'Prototyping', text: 'I build interactive prototypes to test the experience before development.' },
  { no: '06', icon: 'i-check', title: 'Handoff & Support', text: 'I deliver organised assets and support developers for a smooth, accurate launch.' },
]

export default function Process() {
  return (
    <section className="section process" id="process">
      <Reveal className="section__head">
        <span className="eyebrow">How I Work</span>
        <h2 className="section__title">From <span className="grad-text">idea to interface.</span></h2>
        <p className="section__lead">A seamless journey that turns rough ideas into user-friendly digital products.</p>
      </Reveal>

      <div className="process__grid">
        {STEPS.map((s, i) => (
          <Reveal as="article" className={`proc-card glass-card${s.feature ? ' is-feature' : ''}`} delay={i * 60} key={s.no}>
            <div className="proc-card__top">
              <span className="proc-card__ico"><Icon id={s.icon} /></span>
              <span className="proc-card__no">{s.no}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
