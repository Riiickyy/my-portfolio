import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Img from './Img.jsx'
import { ArrowUpRight, CheckIcon, CloseIcon } from './Icons.jsx'

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } },
}

const row = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0 },
}

// Popup for a project or case study. Its image shares a layoutId with the card.
export default function ProjectModal({ item, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!item) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="modal__backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <button ref={closeRef} className="modal__close" onClick={onClose} aria-label="Close">
              <CloseIcon />
            </button>

            <motion.div
              className={`modal__media ${item.fit === 'contain' ? 'media--contain' : ''}`}
              layoutId={`media-${item.id}`}
            >
              <Img src={item.image} alt={`${item.title} screenshot`} label={item.title} />
            </motion.div>

            <div className="modal__body">
              {item.kicker && <span className="card__kicker">{item.kicker}</span>}
              <h2 id="modal-title">{item.title}</h2>
              <p>{item.summary}</p>

              <div className="tags">
                {item.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <h3>Here’s what I did</h3>
              <motion.ul className="modal__list" variants={list} initial="hidden" animate="show">
                {item.details.map((d) => (
                  <motion.li key={d.title} variants={row}>
                    <span className="modal__tick">
                      <CheckIcon />
                    </span>
                    <span>
                      <strong>{d.title}.</strong> {d.text}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              {item.result && <p className="modal__result">{item.result}</p>}

              {item.url && item.url !== '#' && (
                <div>
                  <a className="btn btn--primary" href={item.url} target="_blank" rel="noreferrer">
                    View Live Site <ArrowUpRight />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
