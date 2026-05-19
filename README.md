# Adela Nails Website

Landing page for Adela Nails, a nail art and manicure studio. The site is built with Astro and Tailwind CSS, with a focus on fast static delivery, responsive layouts, optimized media, and a refined visual identity.

## Features

- Responsive hero section with optimized Astro image delivery.
- Mobile navigation with an animated sheet menu.
- Services section for Soft Gel, Polygel, Semipermanente, Rubber, and Gel de construcción.
- Experience section with a studio/process video.
- Gallery section with nail design images and a lightbox modal.
- Instagram CTA for more design inspiration.
- Centralized content constants for navigation, services, experience points, and gallery images.

## Tech Stack

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sharp](https://sharp.pixelplumbing.com/) for Astro image optimization
- Static assets served from `public/`

## Project Structure

```text
/
├── public/
│   ├── designs/          # Gallery images
│   ├── media/            # Experience video
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/           # Optimized build-time assets
│   ├── components/
│   │   ├── icons/
│   │   ├── navbar/
│   │   └── sections/
│   ├── const/            # Shared content constants
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
└── pnpm-lock.yaml
```

## Getting Started

Install dependencies:

```sh
pnpm install
```

Start the development server:

```sh
pnpm dev
```

Build for production:

```sh
pnpm build
```

Preview the production build locally:

```sh
pnpm preview
```

## Content Editing

Most repeated content lives in `src/const/`:

- `src/const/navigation.ts`: brand, navigation items, reservation URL.
- `src/const/services.ts`: service cards and featured service.
- `src/const/experience.ts`: experience/trust points.
- `src/const/gallery.ts`: gallery image metadata.

Main page sections live in `src/components/sections/`:

- `HeroSection.astro`
- `ServicesSection.astro`
- `ExperienceSection.astro`
- `GallerySection.astro`

## Media Notes

- The hero image lives in `src/assets/hero-img.png` so Astro can generate optimized responsive images.
- Gallery images live in `public/designs/` and are referenced by URL from `src/const/gallery.ts`.
- The experience video lives in `public/media/preview.mp4`.

For Lighthouse or performance checks, measure the production build:

```sh
pnpm build
pnpm preview
```

Avoid measuring `pnpm dev`, since dev mode includes tooling scripts that do not represent production output.

## Deployment

This is a static Astro site. After running:

```sh
pnpm build
```

the production output is generated in `dist/` and can be deployed to any static hosting provider.
