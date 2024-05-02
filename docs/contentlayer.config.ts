import type { DocumentTypeDef } from "contentlayer/source-files"
import { defineDocumentType, makeSource } from "contentlayer/source-files"
import GithubSlugger from "github-slugger"
import remarkBreaks from "remark-breaks"
import remarkEmoji from "remark-emoji"
import remarkGfm from "remark-gfm"
import remarkSlug from "remark-slug"
import type { Plugin } from "unified"
import { visit } from "unist-util-visit"
import { CONSTANT } from "./constant"
import { includes } from "./utils/array"
import { locales, otherLocales } from "./utils/i18n"
import { toCamelCase } from "./utils/string"

const OTHER_LOCALES = `(${otherLocales.join("|")})`

const omitLocaleSlug = (path: string): string => {
  const reg = new RegExp(`\(/index\)?.${OTHER_LOCALES}$`)

  path = path.replace(reg, "")

  return path
}

const getLocale = (path: string): string => {
  let locale = path.match(/(\.[^\.]*)$/)?.[1]

  locale = locale?.replace(/\./, "")

  return includes(locales, locale) ? locale : CONSTANT.I18N.DEFAULT_LOCALE
}

const rehypeCodeMeta: Plugin = () => (tree) => {
  visit(tree, "element", (node: any) => {
    if (node.tagName !== "code" || !node.data) return

    node.properties = node.properties || {}

    const props: string[] = node.data.meta.split(" ")

    props.forEach((prop) => {
      const [key, value] = prop.split("=")

      node.properties[key] = value
    })
  })
}

const remarkUIComponent: Plugin = () => (tree) => {
  visit(tree, "paragraph", (node: any) => {
    try {
      const { name, attributes, children } = getValidChildren(node.children)

      switch (name) {
        case "note":
          insertElement({ name: "Note", attributes, children })(node)

          break

        default:
          break
      }
    } catch (e) {}
  })
}

const getValidChildren = (
  children: any[],
): { name: string; attributes: any[]; children: any[] } => {
  if (!children.length) throw new Error()

  if (children.length === 1) {
    const { type, value } = children[0]

    if (type !== "text" || !value) throw new Error()

    const [, name, content] = value.match(/^:::(\w+)\s+([\s\S]*?)\s*:::$/) ?? []

    if (!name || !content) throw new Error()

    const { attributes, resolvedContent } = getAttributes(content)

    return {
      name,
      attributes,
      children: [{ type: "text", value: resolvedContent }],
    }
  } else {
    const firstChild = children.at(0)
    const lastChild = children.at(-1)

    const [, name, firstChildContent] =
      firstChild.value.match(/^:::(\w+)\s+([\s\S]*?)$/) ?? []
    const [, lastChildContent] =
      lastChild.value.match(/([\s\S]*?)\s*:::$/) ?? []

    if (!name) throw new Error()

    const { attributes, resolvedContent } = getAttributes(firstChildContent)

    if (resolvedContent) {
      children[0].value = resolvedContent
    } else {
      children.shift()
    }

    if (lastChildContent) {
      children[children.length - 1].value = lastChildContent
    } else {
      children.pop()
    }

    return { name, attributes, children }
  }
}

const getAttributes = (
  content: string = "",
): { attributes: any[]; resolvedContent: string } => {
  const reg = /(\w+)=([^\s]+)(?=\s|$)/g

  const attributes = [...content.matchAll(reg)].map(([, name, value]) => ({
    type: "mdxJsxAttribute",
    name,
    value: value.trim(),
  }))

  const resolvedContent = content.replace(reg, "").replace(/^\s+/, "")

  return { attributes, resolvedContent }
}

const insertElement =
  ({
    name,
    children = [],
    attributes = [],
  }: {
    name: string
    children: any[]
    attributes?: any[]
  }) =>
  (node: any) => {
    node.type = "mdxJsxFlowElement"
    node.name = name
    node.attributes = attributes
    node.children = children
  }

export const getTableOfContents = (raw: string, maxLv = Infinity) => {
  const slugger = new GithubSlugger()

  raw = raw.replace(/```[\s\S]*?```/g, "")

  const matches = [...raw.matchAll(/^(## |### |#### )(.*)\n/gm)]

  if (!matches.length) return []

  return matches
    .map((match, index) => {
      const nextMatch = matches[index + 1]
      const title = match[2].trim()
      const lv = match[1].trim().split("#").length - 1

      const id = slugger.slug(title, false)

      const propMatches = [
        ...raw
          .slice(Number(match.index), nextMatch?.index)
          .matchAll(/<PropsCard\s+[^>]*?name="([^"]+)"/g),
      ]

      let results = [{ id, title, lv }]

      if (propMatches.length) {
        const props = propMatches.map((match) => {
          const title = match[1].trim()

          return {
            id: `${id.replace("props", "")}-${title.toLowerCase()}`,
            title,
            lv: lv + 1,
          }
        })

        results = [...results, ...props]
      }

      return results
    })
    .flat()
    .filter(({ lv }) => maxLv >= lv)
}

const fields: DocumentTypeDef["fields"] = {
  title: { type: "string", required: true },
  menu: { type: "string" },
  tab: { type: "string" },
  description: { type: "string", required: true },
  order: { type: "number", default: 530000 },
  table_of_contents_max_lv: { type: "number", default: Infinity },
  label: {
    type: "enum",
    options: ["New", "Considering", "Updated", "Planned", "Experimental"],
  },
  tags: { type: "list", of: { type: "string" } },
  is_expanded: { type: "boolean", default: false },
  is_active: { type: "boolean", default: true },
  is_tabs: { type: "boolean", default: false },
  with_table_of_contents: { type: "boolean", default: true },
  with_children: { type: "boolean", default: false },
  with_children_description: { type: "boolean", default: true },
  with_description: { type: "boolean", default: false },
  version: { type: "string" },
  package_name: { type: "string" },
  release_url: { type: "string" },
  release_date: { type: "string" },
  menu_icon: { type: "string" },
}

const computedFields: DocumentTypeDef["computedFields"] = {
  slug: {
    type: "string",
    resolve: ({ _raw }) => `/${omitLocaleSlug(_raw.flattenedPath)}`,
  },
  data: {
    type: "json",
    resolve: async ({ _id, _raw, body, table_of_contents_max_lv }) => ({
      locale: getLocale(_raw.flattenedPath),
      paths: omitLocaleSlug(_raw.flattenedPath).split("/"),
      editUrl: `${CONSTANT.SNS.GITHUB.DOC_EDIT_URL}/${_id}`,
      contents: getTableOfContents(body.raw, table_of_contents_max_lv),
    }),
  },
}

const documentDef: Omit<DocumentTypeDef, "name"> = {
  contentType: "mdx",
  fields,
  computedFields,
}

export const documentTypeNames = [
  "getting-started",
  "styled-system",
  "components",
  "hooks",
  "figma",
  "changelog",
  "community",
]

const documentTypes = documentTypeNames.map((documentTypeName) =>
  defineDocumentType(() => ({
    name: toCamelCase(documentTypeName),
    filePathPattern: `${documentTypeName}/**/*.mdx`,
    ...documentDef,
  })),
)

export default makeSource({
  contentDirPath: "contents",
  documentTypes,
  mdx: {
    rehypePlugins: [rehypeCodeMeta],
    remarkPlugins: [
      remarkSlug,
      remarkGfm,
      remarkEmoji,
      remarkUIComponent,
      remarkBreaks,
    ],
  },
})
