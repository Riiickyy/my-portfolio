import { motion } from 'motion/react'
import Reveal from './Reveal.jsx'
import { testimonials } from '../data/testimonials.js'

// A two-column grid on desktop; on phones the CSS turns it into a swipeable row.
export default function Testimonials() {
  return (
    <section className="section section--tint" id="testimonials">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2>
            What my <span className="accent">clients say.</span>
          </h2>
        </Reveal>

        <div className="quotes">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              className="quote"
              style={{ margin: 0 }}
              initial={{ opacity: 0, y: 40, rotate: i % 2 ? 1.5 : -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <span className="quote__mark" aria-hidden>
                “
              </span>
              <span className="quote__stars" aria-label={`${t.rating} out of 5 stars`}>
                {'★'.repeat(t.rating)}
              </span>
              <blockquote>
                {t.quote.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </blockquote>
              <figcaption>
                <span>
                  <strong>{t.name}</strong>
                  <span>{t.company}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <p className="quotes__hint">Swipe to read more →</p>
      </div>
    </section>
  )
}
