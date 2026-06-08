import { useState } from 'react'
import Reveal from './Reveal'
import { Icon } from './Sprite'

const CHIPS = ['UI/UX Design', 'Web Design', 'Mobile App', 'Design System']

export default function Connect() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', msg: '' })
  const [chips, setChips] = useState({ 'UI/UX Design': true })
  const [note, setNote] = useState({ text: '', ok: true })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const toggle = (c) => setChips((s) => ({ ...s, [c]: !s[c] }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) {
      setNote({ text: 'Please enter a valid name and email.', ok: false })
      return
    }
    const interested = Object.keys(chips).filter((c) => chips[c]).join(', ')
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterested in: ${interested}\n\n${form.msg}`
    )
    setNote({ text: 'Opening your email client…', ok: true })
    window.location.href = `mailto:sonu@example.com?subject=${subject}&body=${body}`
    setTimeout(() => {
      setForm({ name: '', email: '', phone: '', msg: '' })
      setChips({ 'UI/UX Design': true })
      setNote({ text: 'Thanks! Your message is ready to send.', ok: true })
    }, 600)
  }

  return (
    <section className="section connect" id="connect">
      <div className="connect__grid">
        <Reveal className="connect__intro">
          <span className="chip"><i className="dot" /> Available for opportunities</span>
          <h2 className="section__title">Let's design something<br /><span className="grad-text">users love.</span></h2>
          <p>Have a product idea, a redesign in mind, or a flow that needs polish? Drop a line — I reply fast.</p>
          <ul className="connect__contacts">
            <li><span className="c-ico"><Icon id="i-mail" /></span> <a href="mailto:sonu@example.com">sonu@example.com</a></li>
            <li><span className="c-ico"><Icon id="i-pin" /></span> India</li>
            <li><span className="c-ico"><Icon id="i-linkedin" /></span> <a href="#" target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
        </Reveal>

        <Reveal as="form" className="connect__form glass-card" delay={120} onSubmit={submit} noValidate>
          <div className="field">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" placeholder="John from Apple" value={form.name} onChange={set('name')} required />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="email">Your Email</label>
              <input id="email" type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} required />
            </div>
            <div className="field">
              <label htmlFor="phone">WhatsApp / Phone</label>
              <input id="phone" type="text" placeholder="+91 00000 00000" value={form.phone} onChange={set('phone')} />
            </div>
          </div>

          <div className="field">
            <label>Interested in</label>
            <div className="chips-select">
              {CHIPS.map((c) => (
                <button type="button" key={c} className={`chip-toggle${chips[c] ? ' is-on' : ''}`} onClick={() => toggle(c)}>{c}</button>
              ))}
            </div>
          </div>

          <div className="field">
            <label htmlFor="msg">Message</label>
            <textarea id="msg" rows="3" placeholder="Tell me about your project..." value={form.msg} onChange={set('msg')} />
          </div>

          <button type="submit" className="btn btn--primary btn--block">Send Message <span className="btn__arrow">↗</span></button>
          <p className="form-note" style={{ color: note.ok ? '#46f59a' : '#ff6b8a' }}>{note.text}</p>
        </Reveal>
      </div>
    </section>
  )
}
