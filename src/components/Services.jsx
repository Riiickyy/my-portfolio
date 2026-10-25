import { motion } from 'motion/react'
import Reveal from './Reveal.jsx'
import { ArrowUpRight } from './Icons.jsx'
import { services } from '../data/services.js'

// Big numbered rows instead of cards; each slides in from the left.
export default function Services() {
  return (
    <section className="section zone--night" id="services">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">01 / Services</span>
          <h2>
            What I can <span className="accent">build for you.</span>
          </h2>
        </Reveal>

        <ol className="services">
          {services.map((s, i) => (
            <motion.li
              key={s.id}
              className="service"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
              <div className="service__head">
                <h3>{s.title}</h3>
                <p className="service__lead">{s.lead}</p>
              </div>
              <div className="service__body">
                <p>{s.text}</p>
                <div className="tags">
                  {s.points.map((p) => (
                    <span className="tag" key={p}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <a className="service__cta" href="#contact" aria-label={`Start a ${s.title} project`}>
                <ArrowUpRight width={22} height={22} />
              </a>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
