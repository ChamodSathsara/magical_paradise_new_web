# Magical Paradise — Next.js Conversion

This is your Vite + React Router project converted to **Next.js 14 (App Router)**.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What changed

- **Routing**: `react-router-dom`'s `BrowserRouter`/`Routes` replaced with Next's file-based App Router. Each route now lives under `app/`:
  - `/` and `/home` → `app/page.tsx`, `app/home/page.tsx`
  - `/packages`, `/packages/[id]` → `app/packages/`
  - `/destinations`, `/destinations/[id]` → `app/destinations/`
  - `/experiences`, `/hotels`, `/about`, `/contact`, `/corporate`, `/partnership`, `/faq` → matching folders
  - 404s → `app/not-found.tsx`
- **`Link`**: `react-router-dom`'s `Link to="..."` → `next/link`'s `Link href="..."` everywhere.
- **`useLocation()`** → `usePathname()` from `next/navigation`.
- **`useParams()`** → `next/navigation`'s `useParams()` (note it can return `null`, so both detail pages guard against that).
- **`NavLink`**: Next.js has no built-in equivalent, so I added a small drop-in replacement at `src/components/ui/NavLink.tsx` that mirrors the render-prop API (`className={({isActive}) => ...}`) used in `Header.tsx`.
- **`Outlet`**: replaced by React's `children` prop — the old `Layout.tsx` is now used inside `app/layout.tsx` (the root layout) and wraps whatever page is rendered.
- **`'use client'`**: added to every component that uses state, effects, or event handlers (Next Server Components can't use these directly).
- Your actual page components live in `src/views/` rather than `src/pages/` — Next.js reserves any `pages/` folder for its older Pages Router, so this avoids a naming collision. Each `app/*/page.tsx` is a thin wrapper that imports from `src/views/`.

## A bug I fixed along the way

Your original `tailwind.config.js` had its `content` file-glob (needed for Tailwind to know which files to scan) accidentally nested inside `maxWidth.content`. That meant Tailwind wasn't scanning any files, and `max-w-content` — used throughout your layout — wasn't a valid utility. I restored the file-glob at the top level and set `maxWidth.content` to `80rem` as a reasonable default. **Double check this matches the max-width you originally intended** for your content containers.

## Verified

- `npm run build` completes with no type errors across all 14 routes.
- Spot-checked `/`, `/packages`, `/destinations/sigiriya`, and an unknown route (correctly shows the 404 page) with a production server.

## Not converted (kept as-is, works fine in Next.js)

- Plain `<img>` tags are used throughout rather than `next/image`. This still works correctly, just without Next's automatic image optimization. Happy to migrate these if you want that boost.
