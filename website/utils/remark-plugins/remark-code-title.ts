import type { PhrasingContent, Root } from "mdast"
import type { Plugin } from "unified"
import { visit } from "unist-util-visit"

export function remarkCodeTitle(): ReturnType<Plugin<[], Root>> {
  return function (tree, file) {
    visit(tree, "code", function (node, index = 0, parent) {
      const attrs = `${node.lang ?? ""} ${node.meta ?? ""}`.trim()

      if (!attrs) return

      const [title] = attrs.match(/(?<=title=("|'))(.*?)(?=("|'))/) ?? [""]

      if (!title && attrs.includes("title=")) {
        file.message("Invalid title", node, "remark-code-title")

        return
      }

      if (!title) return

      if (parent)
        parent.children.splice(index, 1, {
          type: "paragraph",
          children: [node as unknown as PhrasingContent],
          data: {
            hName: "code-block",
            hProperties: { lang: node.lang, title },
          },
        })
    })
  }
}
