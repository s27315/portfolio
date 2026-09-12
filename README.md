# Shadia Amani — Portfolio

A React (Vite) portfolio site.

## Before you deploy — edit these placeholders

1. **CV link** in `src/App.jsx` — the "View CV" button currently points to `#`.
   Once your CV is ready, upload it (e.g. a PDF to Google Drive with
   "Anyone with the link can view", or a file in this repo) and paste the
   link in.
2. **Project descriptions** — several project cards in `src/App.jsx` say
   "Edit this line with...". Replace those with a real sentence about what
   each project does.
3. **About section** — replace the two placeholder paragraphs with your own
   words.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Deploy to GitHub Pages (matches your assignment brief)

1. Create a new GitHub repo, e.g. `portfolio`.
2. In `vite.config.js`, set `base: '/portfolio/'` (use your repo's actual
   name, with slashes on both sides).
3. Push this project to that repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/s27315/portfolio.git
   git push -u origin main
   ```
4. Build and publish:
   ```bash
   npm run deploy
   ```
   This uses the `gh-pages` package (already in `package.json`) to push the
   built site to a `gh-pages` branch.
5. In your repo on GitHub: **Settings → Pages** → set the source branch to
   `gh-pages`. Your site will be live at:
   `https://s27315.github.io/portfolio/`

## Deploy to Vercel or Netlify instead

- Leave `base: '/'` in `vite.config.js`.
- Import the GitHub repo directly on vercel.com or netlify.com — both
  auto-detect Vite and will build/deploy it with no extra config.
