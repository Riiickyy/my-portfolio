import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Serves api/contact.js during `npm run dev` so the form works locally without `vercel dev`.
// Reads RESEND_API_KEY and CONTACT_TO_EMAIL from .env.local.
function localApi() {
  return {
    name: 'local-api',
    apply: 'serve',
    configureServer(server) {
      Object.assign(process.env, loadEnv(server.config.mode, process.cwd(), ''))

      server.middlewares.use('/api/contact', async (req, res) => {
        let raw = ''
        for await (const chunk of req) raw += chunk
        req.body = raw

        // Minimal stand-in for Vercel's res.status().json()
        res.status = (code) => {
          res.statusCode = code
          return res
        }
        res.json = (data) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
          return res
        }

        const { default: handler } = await server.ssrLoadModule('/api/contact.js')
        await handler(req, res)
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), localApi()],
})
