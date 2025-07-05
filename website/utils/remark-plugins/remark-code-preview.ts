import type { Root } from "mdast"
import type { Plugin } from "unified"
import { visit } from "unist-util-visit"

export function remarkCodePreview(): ReturnType<Plugin<[], Root>> {
  return function (tree) {
    visit(tree, "code", function (node, index = 0, parent) {
      if (!node.meta) return

      const preview = node.meta.includes("preview")

      if (!preview || node.meta.includes("preview=false")) return

      if (parent)
        parent.children.splice(index, 1, {
          type: "paragraph",
          children: [{ type: "text", value: node.value }],
          data: {
            hName: "code-preview",
            hProperties: { lang: node.lang },
          },
        })
    })
  }
}
