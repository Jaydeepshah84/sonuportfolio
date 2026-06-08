import { motion } from 'framer-motion'
import Reveal, { staggerContainer, staggerItem } from './Reveal'

const ITEMS = [
  {
    quote: 'Sonu redesigned our dashboard and the difference was night and day. Cleaner, faster, and our users actually understand it now. A rare designer who thinks in data.',
    name: 'Ankit Verma', role: 'Founder · FinStack', a: '#7c5cff', b: '#e879f9', initial: 'A',
  },
  {
    quote: 'From wireframes to handoff, everything was organised and pixel-perfect. Our dev team barely had questions — one of the smoothest collaborations we\'ve had.',
    name: 'Priya Nair', role: 'Product Lead · Bloom', a: '#5ee0ff', b: '#7c5cff', initial: 'P',
  },
  {
    quote: 'He gets startups. Fast, thoughtful, and genuinely invested in the outcome. The new app UI directly lifted our onboarding completion. Highly recommend.',
    name: 'Rahul Mehta', role: 'CEO · QuickServe', a: '#e879f9', b: '#ff8a5c', initial: 'R',
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
            <div className="tcard__stars">★★★★★</div>
            <p className="tcard__quote">“{t.quote}”</p>
            <div className="tcard__person">
              <span className="tavatar" style={{ '--a': t.a, '--b': t.b }}>{t.initial}</span>
              <div><strong>{t.name}</strong><small>{t.role}</small></div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
