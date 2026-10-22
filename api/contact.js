import { Resend } from 'resend'

// Vercel serverless function: POST /api/contact
// Needs RESEND_API_KEY and CONTACT_TO_EMAIL environment variables.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Must match the choices in src/components/Contact.jsx
const PROJECT_TYPES = ['Automation', 'Website', 'Landing Page / Sales Funnel']

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {}
  const name = String(body.name || '').trim()
  const email = String(body.email || '').trim()
  const project = String(body.project || '').trim()
  const message = String(body.message || '').trim()
  const honeypot = String(body.company || '').trim()

  // Bots fill every field; pretend it worked so they don't retry
  if (honeypot) return res.status(200).json({ ok: true })

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in your name, email and message.' })
  }
  if (!PROJECT_TYPES.includes(project)) {
    return res.status(400).json({ error: 'Please choose what you want to build.' })
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }
  if (name.length > 100 || message.length < 10 || message.length > 5000) {
    return res.status(400).json({ error: 'Your message should be between 10 and 5,000 characters.' })
  }

  const RESEND_API_KEY = cleanEnv(process.env.RESEND_API_KEY)
  const CONTACT_TO_EMAIL = cleanEnv(process.env.CONTACT_TO_EMAIL)
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    const missing = [!RESEND_API_KEY && 'RESEND_API_KEY', !CONTACT_TO_EMAIL && 'CONTACT_TO_EMAIL'].filter(Boolean)
    console.error(`Missing env vars: ${missing.join(', ')} (VERCEL_ENV=${process.env.VERCEL_ENV})`)
    return res
      .status(500)
      .json({ error: `The contact form is not configured yet (missing ${missing.join(', ')}). Please email me directly.` })
  }

  try {
    const resend = new Resend(RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New ${project} enquiry from ${name.replace(/[\r\n]/g, ' ')}`,
      text: `Name: ${name}\nEmail: ${email}\nWants to build: ${project}\n\n${message}`,
    })

    if (error) {
      console.error('Resend error:', error, `(CONTACT_TO_EMAIL is ${JSON.stringify(CONTACT_TO_EMAIL)})`)
      return res.status(502).json({ error: 'Could not send your message. Please try again later.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact handler failed:', err)
    return res.status(500).json({ error: 'Could not send your message. Please try again later.' })
  }
}

// Dashboard-pasted values often carry stray whitespace or quotes
function cleanEnv(value) {
  return String(value || '')
    .trim()
    .replace(/^["']|["']$/g, '')
    .trim()
}

function safeParse(text) {
  try {
    return JSON.parse(text)
  } catch {
    return {}
  }
}
