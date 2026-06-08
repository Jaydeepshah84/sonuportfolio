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
          <a href="https://www.linkedin.com/in/sonu-singh-52a2a5273/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon id="i-linkedin" /></a>
          <a href="mailto:sonu.singh201104@gmail.com" aria-label="Email"><Icon id="i-mail" /></a>
          <a href="tel:+919997690954" aria-label="Phone"><Icon id="i-mobile" /></a>
          <a href="https://drive.google.com/file/d/1q5duWAXx00vAlUNeI27VjLg6x7j4Nb-x/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="View work">
            <Icon id="i-file" />
          </a>
        </div>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Sonu Singh. Designed &amp; built with precision.</p>
    </footer>
  )
}
