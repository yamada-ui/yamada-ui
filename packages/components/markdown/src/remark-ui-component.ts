import type { AlertStatus } from "@yamada-ui/core"
import { isNull, isUndefined } from "@yamada-ui/utils"
import type { Parent as HastParent } from "hast"
import type { Break, Paragraph, PhrasingContent, Root, Strong } from "mdast"
import type { ElementContent } from "react-markdown/lib"
import { match, P } from "ts-pattern"
import type { Plugin } from "unified"
import { remove } from "unist-util-remove"
import { visit } from "unist-util-visit"
import { getFragmentPattern } from "./patterns"
import type { ShouldRemoved } from "./utils"
import { isBreak, isContainer, shouldRemoved } from "./utils"

const getStatus = (str: string | undefined): AlertStatus => {
  return match(str)
    .with(undefined, () => {
      return "info" as const
    })
    .with("info", () => {
      return "info" as const
    })
    .with("warning", () => {
      return "warning" as const
    })
    .with("error", () => {
      return "error" as const
    })
    .with("success", () => {
      return "success" as const
    })
    .with("loading", () => {
      return "loading" as const
    })
    .with(P._, () => {
      return "info" as const
    })
    .exhaustive()
}

export const remarkUIComponent: Plugin<[], Root, Root> = () => {
  return (tree) => {
    let nested = 0
    let isMerging = false
    let buf: PhrasingContent[] = []
    let paragraph: Paragraph | undefined
    let status: AlertStatus = "info"

    visit(tree, "paragraph", (node, index) => {
      for (const phrasingContent of node.children) {
        match(phrasingContent)
          .with({ type: "text" }, (textNode) => {
            const startFragmentCapturedGroups = getFragmentPattern(
              "start",
              true,
            ).exec(textNode.value)
            const endFragmentCapturedGroups = getFragmentPattern(
              "end",
              true,
            ).exec(textNode.value)

            if (
              !isNull(startFragmentCapturedGroups) &&
              !isNull(endFragmentCapturedGroups)
            ) {
              if (isMerging) {
                buf.push(textNode)
                return
              }

              const content = textNode.value
                .replace(startFragmentCapturedGroups.groups!.leftFragment, "")
                .replace(endFragmentCapturedGroups.groups!.rightFragment, "")

              tree.children.splice(index!, 1, {
                ...node,
                type: "custom" as "paragraph",
                data: {
                  hName: "note",
                  hChildren: [
                    {
                      type: "text",
                      value: content,
                    },
                  ],
                  hProperties: {
                    status: getStatus(
                      startFragmentCapturedGroups.groups?.status,
                    ),
                  },
                },
              })

              return
            }

            const capturedGroups = getFragmentPattern("start", false).exec(
              textNode.value,
            )
            if (!isNull(capturedGroups)) {
              isMerging = true

              status = getStatus(capturedGroups.groups?.status)

              if (buf.length > 0) {
                nested++
              }
            }

            if (!isMerging) {
              return
            }

            buf.push(textNode)

            if (getFragmentPattern("end", false).test(textNode.value)) {
              if (nested > 0) {
                nested--
                return
              }

              if (isContainer(buf)) {
                const secondNode = buf.at(1)!
                const lastButOneNode = buf.at(-2)!

                if (isBreak(secondNode) && isBreak(lastButOneNode)) {
                  paragraph = {
                    type: "paragraph",
                    children: buf.slice(2, -2),
                  }
                } else if (isBreak(secondNode)) {
                  paragraph = {
                    type: "paragraph",
                    children: buf.slice(2, -1),
                  }
                } else if (isBreak(lastButOneNode)) {
                  paragraph = {
                    type: "paragraph",
                    children: buf.slice(1, -3),
                  }
                } else {
                  paragraph = {
                    type: "paragraph",
                    children: buf,
                  }
                }

                isMerging = false
              } else {
                paragraph = {
                  type: "paragraph",
                  children: buf,
                }
              }

              buf = []
            }
          })
          .with({ type: "break" }, (breakNode) => {
            if (isMerging) {
              buf.push(breakNode)
            }
          })
          .with({ type: "strong" }, (strongNode) => {
            if (isMerging) {
              buf.push(strongNode)
            }
          })
          .with(P._, () => {})
      }

      if (isMerging) {
        const shouldRemovingNode = {
          ...node,
          shouldRemoved: true,
        } satisfies ShouldRemoved

        tree.children.splice(index!, 1, shouldRemovingNode)

        buf.push({ type: "break" } satisfies Break)
      } else {
        if (!isUndefined(paragraph)) {
          tree.children.splice(index!, 1, {
            ...node,
            type: "custom" as "paragraph",
            data: {
              hName: "note",
              hChildren: paragraph.children as ElementContent[],
              hProperties: {
                status: status,
              },
            },
          })

          paragraph = undefined
        }
      }
    })

    remove(tree, (node) => {
      return shouldRemoved(node)
    })

    if (isMerging) {
      tree.children.push({
        type: "paragraph",
        children: buf,
      })
    }
    isMerging = false
    buf = []
  }
}

export const rehypeBreakPlugin: Plugin = () => {
  return (tree) => {
    visit(tree, "break", (_, index, parent: HastParent) => {
      parent.children.splice(index!, 1, {
        type: "element",
        tagName: "br",
        properties: {},
        children: [],
      })
    })

    visit(tree, "strong", (node: Strong, index: number, parent: HastParent) => {
      parent.children.splice(index!, 1, {
        type: "element",
        tagName: "strong",
        properties: {},
        children: [...node.children] as ElementContent[],
      })
    })
  }
}
