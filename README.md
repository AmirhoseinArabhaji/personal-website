# Amirhosein Personal Website

A single-page portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

It includes:
- hero section
- projects section
- experience and education timeline
- contact section
- light/dark theme toggle
- sitemap.xml and robots.txt metadata routes

## Local development

```bash
cp .env.example .env
npm install
npm run dev
```

Open `http://localhost:3000`.

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` or your deployment environment to your public domain so canonical metadata, `sitemap.xml`, and `robots.txt` use the correct origin.

## Docker

```bash
docker compose up --build
```
