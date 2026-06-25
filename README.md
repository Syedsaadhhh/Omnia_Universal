# Omnia Sec AI Labs

Production website for an independent agentic AI and cybersecurity lab founded by Syed Saad in Karachi, Pakistan.

## What is included

- High-fidelity responsive interface
- GNS3 Agent product page
- Projects, research, build log, founder, contact, security, privacy, and terms pages
- Server-side contact endpoint with validation and abuse controls
- SEO metadata, sitemap, robots, manifest, and Open Graph image
- Docker and Railway deployment configuration

## Local development

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run typecheck
npm run build
```

## Contact delivery

The contact form uses Resend. Configure the variables listed in `.env.example` before deploying.

See `DEPLOYMENT.md` for the Railway launch checklist.
