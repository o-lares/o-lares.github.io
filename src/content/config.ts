import { defineCollection, z } from "astro:content";

const linkSchema = z.object({
  github: z.string().url().optional(),
  app: z.string().url().optional(),
  demo: z.string().url().optional(),
  article: z.string().url().optional(),
  paper: z.string().url().optional(),
  external: z.string().url().optional()
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    date: z.string(),
    image: z.string().optional(),
    images: z.array(z.string()).default([]),
    galleryLayout: z.enum(["full", "compact"]).default("full"),
    highlightLabel: z.string().default("Highlights"),
    highlights: z.array(z.string()).default([]),
    proficiency: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    links: linkSchema.optional()
  })
});

const experience = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dates: z.string(),
    image: z.string().optional(),
    order: z.number(),
    highlights: z.array(z.string()).default([]),
    skills: z.array(z.string()).default([])
  })
});

const publications = defineCollection({
  type: "content",
  schema: z.object({
    venue: z.string(),
    title: z.string(),
    citation: z.string(),
    year: z.number(),
    link: z.string().url().optional(),
    order: z.number()
  })
});

export const collections = { projects, experience, publications };
