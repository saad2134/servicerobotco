# Modern Website for Service Robot Co.

Service Robot Co. is a robotics integration and automation website for businesses looking to deploy autonomous cleaning, delivery, and security robots through a Robotics-as-a-Service (RaaS) model. [...]

## Overview

The application is a modern Next.js marketing site built to showcase:

- Autonomous floor cleaning and operations robotics
- Delivery robots and mobile fulfillment automation
- Security robots and mobile patrol solutions
- ERP and systems integration for operational data flows
- Industry-specific use cases across facilities, retail, hospitality, healthcare, logistics, and manufacturing
- Consultation and sales capture from prospective clients

## Live site

- Showcase: https://servicerobotco-seven.vercel.app

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- ESLint
- Vercel-ready deployment

## Features

- Interactive "Find Your Fit" industry and goal selector
- Hero and automation messaging sections for robotics adoption
- Industry and solution showcase pages
- Operational value messaging around uptime, labor savings, and throughput
- Contact/demo CTA flow for outreach and lead generation
- Brand assets including business-card and social-post marketing materials

## Repository structure

```text
.
├── public/
│   ├── business-card/
│   ├── facebook-post/
│   ├── logos/
│   └── media/
├── scratch/
│   └── pages/
├── src/
│   ├── app/
│   └── components/
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── CONTENTS.md
├── README.md
├── TASK.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── ...
```

## Getting started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### Production build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

## Notes

This repository contains both the live site source and supplementary marketing assets for brand campaigns, including business cards and social content. The project is designed as a marketing and [...]

## License

The design and code for this website are open-source and available for use, modification, and distribution. However, the intellectual property of Service Robot Co., including but not limited to company branding, proprietary business logic, service offerings, and confidential strategic assets, remain the exclusive property of Service Robot Co. and are not available for commercial reuse.
