# Omnia Sec AI Labs

Production-ready public website for **Omnia Sec AI Labs** — an independent agentic AI and cybersecurity lab founded by Syed Saad in Karachi, Pakistan.

## Included

- High-fidelity responsive interface
- Home, GNS3 Agent, Projects, Research, Build Log, About, Contact, Security, Privacy, and Terms pages
- Real server-side contact route with validation, spam protection, origin checks, and rate limiting
- Resend email delivery
- SEO metadata, Open Graph image, sitemap, robots, and web manifest
- Security headers and deployment-ready Docker/Railway configuration
- Reduced-motion and keyboard-accessible behavior

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Contact form setup

Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and `NEXT_PUBLIC_SITE_URL`. See `DEPLOYMENT.md` for the complete launch procedure.

## Positioning

The site accurately presents Omnia as an emerging independent lab. It does not claim employees, customers, revenue, production deployments, or completed products that do not yet exist.