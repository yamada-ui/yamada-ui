import type { Root } from "mdast"
import type { Plugin } from "unified"
import { h } from "hastscript"
import { visit } from "unist-util-visit"

export function remarkCodeGroup(): ReturnType<Plugin<[], Root>> {
  return function (tree) {
    visit(tree, function (node) {
      if (node.type !== "containerDirective") return
      if (node.name !== "code-group") return

      node.children = node.children
        .map((child, index) => {
          const match = "meta" in child && child.meta?.match(/\[(.*)\]/)

          if (match) {
            node.attributes ||= {}
            node.attributes.ids ||= ""
            node.attributes.ids += !index ? match[1] : `,${match[1]}`
          }

          return child
        })
        .filter(Boolean)

      node.data ||= {}
      node.data.hName = "code-group"
      node.data.hProperties = h("div", node.attributes || {}).properties
    })
  }
}
