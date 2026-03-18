---
name: nextjs-developer
description: Next.js 14+ App Router expert. Use for project setup, routing, SSG/SSR, metadata API, i18n configuration, image optimization, and deployment. Triggers on any Next.js, React server component, or App Router task.
---

# Next.js 14+ App Router Development Skill

## Core Principles
- Always use App Router (app/ directory), never Pages Router
- Prefer Server Components by default; use 'use client' only when needed (interactivity, hooks, browser APIs)
- Use TypeScript strictly

## Project Structure
src/
app/
[locale]/           # i18n dynamic segment
layout.tsx        # Root layout with locale
page.tsx          # Homepage
services/
[slug]/page.tsx # Dynamic service pages
languages/
[slug]/page.tsx # Dynamic language pages
sitemap.ts          # Dynamic sitemap generation
robots.ts           # Robots.txt generation
components/           # Shared UI components
lib/                  # Utilities, constants
messages/             # i18n JSON files (en.json, zh.json)

## Metadata API (SEO)
- Use generateMetadata() in each page for dynamic title, description, openGraph, alternates (hreflang)
- Never use <Head> — use the metadata export or generateMetadata async function
- Always include alternates.languages for hreflang: { 'en': '/en/...', 'zh': '/zh/...' }

## Static Generation
- Use generateStaticParams() for all dynamic routes
- Export const dynamic = 'force-static' where appropriate
- Use next/image with width, height, and alt for all images

## i18n with next-intl
- Configure middleware.ts for locale detection and redirect
- Use subfolder routing: /en/... and /zh/...
- Default locale: en (no prefix redirect)
- Messages stored in messages/en.json and messages/zh.json
- Use useTranslations() hook in client components, getTranslations() in server components

## Performance
- Minimize client-side JavaScript
- Use loading.tsx for streaming/suspense
- Lazy load below-fold components with dynamic()
- Optimize fonts with next/font/google

## Deployment
- Configure for static export (output: 'export') OR Vercel/Firebase SSR
- Always generate sitemap.xml and robots.txt programmatically
