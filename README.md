# kirillmakarov-dev.github.io

Portfolio site for Kirill Makarov, Senior Unity Developer / Tech Lead.

Live positioning:
- Unity Developer
- Tech Lead
- Multiplayer Systems
- Scalable Architecture
- WebGL, Desktop, and Mobile Delivery

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- GSAP
- Lucide React

## Sections

- Hero
- About
- Core Expertise
- Featured Projects
- Architecture
- Archive
- Technologies & Tools
- Contact

## Local Development

```bash
npm install
npm run dev
```

The local development server runs on `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The production output is generated in `dist/`.

## GitHub Pages Deployment

This repository is configured for GitHub Pages deployment through GitHub Actions.

Deployment flow:

1. Push changes to `main`
2. GitHub Actions installs dependencies and builds the Vite app
3. The generated `dist/` folder is published to GitHub Pages

Because this repository is the user site repository (`kirillmakarov-dev.github.io`), the site is published at the root domain.

## Assets

- Public images are stored in `public/images`
- The downloadable CV is stored at `public/Kirill-Makarov-CV.pdf`

## Project Structure

```text
public/       Static assets served directly by Vite
src/          React application source
src/sections/ Portfolio page sections
src/components/ui/ Reusable UI primitives
```