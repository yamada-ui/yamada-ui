import type { BlockContent, DefinitionContent, Root } from "mdast"
import type { Plugin } from "unified"
import { h } from "hastscript"
import { visit } from "unist-util-visit"

export function remarkSteps(): ReturnType<Plugin<[], Root>> {
  return function (tree) {
    visit(tree, function (node) {
      if (node.type !== "containerDirective") return
      if (node.name !== "steps") return

      const hName = "steps"

      node.data ||= {}
      node.data.hName = hName
      node.data.hProperties = h(hName, node.attributes || {}).properties

      const heading = node.children.find(({ type }) => type === "heading")
      const depth = heading?.type === "heading" ? heading.depth : 2

      let currentChild: BlockContent | DefinitionContent | undefined

      const children: (BlockContent | DefinitionContent)[] = []

      node.children.forEach((child) => {
        if (child.type === "heading" && child.depth === depth) {
          if (
            currentChild &&
            "children" in currentChild &&
            currentChild.children.length > 0
          )
            children.push(currentChild)

          const index = children.length

          const hProperties = { "data-depth": depth, "data-index": index }

          currentChild = {
            type: "paragraph",
            children: [],
            data: { hName: "step", hProperties },
          }
        }

        if (currentChild && "children" in currentChild)
          (currentChild.children as (BlockContent | DefinitionContent)[]).push(
            child,
          )
      })

      if (currentChild) children.push(currentChild)

      node.children = children
    })
  }
}
