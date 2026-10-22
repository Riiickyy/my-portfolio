import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { MenuIcon, CloseIcon } from './Icons.jsx'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu if the window grows to desktop width
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 821px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <motion.header
      className={`nav ${scrolled || open ? 'nav--scrolled' : ''}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="container nav__inner" aria-label="Main">
        <a href="#top" className="nav__logo">
          Ricky<span className="accent">.</span>
        </a>

        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <a className="nav__link" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.a href="#contact" className="btn btn--primary btn--small nav__cta" whileTap={{ scale: 0.96 }}>
          Contact Me
        </motion.a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn btn--primary" onClick={() => setOpen(false)}>
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
