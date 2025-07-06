import type { PhrasingContent, Root } from "mdast"
import type { Plugin } from "unified"
import { visit } from "unist-util-visit"

export function remarkCodePreview(): ReturnType<Plugin<[], Root>> {
  return function (tree) {
    visit(tree, "code", function (node, index = 0, parent) {
      if (!node.meta) return
      if (!node.lang || !["jsx", "tsx"].includes(node.lang)) return

      const preview =
        node.meta.includes("preview") && !node.meta.includes("preview=false")
      const functional =
        node.meta.includes("functional") &&
        !node.meta.includes("functional=false")

      if (!preview) return

      if (parent)
        parent.children.splice(index, 1, {
          type: "paragraph",
          children: [
            { type: "text", value: node.value },
            node as unknown as PhrasingContent,
          ],
          data: {
            hName: "code-preview",
            hProperties: { lang: node.lang, functional },
          },
        })
    })
  }
}
