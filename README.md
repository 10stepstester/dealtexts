# DealTexts

Buyer-psychology SMS sequences for MCA brokers. Marketing site.

DealTexts sells the **conversion/copy layer** that rides on top of a broker's existing
sending stack (GoHighLevel, Centrex, McaTexts, dialers). It does **not** send texts or
handle compliance — that stays with the sender.

## Stack
- Vite + React + TypeScript
- Tailwind CSS v4
- react-router-dom (`/`, `/the-loophole-is-closed`)
- react-helmet-async (per-route SEO)
- Deployed on Vercel

## Develop
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
```

## Deploy
Auto-deploys from `main` via Vercel. Manual: `vercel --prod`.

## TODO
- Wire the lead form (`src/components/LeadForm.tsx`) to a Vercel serverless function +
  Resend (or a CRM webhook). Currently captures client-side and shows a success state.
- Add a real `og:image` (1200×630) and reference it in `src/components/Seo.tsx`.
