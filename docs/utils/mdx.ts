import type { Plugin } from "unified"
import { serialize } from "next-mdx-remote/serialize"
import rehypeSlug from "rehype-slug"
import remarkBreaks from "remark-breaks"
import remarkEmoji from "remark-emoji"
import remarkGfm from "remark-gfm"
import { visit } from "unist-util-visit"

const rehypeCodeMeta: Plugin = () => (tree) => {
  visit(tree, "element", (node: any) => {
    if (node.tagName !== "code" || !node.data) return

    node.properties = node.properties || {}

    const props: string[] = node.data.meta.split(" ")

    props.forEach((prop) => {
      const [key, value] = prop.split("=")

      if (key) node.properties[key] = value
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
    } catch {}
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
  content = "",
): { attributes: any[]; resolvedContent: string } => {
  const reg = /(\w+)=([^\s]+)(?=\s|$)/g

  const attributes = [...content.matchAll(reg)].map(([, name, value]) => ({
    type: "mdxJsxAttribute",
    name,
    value: value?.trim(),
  }))

  const resolvedContent = content.replace(reg, "").replace(/^\s+/, "")

  return { attributes, resolvedContent }
}

const insertElement =
  ({
    name,
    attributes = [],
    children = [],
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

export const mdx = async (source: string) => {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      rehypePlugins: [rehypeCodeMeta, rehypeSlug],
      remarkPlugins: [remarkGfm, remarkEmoji, remarkUIComponent, remarkBreaks],
    },
  })

  return mdxSource
}
