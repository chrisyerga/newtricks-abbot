# newtricks.ai website

Astro + TypeScript + Tailwind starter for the newtricks.ai brand site.

## Stack

- Astro (multi-page static site)
- TypeScript (strict config)
- Tailwind CSS (utility-first styling)
- Astro Content Collections for blog posts in `src/content/blog`

## Routes

- `/` landing page with medium-intensity scroll interactions
- `/blog` blog index
- `/blog/[slug]` blog post pages from markdown
- `/projects`
- `/videos`
- `/about`
- `/contact`

## Local development

```bash
npm install
npm run dev
```

## Content editing

- Add blog posts in `src/content/blog/*.md`
- Required frontmatter keys:
  - `title`
  - `description`
  - `publishDate`
  - `tags` (optional)
  - `draft` (optional)

## Design notes

- Cyber-editorial dark aesthetic
- Accent palette inspired by Apple II hi-res feeling:
  - signal orange `#f88610`
  - phosphor green `#5dff9f`
- Shadcn-inspired spacing, borders, and card rhythm

## Suggested next steps

- Replace placeholder copy with your voice and bio
- Add Open Graph images + metadata per route
- Add newsletter / social CTA tracking
- Add React islands (interactive demos, tools) where needed
