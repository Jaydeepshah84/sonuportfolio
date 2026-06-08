import Reveal from './Reveal'
import { Icon } from './Sprite'

const SERVICES = [
  { no: '01', icon: 'i-pen', title: 'UX & UI Design', text: 'Clean, intuitive interfaces designed for better, more delightful user experiences.', active: true },
  { no: '02', icon: 'i-mobile', title: 'Web & Mobile App Design', text: 'Modern, responsive designs for websites and mobile apps that scale beautifully.' },
  { no: '03', icon: 'i-swatch', title: 'Brand & Creative', text: 'Logos, brand identities and creative design that elevate how your business is seen.' },
  { no: '04', icon: 'i-swatch', title: 'Design Systems & Handoff', text: 'Reusable components and developer-ready assets for a smooth, consistent launch.' },
]

export default function Services() {
  return (
    <section className="section services">
      <Reveal className="section__head">
        <span className="eyebrow">What I Do</span>
        <h2 className="section__title">Digital service to <span className="grad-text">grow your business.</span></h2>
      </Reveal>

      <div className="services__list">
        {SERVICES.map((s, i) => (
          <Reveal as="div" className={`service${s.active ? ' is-active' : ''}`} tabIndex={0} key={s.no} delay={i * 70}>
            <div className="service__no">{s.no}</div>
            <span className="service__ico"><Icon id={s.icon} /></span>
            <div className="service__body">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
            <span className="service__arrow"><Icon id="i-arrow" /></span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
