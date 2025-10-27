import type { Root } from "mdast"
import type { Plugin } from "unified"
import { h } from "hastscript"
import { visit } from "unist-util-visit"

export function remarkCardGroup(): ReturnType<Plugin<[], Root>> {
  return function (tree) {
    visit(tree, (node) => {
      if (node.type !== "containerDirective") return
      if (node.name !== "card-group") return

      node.data ||= {}
      node.data.hName = "card-group"
      node.data.hProperties = h("div", node.attributes || {}).properties
    })
    visit(tree, function (node) {
      if (node.type !== "containerDirective") return
      if (node.name !== "card") return

      node.data ||= {}
      node.data.hName = "card"
      node.data.hProperties = h("div", node.attributes || {}).properties
    })
  }
}
