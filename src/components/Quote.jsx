import Reveal from './Reveal'

export default function Quote() {
  return (
    <section className="section quote">
      <Reveal className="quote__inner">
        <span className="quote__mark">"</span>
        <p className="quote__text">
          I believe great design lives where <span className="grad-text">analytical thinking</span>{' '}
          meets clean, human-centered execution — creating products that are as
          effective as they are beautiful.
        </p>
        <span className="quote__author">— Sonu Singh</span>
      </Reveal>
    </section>
  )
}
