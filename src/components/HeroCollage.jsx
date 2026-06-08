import { motion } from 'framer-motion'

const ROW_A = ['w1', 'w2', 'w3', 'w4']
const ROW_B = ['w5', 'w6', 'w7', 'w8']

const Row = ({ items, variant }) => {
  const loop = [...items, ...items]
  return (
    <div className={`collage__row collage__row--${variant}`}>
      {loop.map((id, i) => (
        <div className="collage__item" key={variant + i}>
          <img src={`/assets/work/${id}.jpg`} alt="Project preview" loading="lazy" />
        </div>
      ))}
    </div>
  )
}

export default function HeroCollage() {
  return (
    <motion.div
      className="hero-collage"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Row items={ROW_A} variant="a" />
      <Row items={ROW_B} variant="b" />
    </motion.div>
  )
}
