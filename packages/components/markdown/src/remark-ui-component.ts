import { Plugin } from "unified"
import { visit } from "unist-util-visit"
export const remarkUIComponent: Plugin = () => (tree) => {
  visit(tree, "paragraph", (node: any) => {
    try {
      const { name, attributes, children } = getValidChildren(node.children)
      console.log(node)
      switch (name) {
        case "note":
          insertElement({ name: "note", attributes, children })(node)
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
    type: "paragraph",
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
    node.type = "custom"
    node.name = name
    node.data = {
      hName: "note",
      hChildren: children,
      hProperties: {
        className: `${attributes[0].value}`,
      },
    }
  }
