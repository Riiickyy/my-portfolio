import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer zone--night">
      <div className="container">
        <p className="footer__mark" aria-hidden>
          {site.name}
        </p>
        <div className="footer__inner">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
