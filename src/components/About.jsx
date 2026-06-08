import Reveal from './Reveal'
import { Icon } from './Sprite'

const CARDS = [
  { icon: 'i-pen', title: 'UI & Visual Design', text: 'Clean, modern interfaces with thoughtful typography, colour and spacing that feel premium.' },
  { icon: 'i-bulb', title: 'UX & Research', text: 'User flows, wireframes and prototypes shaped by real behaviour and data, not guesswork.' },
  { icon: 'i-swatch', title: 'Design Systems', text: 'Scalable component libraries and handoff-ready files that keep teams fast and consistent.' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <Reveal className="section__head">
        <span className="eyebrow">About Me</span>
        <h2 className="section__title">The mind behind the <span className="grad-text">interface.</span></h2>
      </Reveal>

      <div className="about__grid">
        <Reveal className="about__text">
          <p>
            I'm a <strong>UI/UX &amp; product designer</strong> who crafts clean,
            intuitive interfaces for web and mobile — the kind of digital experiences
            that feel effortless to use. I partner with startups and growing teams to
            turn ideas into polished, user-friendly products.
          </p>
          <p>
            What sets me apart is an <strong>analytical, data-informed mindset</strong>.
            With a background in planning, operations and data analysis, I design with
            real numbers and user behaviour in mind — balancing beautiful visuals with
            measurable results.
          </p>
          <div className="about__pills">
            <span className="pill">User-centered</span>
            <span className="pill">Data-informed</span>
            <span className="pill">Detail-obsessed</span>
            <span className="pill">Pixel-perfect</span>
          </div>
        </Reveal>

        <div className="about__cards">
          {CARDS.map((c, i) => (
            <Reveal className="glass-card" delay={60 + i * 80} key={c.title}>
              <div className="glass-card__icon"><Icon id={c.icon} /></div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
