import type { Dict } from "@yamada-ui/utils"
import type { Plugin } from "unified"
import { visit } from "unist-util-visit"

export const remarkUIComponent: Plugin = () => (tree) => {
  visit(tree, "paragraph", (node: any) => {
    try {
      const { name, properties, children } = getValidChildren(node.children)

      switch (name) {
        case "note":
          insertElement({ name: "note", properties, children })(node)
          break
        default:
          break
      }
    } catch (e) {}
  })
}

const getValidChildren = (
  children: any[],
): { name: string; properties: Dict; children: any[] } => {
  if (!children.length) throw new Error()

  if (children.length === 1) {
    const { type, value } = children[0]

    if (type !== "text" || !value) throw new Error()

    const [, name, content] = value.match(/^:::(\w+)\s+([\s\S]*?)\s*:::$/) ?? []

    if (!name || !content) throw new Error()

    const { properties, resolvedContent } = getProperties(content)

    return {
      name,
      properties,
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

    const { properties, resolvedContent } = getProperties(firstChildContent)

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

    return { name, properties, children }
  }
}

const getProperties = (
  content: string = "",
): { properties: Dict; resolvedContent: string } => {
  const properties: Dict = {}
  const reg = /(\w+)=([^\s]+)(?=\s|$)/g
  const results = [...content.matchAll(reg)]

  results.forEach(([, name, value]) => {
    properties[name] = value.trim()
  })

  const resolvedContent = content.replace(reg, "").replace(/^\s+/, "")

  return { properties, resolvedContent }
}
const insertElement =
  ({
    name,
    children = [],
    properties = {},
  }: {
    name: string
    children: any[]
    properties?: Dict
  }) =>
  (node: any) => {
    node.type = "custom"
    node.data = {
      hName: name,
      hChildren: children,
      hProperties: properties,
    }
  }
