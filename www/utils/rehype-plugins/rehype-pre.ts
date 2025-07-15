import type { Element } from "hast"
import type { Root } from "mdast"
import type { Plugin } from "unified"
import { visit } from "unist-util-visit"

export function rehypePre(): ReturnType<Plugin<[], Root>> {
  return function (tree) {
    visit(tree, "element", function (node: Element) {
      if (node.tagName !== "pre") return

      node.children = node.children.map((child) => {
        if (child.type !== "element") return child
        if (child.tagName !== "code") return child

        const className = child.properties.className

        node.properties.lang =
          Array.isArray(className) && typeof className[0] === "string"
            ? className[0].split("-")[1]
            : undefined
        node.properties.title = child.properties.title
        node.properties.preview = child.properties.preview
        node.properties.functional = child.properties.functional
        node.properties.client = child.properties.client

        if (child.children[0]?.type !== "text") return child

        return { type: "text", value: child.children[0].value }
      })
    })
  }
}
