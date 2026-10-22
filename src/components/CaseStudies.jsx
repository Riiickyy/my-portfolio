import { motion } from 'motion/react'
import Reveal from './Reveal.jsx'
import WorkCard, { gridVariants } from './WorkCard.jsx'
import { caseStudies } from '../data/caseStudies.js'

export default function CaseStudies({ onOpen }) {
  return (
    <section className="section section--tint" id="case-studies">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Case Studies</span>
          <h2>
            From landing pages to <span className="accent">complete customer journeys.</span>
          </h2>
          <p>Projects where I worked across strategy, design, funnels and automation to solve different business goals.</p>
        </Reveal>

        <motion.div
          className="cards"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={gridVariants}
        >
          {caseStudies.map((c) => (
            <WorkCard key={c.id} item={c} onOpen={onOpen} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
