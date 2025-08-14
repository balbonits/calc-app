# Technical Overview

This project is a modern calculator app built with:

- **Next.js (App Router)**: For component-based structure and routing.
- **TypeScript**: Type safety for all logic and UI components.
- **Tailwind CSS v4**: Utility-first styling, design tokens, and layered CSS imports.
- **CSS Modules**: Local styles for components, referencing global design tokens.
- **Design Tokens**: Defined in `globals.css` under `@layer theme { :root { ... } }` for theme consistency and dark mode support.
- **Error Handling**: Prevents multiple consecutive operators, multiple decimals, and division by zero, displaying user-friendly error messages.
- **Responsive Design**: Mobile-first layout, tested on desktop and mobile, with adaptive spacing and font sizes.
- **Accessibility**: Keyboard navigation and ARIA labels (see TODO.md for checklist).

## Integration Details

- Tailwind v4 is integrated using layered imports in `globals.css`:
	- `@import "tailwindcss/theme.css" layer(theme);`
	- `@import "tailwindcss/preflight.css" layer(base);`
	- `@import "tailwindcss/utilities.css" layer(utilities);`
- All design tokens and theme variables are defined in `@layer theme { :root { ... } }`.
- CSS modules (e.g., `Calculator.module.css`) use only local class selectors and reference global variables.
- Lint warnings for unknown at-rules (e.g., `@theme`, `@layer`) can be ignored or suppressed in Stylelint config.

## Workflow

- See `TODO.md` for step-by-step progress tracking and portfolio asset preparation.
- See `CLAUDE.md` for Tailwind v4 integration guide and troubleshooting.

## Deployment

- Ready for deployment to Vercel or similar platforms.
- Portfolio assets and screenshots should follow the naming and sizing conventions in `TODO.md`.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
