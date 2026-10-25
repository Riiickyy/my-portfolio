import { motion } from 'motion/react'
import Img from './Img.jsx'
import CountUp from './CountUp.jsx'
import { ArrowUpRight } from './Icons.jsx'

// Use on the grid that wraps the cards so they appear one after another
export const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const ease = [0.2, 0.8, 0.2, 1]

// Each section enters differently: projects rise up, case studies scale in
const entrances = {
  up: {
    hidden: { opacity: 0, y: 48 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.88 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
  },
}

// One card for both projects and case studies. The media box shares a
// layoutId with the modal so it grows smoothly into the popup.
export default function WorkCard({ item, index = 0, enter = 'up', onOpen }) {
  return (
    <motion.article className="card" variants={entrances[enter]} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }}>
      <motion.div
        className={`card__media ${item.fit === 'contain' ? 'media--contain' : ''}`}
        layoutId={`media-${item.id}`}
        style={{ borderRadius: 0 }}
      >
        <Img src={item.image} alt={`${item.title} screenshot`} label={item.title} />
      </motion.div>

      <div className="card__body">
        <span className="card__meta">
          <span className="card__index">{String(index + 1).padStart(2, '0')}</span>
          {item.kicker && <span className="card__kicker">{item.kicker}</span>}
        </span>
        {item.stat && (
          <span className="stat">
            {item.stat.text ?? <CountUp {...item.stat} />}
            <small>{item.stat.label}</small>
          </span>
        )}
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <div className="tags">
          {item.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="card__actions">
          <motion.button className="btn btn--primary btn--small" onClick={() => onOpen(item)} whileTap={{ scale: 0.95 }}>
            Read More
          </motion.button>
          {item.url && item.url !== '#' && (
            <a className="link-arrow" href={item.url} target="_blank" rel="noreferrer">
              View Site <ArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
