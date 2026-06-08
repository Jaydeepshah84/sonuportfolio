import Reveal from './Reveal'
import Magnetic from './Magnetic'

const PROJECTS = [
  {
    img: '/assets/work/w4.jpg',
    title: 'Dreamreach Marketing',
    sub: 'Brand & digital marketing for an India-based startup.',
    desc: 'Dreamreach Marketing is a startup based in India, committed to delivering meaningful and creative business solutions. Leveraging diverse expertise in marketing and industry knowledge, it blends professionalism with a personalized approach to support clients’ growth — building lasting partnerships by tailoring services to each client’s unique goals with sincerity and dedication.',
    link: 'https://drive.google.com/file/d/1MLA2Jnc0_VacgzF0CH68cpUNFXK19t6x/view?usp=sharing',
    tags: ['Digital Marketing', 'Branding', 'Strategy'],
  },
  {
    img: '/assets/work/w3.jpg',
    title: 'E-Learning Platform',
    sub: 'A centralized hub for digital, self-paced learning.',
    desc: 'Conceptualized and developed an interactive E-Learning Platform during my academic tenure, aimed at digitizing and organizing educational resources. It serves as a centralized hub for comprehensive study materials, conceptual notes and reference guides — designed with a user-centric approach to deepen understanding of complex subjects and promote structured, self-paced digital learning.',
    tags: ['Website', 'EdTech', 'UI'],
  },
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

function Card({ children, title, sub, desc, tags, delay, link }) {
  return (
    <Reveal as="article" className={`work-card${link ? ' is-link' : ''}`} delay={delay}>
      {children}
      <div className="work-card__meta">
        <h3>{title}</h3>
        {sub && <p className="work-card__sub">{sub}</p>}
        {desc && <p className="work-card__desc">{desc}</p>}
        <div className="tags">{tags.map((t) => <span key={t}>{t}</span>)}</div>
      </div>
      {link && (
        <a
          className="work-card__link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title}`}
        />
      )}
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
          <Card key={p.title} title={p.title} sub={p.sub} desc={p.desc} tags={p.tags} link={p.link} delay={i * 80}>
            <div className="work-card__shot">
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>
          </Card>
        ))}
        {LOGOS.map((l, i) => (
          <Card key={l.title} title={l.title} sub={l.sub} desc={l.desc} tags={l.tags} link={l.link} delay={(PROJECTS.length + i) * 80}>
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
