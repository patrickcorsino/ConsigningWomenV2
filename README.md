# Consigning Women — Upscale Resale

Marketing site for [Consigning Women](https://consigningwomenatlanta.com), an upscale women's consignment boutique at 2508 Mt. Vernon Rd., Dunwoody, GA.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router v6 (BrowserRouter)
- Deployed on Vercel

## Local development

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:3000.

## Environment variables

Create a `.env.local` file in the project root:

```
VITE_WEB3FORMS_KEY=your-web3forms-access-key
```

Get a free Web3Forms access key at [web3forms.com](https://web3forms.com) — it's used by the contact form to deliver messages to `consigningwomenatlanta@gmail.com`.

For Vercel deployments, add the same variable in your Vercel project's Environment Variables settings.

## Setup TODOs before launch

- **Instagram feed** — generate a free widget at [lightwidget.com](https://lightwidget.com) for `@consigningwomen.atlanta` and paste the widget ID into `pages/NewArrivals.tsx` (replace `REPLACE_WITH_YOUR_WIDGET_ID`).
- **Web3Forms key** — sign up, then add `VITE_WEB3FORMS_KEY` in Vercel.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build into `dist/`
- `npm run preview` — preview production build locally
- `npm run lint` — type-check with `tsc --noEmit`
