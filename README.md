# Amirhosein Personal Website

A single-page portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

It includes:
- hero section
- projects section
- experience and education timeline
- contact section
- light/dark theme toggle
- static sitemap.xml and robots.txt (generated at build time)

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Docker

### Development

```bash
docker compose -f docker-compose.dev.yml up --build
```

Sitemap and robots use `http://localhost:3000` by default.

### Production

Build the image with your production domain:

```bash
docker build --build-arg SITE_URL=https://amirhosein.me -t personal-website:latest .
```

Or use GitHub Actions / your CI/CD to build with the correct `SITE_URL` arg.

Then run:

```bash
docker compose up -d
```
