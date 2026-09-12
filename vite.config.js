import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: if you deploy to GitHub Pages at
// https://s27315.github.io/<repo-name>/
// set base to '/<repo-name>/' below (keep the slashes).
// If you deploy to Vercel/Netlify instead, leave base as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
