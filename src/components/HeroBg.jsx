/** Faded montage of design screenshots behind the hero content. */
const IMGS = ['w1', 'w5', 'w2', 'w6', 'w3', 'w7', 'w4', 'w8']

export default function HeroBg() {
  return (
    <div className="hero__bg" aria-hidden="true">
      {IMGS.map((id, i) => (
        <div className="hero__bg-tile" key={i}>
          <img src={`/assets/work/${id}.jpg`} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  )
}
