import { motion } from 'motion/react'
import Reveal from './Reveal.jsx'
import WorkCard, { gridVariants } from './WorkCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects({ onOpen }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Featured Projects</span>
          <h2>
            Recent <span className="accent">websites.</span>
          </h2>
          <p>Custom builds for ecommerce, music and real estate brands — fast, responsive and easy to manage.</p>
        </Reveal>

        <motion.div
          className="cards"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={gridVariants}
        >
          {projects.map((p) => (
            <WorkCard key={p.id} item={p} onOpen={onOpen} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
