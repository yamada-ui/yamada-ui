import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import remarkDirective from "remark-directive"
import remarkGfm from "remark-gfm"
import { defineCollection, defineConfig, s } from "velite"
import generateDocMap from "@/scripts/generate/doc-map"
import { getLocale } from "@/utils/i18n"
import { CONSTANTS } from "./constants"
import { rehypePre } from "./utils/rehype-plugins"
import {
  remarkCallout,
  remarkCodeBlock,
  remarkSteps,
} from "./utils/remark-plugins"
import { getPathname } from "./utils/route"

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
  )!
    .split("/")
    .filter((segment) => !segment.match(/^\(|\)$/))
  const locale = getLocale(lang)

  return { locale, slug }
}

const docs = defineCollection({
  name: "Doc",
  pattern: "**/*.mdx",
  schema: s
    .object({
      style: s.string().optional(),
      code: s.mdx(),
      description: s.string(),
      metadata: s.metadata(),
      release_date: s.string().optional(),
      release_url: s.string().optional(),
      source: s.string().optional(),
      status: s
        .enum(["planned", "new", "experimental", "stable", "deprecated"])
        .optional(),
      storybook: s.string().optional(),
      title: s.string(),
      toc: s.toc(),
    })
    .transform((data, { meta }) => {
      const { locale, slug } = getSlug(meta.path as string)

      return {
        ...data,
        style: data.style
          ? `${CONSTANTS.SNS.GITHUB.PACKAGE_EDIT_URL}/${data.style}`
          : undefined,
        locale,
        path: getPath(meta.path as string),
        pathname: getPathname("docs", ...slug),
        slug,
        source: data.source
          ? `${CONSTANTS.SNS.GITHUB.PACKAGE_EDIT_URL}/${data.source}`
          : undefined,
        storybook: data.storybook
          ? `${CONSTANTS.SNS.STORYBOOK}?path=/story/${data.storybook}`
          : undefined,
      }
    }),
})

export default defineConfig({
  collections: { docs },
  complete: function ({ docs }) {
    generateDocMap(docs)
  },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypePre,
      [
        rehypeAutolinkHeadings,
        { behavior: "wrap", properties: { "data-fragment": "" } },
      ],
    ],
    remarkPlugins: [
      remarkDirective,
      remarkGfm,
      remarkCallout,
      remarkCodeBlock,
      remarkSteps,
    ],
  },
  root: "contents",
})
