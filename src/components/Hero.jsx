import { motion } from 'motion/react'
import Img from './Img.jsx'
import { ArrowUpRight, CodeIcon, LayoutIcon } from './Icons.jsx'
import { site } from '../data/site.js'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } },
}

const badges = [
  { icon: <CodeIcon />, title: 'Web Developer', sub: 'Custom builds', cls: 'badge--1', delay: 0.9 },
  { icon: <LayoutIcon />, title: 'Landing Pages', sub: 'Built to convert', cls: 'badge--2', delay: 1.05 },
  {
    icon: <span className="badge__num">{site.experience}</span>,
    title: 'Years',
    sub: 'Experience',
    cls: 'badge--3',
    delay: 1.2,
  },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow">
            {site.name} · {site.role}
          </motion.span>

          <h1 className="hero__title">
            <motion.span variants={item}>I build websites</motion.span>
            <motion.span variants={item} className="accent">
              that turn visitors
            </motion.span>
            <motion.span variants={item}>into customers.</motion.span>
          </h1>

          <motion.p variants={item} className="hero__sub">
            I design and develop websites, landing pages and funnels, combining clean code, conversion-focused
            design and automation to help businesses grow.
          </motion.p>

          <motion.div variants={item} className="hero__actions">
            <motion.a href="#contact" className="btn btn--primary" whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
              Contact Me
            </motion.a>
            <motion.a href="#projects" className="btn btn--outline" whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
              View My Work <ArrowUpRight />
            </motion.a>
          </motion.div>

          <motion.p variants={item} className="hero__meta">
            <strong>{site.experience} years</strong> building websites, landing pages &amp; funnels
          </motion.p>
        </motion.div>

        <div className="hero__visual">
          <motion.div
            className="hero__ring"
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
          <motion.div
            className="hero__circle"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
          />
          <motion.div
            className="hero__portrait"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Img src={site.portrait} alt={`Portrait of ${site.name}`} label="Add portrait.jpg" />
          </motion.div>

          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              className={`badge ${b.cls}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { delay: b.delay, duration: 0.4 },
                scale: { delay: b.delay, duration: 0.4 },
                y: { delay: b.delay + 0.4, duration: 3.2 + i * 0.4, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <span className="badge__icon">{b.icon}</span>
              <span>
                <strong>{b.title}</strong>
                <small>{b.sub}</small>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
