import { Fragment } from 'react'

const ITEMS = ['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Interaction Design']

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee">
      <div className="marquee__track">
        {loop.map((t, i) => (
          <Fragment key={i}>
            <span>{t}</span>
            <i>✦</i>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
