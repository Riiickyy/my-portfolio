import { motion } from 'motion/react'
import Reveal from './Reveal.jsx'
import WorkCard, { gridVariants } from './WorkCard.jsx'
import { caseStudies } from '../data/caseStudies.js'

export default function CaseStudies({ onOpen }) {
  return (
    <section className="section zone--night" id="case-studies">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <span className="eyebrow">03 / Case Studies</span>
            <h2>
              From landing pages to <span className="accent">complete customer journeys.</span>
            </h2>
          </div>
          <p>Projects where I worked across strategy, design, funnels and automation to solve different business goals.</p>
        </Reveal>

        <motion.div
          className="cards"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={gridVariants}
        >
          {caseStudies.map((c, i) => (
            <WorkCard key={c.id} item={c} index={i} enter="scale" onOpen={onOpen} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
