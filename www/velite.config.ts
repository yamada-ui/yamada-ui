import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import remarkDirective from "remark-directive"
import remarkGfm from "remark-gfm"
import { defineCollection, defineConfig, s } from "velite"
import { generateDocMap } from "@/scripts/generate/docs/map"
import { getLocale, langs } from "@/utils/i18n"
import { rehypePre, rehypeSlugSync } from "@/utils/rehype-plugins"
import { CONSTANTS } from "./constants"
import {
  remarkCallout,
  remarkCardGroup,
  remarkCodeBlock,
  remarkCodeGroup,
  remarkSteps,
} from "./utils/remark-plugins"
import { getPathname } from "./utils/route"
import { transformUnifiedToc } from "./utils/transform-unified-toc"

function getPath(value: string) {
  return value.replace(/\\/g, "/").replace(/.*\/contents\//, "")
}

function getSlug(value: string) {
  const transformedValue = value
    .replace(/\\/g, "/")
    .replace(/.*\/contents\//, "")
    .replace(/\.mdx$/, "")
  const match = transformedValue.match(
    new RegExp(`^(.*?)(?:\.(${langs.join("|")}))?$`),
  )
  const [, path, lang] = match ?? []

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
      const path = getPath(meta.path as string)
      const toc =
        locale === "en-US" ? data.toc : transformUnifiedToc(data.toc, path)

      return {
        ...data,
        style: data.style
          ? `${CONSTANTS.SNS.GITHUB.PACKAGE_EDIT_URL}/${data.style}`
          : undefined,
        locale,
        path,
        pathname: getPathname("docs", ...slug),
        slug,
        source: data.source
          ? `${CONSTANTS.SNS.GITHUB.PACKAGE_EDIT_URL}/${data.source}`
          : undefined,
        storybook: data.storybook
          ? `${CONSTANTS.SNS.STORYBOOK}?path=/story/${data.storybook}`
          : undefined,
        toc,
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
      rehypeSlugSync,
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
      remarkCodeGroup,
      remarkCardGroup,
      remarkSteps,
    ],
  },
  root: "contents",
})
