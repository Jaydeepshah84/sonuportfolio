import { motion } from 'framer-motion'
import Reveal, { staggerContainer, staggerItem } from './Reveal'

const ITEMS = [
  {
    photo: '/assets/people/p1.jpg',
    quote: 'Sonu redesigned our dashboard and the difference was night and day. Cleaner, faster, and our users actually understand it now.',
    name: 'Ankit Verma', role: 'Founder · FinStack',
  },
  {
    photo: '/assets/people/p2.jpg',
    quote: 'From wireframes to handoff, everything was organised and pixel-perfect. One of the smoothest design collaborations we\'ve had.',
    name: 'Priya Nair', role: 'Product Lead · Bloom',
  },
  {
    photo: '/assets/people/p3.jpg',
    quote: 'He gets startups. Fast, thoughtful, and invested in the outcome. The new app UI directly lifted our onboarding completion.',
    name: 'Rahul Mehta', role: 'CEO · QuickServe',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <Reveal className="section__head">
        <span className="eyebrow">Testimonials</span>
        <h2 className="section__title">Words that speak to <span className="grad-text">my results.</span></h2>
      </Reveal>

      <motion.div
        className="tcards"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      >
        {ITEMS.map((t) => (
          <motion.article className="tcard glass-card" variants={staggerItem} key={t.name}>
            <div className="tcard__media">
              <img src={t.photo} alt={t.name} loading="lazy" />
              <button className="tcard__play" aria-label={`Play ${t.name}'s testimonial`}>▶</button>
              <div className="tcard__namebar">
                <strong>{t.name}</strong>
                <small>{t.role}</small>
              </div>
            </div>
            <div className="tcard__body">
              <div className="tcard__stars">★★★★★</div>
              <p className="tcard__quote">{t.quote}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
