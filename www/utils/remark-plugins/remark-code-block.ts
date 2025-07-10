import type { Root } from "mdast"
import type { Plugin } from "unified"
import { visit } from "unist-util-visit"

export function remarkCodeBlock(): ReturnType<Plugin<[], Root>> {
  return function (tree) {
    visit(tree, function (node) {
      if (node.type !== "code") return
      if (!node.meta) return

      const [title] = node.meta.match(/(?<=title=("|'))(.*?)(?=("|'))/) ?? [""]
      const preview =
        node.meta.includes("preview") && !node.meta.includes("preview=false")
      const functional =
        node.meta.includes("functional") &&
        !node.meta.includes("functional=false")
      const client =
        node.meta.includes("client") && !node.meta.includes("client=false")

      if (!title && node.meta.includes("title=")) return

      node.data ||= {}
      node.data.hProperties = {
        ...node.data.hProperties,
        client,
        functional,
        preview,
        title,
      }
    })
  }
}
