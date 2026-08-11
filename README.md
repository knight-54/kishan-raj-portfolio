# Kishan Raj — Portfolio

Personal portfolio site. Static HTML/CSS/JS, no build step, no framework.

## Structure

```
kishan-portfolio/
├── index.html          # all page content
├── css/
│   └── style.css       # theme, layout, responsive rules
├── js/
│   └── script.js       # nav toggle, footer year, hero type effect
├── assets/
│   ├── favicon.svg
│   └── resume.pdf       # add your actual resume PDF here
├── .gitignore
└── README.md
```

## Run locally

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve it with a local server (recommended, avoids relative-path quirks):

```bash
# Python
python3 -m http.server 5500

# or Node
npx serve .
```

Then visit `http://localhost:5500`.

## Before deploying

1. Drop your actual resume PDF into `assets/resume.pdf`.
2. Replace every `YOUR_GITHUB`, `YOUR_LINKEDIN`, `YOUR_LEETCODE`, `YOUR_CODECHEF`
   placeholder in `index.html` with your real profile URLs.
3. Optional: swap `assets/favicon.svg` for your own mark.

## Deploy

See deployment steps in the chat where this was generated, or:
1. Push this folder to a GitHub repo.
2. Import the repo on [vercel.com](https://vercel.com) — no framework preset,
   no build command needed (it's a static site).
