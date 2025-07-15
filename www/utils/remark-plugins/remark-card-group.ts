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

      const heading = node.children.find(({ type }) => type === "heading")

      if (heading?.type === "heading") {
        const [text] = heading.children

        node.attributes ||= {}
        node.attributes.depth = heading.depth.toString()

        if (text?.type === "text") node.attributes.title = text.value
      }

      node.data ||= {}
      node.data.hName = "card"
      node.data.hProperties = h("div", node.attributes || {}).properties
      node.children = node.children.filter(({ type }) => type !== "heading")
    })
  }
}
