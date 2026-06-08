import { Icon } from './Sprite'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#home" className="brand">
          Sonu <span className="brand__accent">Singh</span>
        </a>
        <p>UI/UX Designer · Product Designer · Data-Informed</p>
        <div className="footer__socials">
          <a href="#" aria-label="LinkedIn"><Icon id="i-linkedin" /></a>
          <a href="mailto:sonu@example.com" aria-label="Email"><Icon id="i-mail" /></a>
          <a href="#" aria-label="Resume"><Icon id="i-file" /></a>
        </div>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Sonu Singh. Designed &amp; built with precision.</p>
    </footer>
  )
}
