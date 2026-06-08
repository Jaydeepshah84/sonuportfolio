import { motion } from 'framer-motion'
import Reveal, { staggerContainer, staggerItem } from './Reveal'
import { Icon } from './Sprite'

const ITEMS = [
  ['i-trend', 'Data Analytics'],
  ['i-rocket', 'Entrepreneurship'],
  ['i-compass', 'Business Strategy'],
  ['i-camera', 'Photography'],
  ['i-paddle', 'Table Tennis'],
  ['i-book', 'Continuous Learning'],
]

export default function Interests() {
  return (
    <section className="section interests">
      <Reveal className="section__head">
        <span className="eyebrow">Beyond Work</span>
        <h2 className="section__title">Things I'm <span className="grad-text">curious about.</span></h2>
      </Reveal>

      <motion.div
        className="interests__grid"
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      >
        {ITEMS.map(([icon, label]) => (
          <motion.div className="interest" variants={staggerItem} whileHover={{ y: -5 }} key={label}>
            <span><Icon id={icon} /></span> {label}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
