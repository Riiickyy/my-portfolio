# Ricky Panganiban — Portfolio

Vite + React one-page portfolio with Motion animations and a contact form that emails you through Resend.

## Run locally

```bash
npm install
npm run dev
```

The site runs at http://localhost:5173. The contact form needs the API, so to test it locally:

```bash
npm i -g vercel
cp .env.example .env.local   # then fill in your Resend key and email
vercel dev
```

## Edit content

All text lives in `src/data/`: `site.js`, `projects.js`, `caseStudies.js`, `testimonials.js`, `skills.js`.

Images go in `public/images/` (any missing image shows a purple placeholder):

| File | Used for |
| --- | --- |
| `public/images/portrait.jpg` | Hero photo |
| `public/images/about.jpg` | About section photo |
| `public/images/projects/` | Project screenshots (paths set in `projects.js`) |
| `public/images/case-studies/` | Case study mockups (paths set in `caseStudies.js`) |
| `public/images/og.png` | Link preview image (1200×630), not added yet |

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project**, import the repo, keep the **Vite** preset.
3. **Settings → Environment Variables**: add `RESEND_API_KEY` and `CONTACT_TO_EMAIL`.
4. Deploy. `api/contact.js` becomes a serverless function automatically; every `git push` redeploys.
