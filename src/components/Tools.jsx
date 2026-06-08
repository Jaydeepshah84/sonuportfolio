import { motion } from 'framer-motion'
import Reveal, { staggerContainer, staggerItem } from './Reveal'
import FigmaLogo from './FigmaLogo'

const AdobeBadge = ({ bg, fg, label, size = 10.5 }) => (
  <svg className="tool__logo" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="1.5" y="1.5" width="21" height="21" rx="4.5" fill={bg} />
    <text x="12" y="16.2" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize={size} fill={fg}>{label}</text>
  </svg>
)

const TOOLS = [
  { logo: <FigmaLogo className="tool__logo" />, name: 'Figma', level: 'Expert' },
  { logo: <AdobeBadge bg="#001E36" fg="#31A8FF" label="Ps" />, name: 'Photoshop', level: 'Advanced' },
  { logo: <AdobeBadge bg="#330000" fg="#FF9A00" label="Ai" />, name: 'Illustrator', level: 'Advanced' },
  { logo: <AdobeBadge bg="#470137" fg="#FF61F6" label="Xd" />, name: 'Adobe XD', level: 'Advanced' },
  { logo: <AdobeBadge bg="#00005B" fg="#9999FF" label="Ae" size={10} />, name: 'After Effects', level: 'Motion' },
  {
    logo: (
      <svg className="tool__logo" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#0055FF" d="M4 0H20V8H12Z M4 8H12L20 16H4Z M4 16H12V24H4Z" />
      </svg>
    ),
    name: 'Framer', level: 'Prototyping',
  },
]

export default function Tools() {
  return (
    <section className="section tools" id="tools">
      <Reveal className="section__head">
        <span className="eyebrow">My Toolkit</span>
        <h2 className="section__title">Tools I <span className="grad-text">design with.</span></h2>
        <p className="section__lead">The industry-standard apps I use daily to take products from idea to pixel-perfect launch.</p>
      </Reveal>

      <motion.div
        className="tools__grid"
        variants={staggerContainer(0.07)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      >
        {TOOLS.map((t) => (
          <motion.div className="tool" variants={staggerItem} whileHover={{ y: -7 }} key={t.name}>
            {t.logo}
            <div className="tool__txt"><span>{t.name}</span><small>{t.level}</small></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
