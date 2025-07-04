import type { Root } from "mdast"
import type { Plugin } from "unified"
import { h } from "hastscript"
import { visit } from "unist-util-visit"

const CALLOUT_TYPES = [
  "info",
  "warning",
  "error",
  "tip",
  "success",
  "note",
  "important",
  "caution",
]

export function remarkCallout(): ReturnType<Plugin<[], Root>> {
  return function (tree) {
    visit(tree, function (node) {
      if (node.type !== "containerDirective") return
      if (!CALLOUT_TYPES.includes(node.name)) return

      const hName = "callout"

      node.data ||= {}
      node.data.hName = hName
      node.data.hProperties = {
        ...h(hName, node.attributes || {}).properties,
        "data-type": node.name !== "callout" ? node.name : true,
      }
    })
  }
}
