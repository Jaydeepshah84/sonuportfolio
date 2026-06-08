import Reveal from './Reveal'
import Magnetic from './Magnetic'

const PROJECTS = [
  { img: '/assets/work/w1.jpg', title: 'SaaS Analytics Dashboard', sub: 'Real-time metrics & reporting interface', tags: ['Dashboard', 'SaaS', 'Web App'] },
  { img: '/assets/work/w4.jpg', title: 'Marketing Website', sub: 'Conversion-focused landing experience', tags: ['Website', 'Landing', 'Branding'] },
  { img: '/assets/work/w3.jpg', title: 'E-Learning Platform', sub: 'Course discovery & learning UI', tags: ['Website', 'EdTech', 'UI'] },
]

const LOGOS = [
  {
    img: '/logo/anaira-wordmark.png',
    title: 'Anaira — Brand Identity',
    sub: 'Logo & brand identity for a quiet-luxury clothing label.',
    desc: 'Anaira is a clothing movement for both men and women — “old money” aesthetics blended with modern, effortless charm. The identity captures timeless elegance, quiet luxury, confidence and grace, carried across refined garments like tailored waistcoats, pleated skirts, baggy trousers and signature dresses.',
    tags: ['Branding', 'Logo', 'Identity'],
  },
  {
    img: '/logo/anaira-mark.png',
    title: 'ZYPHC — Smart Canteen App',
    sub: 'I worked as a UI/UX Designer — from logo to complete app UI design.',
    desc: 'A smart canteen app for college campuses that makes food ordering easier for students and helps canteen owners manage operations. Students browse menus, track live orders, pay via UPI and unlock rewards — while owners manage dishes, accept/reject orders, track sales and mark stock levels.',
    tags: ['Mobile App', 'UI/UX', 'Logo & Branding'],
  },
]

function Card({ children, title, sub, desc, tags, delay }) {
  return (
    <Reveal as="article" className="work-card" delay={delay}>
      {children}
      <div className="work-card__meta">
        <h3>{title}</h3>
        {sub && <p className="work-card__sub">{sub}</p>}
        {desc && <p className="work-card__desc">{desc}</p>}
        <div className="tags">{tags.map((t) => <span key={t}>{t}</span>)}</div>
      </div>
    </Reveal>
  )
}

export default function Work() {
  return (
    <section className="section work" id="work">
      <Reveal className="section__head">
        <span className="eyebrow">Selected Work</span>
        <h2 className="section__title">Designs that <span className="grad-text">users remember.</span></h2>
        <p className="section__lead">A glimpse of the web &amp; mobile products and brands I've designed — from SaaS dashboards to identities.</p>
      </Reveal>

      <div className="work__grid">
        {PROJECTS.map((p, i) => (
          <Card key={p.title} title={p.title} sub={p.sub} tags={p.tags} delay={i * 80}>
            <div className="work-card__shot">
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>
          </Card>
        ))}
        {LOGOS.map((l, i) => (
          <Card key={l.title} title={l.title} sub={l.sub} desc={l.desc} tags={l.tags} delay={(PROJECTS.length + i) * 80}>
            <div className="work-card__shot work-card__shot--logo">
              <img src={l.img} alt={l.title} loading="lazy" />
            </div>
          </Card>
        ))}
      </div>

      <Reveal className="work__cta" delay={120}>
        <Magnetic><a href="#connect" className="btn btn--ghost">Let's work together <span className="btn__arrow">↗</span></a></Magnetic>
      </Reveal>
    </section>
  )
}
