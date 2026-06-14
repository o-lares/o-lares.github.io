# Oscar Lares Portfolio

Personal portfolio site for [o-lares.github.io](https://o-lares.github.io), rebuilt with Astro to make projects, experience, publications, writing, and future work easier to maintain.

## Tech Stack

- Astro
- TypeScript
- Markdown content collections
- GitHub Actions + GitHub Pages

## Local Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content Structure

- `src/content/projects/` - project detail pages and project cards
- `src/content/experience/` - work experience entries
- `src/content/publications/` - publications and presentations
- `src/pages/` - top-level pages
- `src/components/` - reusable Astro components
- `src/styles/global.css` - global styling and responsive behavior
- `public/images/` - images referenced by content files with `/images/...`

## Adding A Project

Create a new Markdown file in `src/content/projects/`.

Use the existing project files as templates. Important frontmatter fields include:

- `title`
- `description`
- `category`
- `featured`
- `date`
- `image`
- `images`
- `highlights`
- `proficiency`
- `tech`
- `links`

Project images should be placed in `public/images/` and referenced like:

```yaml
image: "/images/example.png"
```

## Deployment

The site deploys through `.github/workflows/deploy.yml`.

Pushing to `main` runs:

```bash
npm ci
npm run build
```

The generated `dist/` folder is then published to GitHub Pages.
