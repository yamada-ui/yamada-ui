import { defineCollection, defineConfig, s } from "velite"
import generateDocMap from "@/scripts/generate/doc-map"
import { getLocale } from "@/utils/i18n"

function getPath(value: string) {
  return value.replace(/.*\/contents\//, "")
}

function getSlug(value: string) {
  const [path, lang] = value
    .replace(/.*\/contents\//, "")
    .replace(/\.mdx$/, "")
    .split(".")
  const slug = (
    path!.endsWith("/index") ? path!.replace(/\/index$/, "") : path
  )!.split("/")
  const locale = getLocale(lang)

  return { locale, slug }
}

const docs = defineCollection({
  name: "Doc",
  pattern: "**/*.mdx",
  schema: s
    .object({
      category: s.string().optional(),
      code: s.mdx(),
      description: s.string(),
      metadata: s.metadata(),
      status: s.enum(["planned", "new", "experimental"]).optional(),
      storybook: s.string().optional(),
      title: s.string(),
      toc: s.toc(),
    })
    .transform((data, { meta }) => ({
      ...data,
      ...getSlug(meta.path as string),
      path: getPath(meta.path as string),
    })),
})

export default defineConfig({
  collections: { docs },
  complete: function ({ docs }) {
    generateDocMap(docs)
  },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
  root: "contents",
})
