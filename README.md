# Slay Desi Clothing

A "coming soon" landing page for a desi fashion brand: a short pitch for its men's and women's traditional wear, and a waitlist sign-up for launch news and offers.

**[Live demo](https://v0-slay-desi-3uf0xnl4kzp.vercel.app)**

## What's on the page

- A hero section: "Elevate Your Style with Desi Elegance"
- A waitlist form with name and email, validated on the client
- A success state after sign-up, held in a small Zustand store
- A cream-and-navy palette with a subtle background pattern and fade-in entrances
- A responsive layout for phone and desktop

## Stack

- [Next.js 14](https://nextjs.org/) (App Router), React 18, TypeScript
- [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- [React Hook Form](https://react-hook-form.com/) and [Zod](https://zod.dev/) for the form
- [Zustand](https://zustand-demo.pmnd.rs/) for sign-up state
- Scaffolded with [v0](https://v0.dev/), deployed on [Vercel](https://vercel.com/)

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project layout

```text
app/page.tsx                       the landing page
components/forms/newsletter-form.tsx   the waitlist form
lib/validations/newsletter.ts      Zod schema for name and email
lib/stores/newsletter-store.ts     sign-up state
components/ui/                     shadcn/ui components
```

## Status

This is a front-end prototype:

- **The form doesn't store sign-ups yet.** On submit it waits one second and shows success. Connecting it to an email service or database is the next step.
- **The "500+ fashion enthusiasts" line is placeholder copy,** not a live count.
