import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Reveal from './Reveal.jsx'
import { CheckIcon, MailIcon } from './Icons.jsx'
import { site } from '../data/site.js'

// Choices for "What do you want to build?" (keep in sync with api/contact.js)
const projectTypes = ['Automation', 'Website', 'Landing Page / Sales Funnel']

const empty = { name: '', email: '', project: '', message: '', company: '' } // `company` is the spam honeypot

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      setStatus('success')
      setForm(empty)
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  return (
    <section className="section contact zone--night" id="contact">
      <div className="container">
        <Reveal className="contact__box">
          <div className="contact__intro">
            <span className="eyebrow">
              <span className="pulse" aria-hidden /> 06 / Available for new projects
            </span>
            <h2>Let’s build something that works for your business.</h2>
            <p>
              Whether you need a new website, a landing page that converts or help with the funnel behind it, tell me
              what you’re working on and I’ll get back to you within 1–2 days.
            </p>
            <div className="contact__links">
              <a href={`mailto:${site.email}`}>
                <MailIcon /> {site.email}
              </a>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                className="form__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.span
                  className="form__check"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 14, delay: 0.1 }}
                >
                  <CheckIcon width={26} height={26} />
                </motion.span>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I’ll reply to your email soon.</p>
                <button className="btn btn--outline btn--small" onClick={() => setStatus('idle')}>
                  Send another
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" className="form" onSubmit={handleSubmit} exit={{ opacity: 0, y: -10 }} noValidate={false}>
                <div className="form__row">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" required maxLength={100} autoComplete="name" placeholder="Your name" value={form.name} onChange={update} />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" placeholder="you@company.com" value={form.email} onChange={update} />
                  </div>
                </div>

                <fieldset className="field choices">
                  <legend>What do you want to build?</legend>
                  <div className="choices__options">
                    {projectTypes.map((type) => (
                      <label key={type} className={`choice ${form.project === type ? 'choice--active' : ''}`}>
                        <input
                          type="radio"
                          name="project"
                          value={type}
                          required
                          checked={form.project === type}
                          onChange={update}
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required minLength={10} maxLength={5000} placeholder="Tell me about your project, goals and timeline…" value={form.message} onChange={update} />
                </div>

                {/* Hidden from people; bots that fill it are rejected by the API */}
                <div className="field field--trap" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" tabIndex={-1} autoComplete="off" value={form.company} onChange={update} />
                </div>

                <p className="form__status form__status--error" role="alert">
                  {status === 'error' && error}
                </p>

                <motion.button
                  type="submit"
                  className="btn btn--primary"
                  disabled={status === 'sending'}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
