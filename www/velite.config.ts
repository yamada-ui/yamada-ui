import { format } from "@yamada-ui/workspace/prettier"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import remarkDirective from "remark-directive"
import remarkGfm from "remark-gfm"
import { defineCollection, defineConfig, s } from "velite"
import { CONSTANTS } from "@/constants"
import { generateDocMap } from "@/scripts/generate/docs/map"
import { getLocale, langs } from "@/utils/i18n"
import {
  replaceCardGroup,
  replaceCodeBlock,
  replaceCodeGroup,
  replaceLinks,
  replaceProps,
  replaceSteps,
  replaceStylePropsTable,
  replaceTokensPreview,
  replaceTokensTable,
} from "@/utils/markdown"
import { rehypePre, rehypeSlug, transformToc } from "@/utils/rehype-plugins"
import {
  remarkCallout,
  remarkCardGroup,
  remarkCodeBlock,
  remarkCodeGroup,
  remarkSteps,
} from "@/utils/remark-plugins"
import { getPathname } from "@/utils/route"

function getPath(value: string) {
  return value.replace(/\\/g, "/").replace(/.*\/contents\//, "")
}

function getSlug(value: string) {
  const transformedValue = value
    .replace(/\\/g, "/")
    .replace(/.*\/contents\//, "")
    .replace(/\.mdx$/, "")
  const match = transformedValue.match(
    new RegExp(`^(.+?)(?:\\.(${langs.join("|")}))?$`),
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
      md: s.custom().transform(async (_, { meta }) => {
        const path = getPath(meta.path as string)
        const exclude = CONSTANTS.LLMS.EXCLUDE.some((exclude) =>
          path.startsWith(`${exclude}/`),
        )

        if (exclude) return

        let content = meta.content as string

        content = await replaceProps(content)
        content = replaceCodeGroup(content)
        content = replaceCodeBlock(content)
        content = replaceSteps(content)
        content = replaceCardGroup(content)
        content = replaceTokensPreview(content)
        content = replaceTokensTable(content)
        content = replaceStylePropsTable(content)
        content = replaceLinks(content)

        return await format(content, { parser: "mdx" })
      }),
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
    .transform(async (data, { meta }) => {
      const { locale, slug } = getSlug(meta.path as string)
      const toc = await transformToc(data.toc, meta.path as string)

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
