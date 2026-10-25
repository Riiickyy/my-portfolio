import { motion } from 'motion/react'
import Reveal from './Reveal.jsx'
import Img from './Img.jsx'
import CountUp from './CountUp.jsx'
import { site } from '../data/site.js'

// Quick facts, taken from the case studies. Swap in other numbers any time.
// Facts with `count` animate up from zero when they scroll into view.
const facts = [
  { value: 'BSIT', label: 'IT graduate' },
  { count: { value: 800, prefix: '₱', suffix: 'K' }, label: 'Client sales from one funnel' },
  { count: { value: 50, suffix: '+' }, label: 'Event seats filled' },
]

export default function About() {
  return (
    <section className="section zone--paper" id="about">
      <div className="container about__grid">
        <motion.div
          className="about__photo"
          initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.7, 0, 0.2, 1] }}
        >
          <Img src={site.aboutPhoto} alt={`${site.name} at work`} label="Add about.jpg" />
        </motion.div>

        <div className="about__text">
          <Reveal>
            <span className="eyebrow">05 / About Me</span>
            <h2>
              I like solving the journey, <span className="accent">not just designing the page.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              I’m Ricky, a Bachelor of Science in Information Technology graduate who designs and develops websites,
              landing pages and funnels for businesses across ecommerce, real estate, music and coaching.
            </p>
            <p>
              Working on campaigns taught me that a page doesn’t work by itself. The ad creates the expectation, the
              page continues the conversation, and the funnel handles the next step — so I build with the whole
              customer journey in mind.
            </p>
            <p>
              Whether I’m building a custom website, improving an existing one or setting up the automation behind a
              funnel, my goal is the same: clean, fast, easy-to-manage work that helps the business grow.
            </p>
          </Reveal>

          <div className="about__facts">
            {facts.map((f, i) => (
              <Reveal key={f.label} delay={0.2 + i * 0.08} className="about__fact">
                <strong>{f.count ? <CountUp {...f.count} /> : f.value}</strong>
                <span>{f.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
