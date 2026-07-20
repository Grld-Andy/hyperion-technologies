# Hyperion Technologies — Corporate Website

A modern, responsive, production-ready website for **Hyperion Technologies**, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Getting Started (Local Setup)](#getting-started-local-setup)
4. [Pushing to GitHub](#pushing-to-github)
5. [Deploying to Vercel](#deploying-to-vercel)
6. [Migrating to cPanel Hosting Later](#migrating-to-cpanel-hosting-later)
7. [How to Update Content](#how-to-update-content)
8. [How to Add a New Certification / Course](#how-to-add-a-new-certification--course)
9. [How to Add a Blog Post](#how-to-add-a-blog-post)
10. [Replacing Placeholder Images & Videos](#replacing-placeholder-images--videos)
11. [SEO Notes](#seo-notes)
12. [Known Limitations & Next Steps](#known-limitations--next-steps)

---

## Tech Stack

- **Next.js 16** (App Router, React Server Components)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS-based theme config, no `tailwind.config.js` needed)
- **Framer Motion** — hero animation and micro-interactions
- **Lucide React** — icon set
- **gray-matter + remark** — Markdown-powered blog system
- **@tailwindcss/typography** — long-form content styling (blog posts, legal pages)

No paid services are required to run this site. Everything ships with sensible, editable placeholder content.

---

## Project Structure

```
hyperion-technologies/
├── app/                          # Routes (Next.js App Router)
│   ├── layout.tsx                # Root layout: fonts, metadata, Navbar/Footer
│   ├── page.tsx                  # Homepage
│   ├── about/
│   │   ├── page.tsx              # About Us
│   │   └── founder/page.tsx      # Founder biography
│   ├── services/page.tsx
│   ├── certifications/
│   │   ├── page.tsx              # Certifications index
│   │   └── [slug]/page.tsx       # Dynamic template for CCNA/CCNP/CCIE/A+/Network+
│   ├── cisco-training/page.tsx
│   ├── comptia-training/page.tsx
│   ├── gallery/page.tsx
│   ├── videos/page.tsx
│   ├── blog/
│   │   ├── page.tsx              # Blog index
│   │   └── [slug]/page.tsx       # Renders a Markdown post from content/blog
│   ├── testimonials/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   ├── not-found.tsx             # Custom 404
│   ├── sitemap.ts                # Auto-generated sitemap.xml
│   ├── robots.ts                 # Auto-generated robots.txt
│   └── globals.css               # Design tokens (Royal Blue + Gold theme), fonts, utilities
├── components/
│   ├── layout/                   # Navbar, Footer, WhatsAppButton, BackToTop
│   ├── ui/                       # Button, SectionHeading, PlaceholderMedia
│   ├── home/                     # Homepage sections (Hero, Stats, etc.)
│   ├── gallery/                  # GalleryGrid (filters + lightbox)
│   ├── videos/                   # VideoGrid (search + filters + player)
│   ├── contact/                  # ContactForm, MapEmbed
│   └── faq-client.tsx            # Interactive FAQ accordion
├── lib/
│   ├── constants.ts               # Company info, contact details, nav links — EDIT HERE FIRST
│   ├── metadata.ts                # SEO metadata helper
│   ├── blog.ts                    # Markdown blog engine
│   └── data/
│       ├── certifications.ts      # All certification program content
│       ├── services.ts            # All service listings
│       └── site-content.ts        # Testimonials, stats, gallery/video entries, FAQs
├── content/blog/                  # Markdown blog posts (add new .md files here)
├── public/
│   ├── images/gallery/{students,courses,services,founder,hero,certifications}/
│   └── videos/{training,networking,events}/
├── .env.example                   # Environment variable template (none required by default)
└── README.md
```

---

## Getting Started (Local Setup)

**Requirements:** Node.js 20+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open http://localhost:3000
```

To create a production build locally:

```bash
npm run build
npm run start
```

> **Note:** The build process downloads Google Fonts (Plus Jakarta Sans, Inter, JetBrains Mono) at build time, so an internet connection is required during `npm run build`.

---

## Pushing to GitHub

```bash
cd hyperion-technologies
git init
git add .
git commit -m "Initial commit: Hyperion Technologies website"

# Create a new repository on GitHub first, then:
git remote add origin https://github.com/<your-username>/hyperion-technologies.git
git branch -M main
git push -u origin main
```

A `.gitignore` is already included (excludes `node_modules`, `.next`, `.env*.local`, etc.).

---

## Deploying to Vercel

**Option A — via the Vercel dashboard (recommended for beginners):**

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub login is easiest).
2. Click **Add New → Project**.
3. Import the `hyperion-technologies` GitHub repository.
4. Vercel will auto-detect Next.js — leave the default build settings (`next build`).
5. Add any environment variables from `.env.example` if you've wired up real integrations (none are required by default).
6. Click **Deploy**. Your site will be live at `https://<project-name>.vercel.app` within a couple of minutes.

**Option B — via the Vercel CLI:**

```bash
npm install -g vercel
vercel login
vercel            # deploys a preview
vercel --prod     # deploys to production
```

**Custom domain:** In your Vercel project settings → Domains, add your domain (e.g. `hyperiontechnologies.com`) and follow the DNS instructions Vercel provides. Once connected, update `SITE.domain` in `lib/constants.ts` to match.

---

## Migrating to cPanel Hosting Later

This site is built with the Next.js **App Router**, which relies on a Node.js server (or serverless functions) for dynamic routes like `/certifications/[slug]` and `/blog/[slug]`. Most budget cPanel hosting only serves static files, so there are two supported migration paths:

### Path 1 — Static Export (simplest, works on any cPanel static hosting)

Since every dynamic route in this project uses `generateStaticParams()` (certifications and blog posts), the site can be fully static-exported:

1. In `next.config.ts`, add:
   ```ts
   const nextConfig: NextConfig = {
     output: "export",
   };
   ```
2. Run:
   ```bash
   npm run build
   ```
   This produces a static `out/` folder containing plain HTML/CSS/JS.
3. Upload the contents of `out/` to your cPanel `public_html` directory (via File Manager or FTP).
4. Note: the contact form's current placeholder submit handler is front-end only — for a static export, connect it to a third-party form backend (e.g. Formspree, Getform) since there's no Node server to handle submissions.

### Path 2 — Node.js Hosting on cPanel (if your host supports "Setup Node.js App")

Many cPanel hosts (e.g. via CloudLinux) support running Node.js apps directly:

1. Run `npm run build` locally or on the server.
2. Upload the project (excluding `node_modules` and `.next/cache`).
3. In cPanel's **Setup Node.js App**, point the application root to the project folder and set the startup file to use `next start`.
4. Run `npm install --production` and start the app through the cPanel Node.js interface.

Path 1 is recommended unless you specifically need server-side features later (e.g. a real contact-form API route).

---

## How to Update Content

Almost all editable content lives in typed data files under `lib/`, so you rarely need to touch component code.

| What to change | Where |
|---|---|
| Company name, phone, email, address, hours, social links | `lib/constants.ts` |
| Navigation menu items | `lib/constants.ts` → `NAV_LINKS` |
| Footer links | `lib/constants.ts` → `FOOTER_LINKS` |
| Services list | `lib/data/services.ts` |
| Certifications (CCNA, CCNP, etc.) | `lib/data/certifications.ts` |
| Testimonials, stats, gallery/video entries, general FAQs | `lib/data/site-content.ts` |
| Founder bio | `app/about/founder/page.tsx` |
| Homepage layout/order of sections | `app/page.tsx` |

After editing any file, restart `npm run dev` if changes don't hot-reload (rare, but happens with some data-file edits).

---

## How to Add a New Certification / Course

1. Open `lib/data/certifications.ts`.
2. Copy an existing object in the `certifications` array (e.g. the CCNA entry) and update every field: `slug`, `name`, `overview`, `skillsLearned`, `examInfo`, `resources`, etc.
3. Save. A new page automatically appears at `/certifications/<your-slug>` — no new files or routes needed, since the `[slug]` template renders any entry in this array.
4. Add the new certification to `lib/constants.ts` → `FOOTER_LINKS.training` if you want it linked from the footer.

---

## How to Add a Blog Post

1. Create a new Markdown file in `content/blog/`, e.g. `content/blog/my-new-post.md`.
2. Add frontmatter at the top, followed by your content:

   ```markdown
   ---
   title: "Your Post Title"
   date: "2026-08-01"
   excerpt: "A short one-sentence summary shown on the blog index."
   author: "Your Name"
   category: "Announcements"
   ---

   Your post content in Markdown goes here. You can use **bold**, *italics*,
   `code`, lists, and `## headings`.
   ```
3. Save the file. It automatically appears on `/blog` and at `/blog/my-new-post` — no code changes required.

---

## Replacing Placeholder Images & Videos

Every photo and video on this site currently renders as a labeled placeholder tile (`components/ui/PlaceholderMedia.tsx`) rather than a real image, since this environment doesn't have access to stock photo/video services. The folder structure is already wired up for real media:

```
public/
  images/gallery/
    students/        courses/        services/
    founder/         hero/           certifications/
  videos/
    training/        networking/     events/
```

**To replace a placeholder with a real photo:**

1. Drop your image file into the matching folder above (e.g. `public/images/gallery/students/graduation-2026.jpg`).
2. In the relevant component (e.g. `components/gallery/GalleryGrid.tsx` or `components/home/GalleryPreview.tsx`), swap the `<PlaceholderMedia />` element for Next.js's built-in `<Image>` component:

   ```tsx
   import Image from "next/image";

   <Image
     src="/images/gallery/students/graduation-2026.jpg"
     alt="Graduation ceremony"
     width={800}
     height={600}
     className="rounded-2xl object-cover"
   />
   ```

**To replace a placeholder video:** wire a real embeddable URL (e.g. your own unlisted YouTube upload) into `components/videos/VideoGrid.tsx`, replacing the `<PlaceholderMedia kind="video" />` in the lightbox with an `<iframe>` embed.

---

## SEO Notes

- **Metadata:** every page sets its own title/description via `lib/metadata.ts` → `buildMetadata()`, including Open Graph and Twitter card tags.
- **Structured data:** an `EducationalOrganization` JSON-LD schema is injected site-wide in `app/layout.tsx`.
- **Sitemap:** auto-generated at `/sitemap.xml` from `app/sitemap.ts` — includes all static pages, certifications, and blog posts.
- **Robots:** auto-generated at `/robots.txt` from `app/robots.ts`.
- **Canonical URLs:** set automatically per page via `buildMetadata()`.
- Before launch, update `SITE.domain` in `lib/constants.ts` to your real, live domain — canonical URLs and sitemap entries are derived from it.

---

## Known Limitations & Next Steps

This project was scaffolded and built in an environment without general internet access (only package registries were reachable), so a few things are intentionally left as clearly marked placeholders for you to finish before a public launch:

- **Images & videos** are placeholder tiles, not real photos/footage (see [Replacing Placeholder Images & Videos](#replacing-placeholder-images--videos)).
- **Testimonials and statistics** in `lib/data/site-content.ts` are placeholder figures/quotes — replace with real, permissioned data.
- **Contact form** currently simulates submission client-side only. Before launch, add a real backend — either a Next.js API route (`app/api/contact/route.ts`) calling an email service like Resend, or a third-party form backend like Formspree.
- **Google Maps embed** uses a generic "Weija, Accra" search query — replace `CONTACT.mapEmbedSrc` in `lib/constants.ts` with your exact pinned location once available.
- **Legal pages** (Privacy Policy, Terms & Conditions) are professional templates, not legal advice — have them reviewed by a qualified professional before relying on them.
- **Certification logos/badges** are represented as text only, per each vendor's trademark guidelines — do not add official Cisco/CompTIA logo image files without confirming compliance with their current brand usage policies.

---

Built for Hyperion Technologies · Wiaboman, Pambros Station, Weija District, Accra, Ghana.
