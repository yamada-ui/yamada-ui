import { isNull } from "@yamada-ui/utils"
import type { Node } from "mdast"
import { is } from "unist-util-is"

export interface ShouldRemoved extends Node {
  type: string
  shouldRemoved: true
}

const isObject = (target: unknown): target is { [key: string]: unknown } => {
  return typeof target === "object" && !isNull(target)
}

export const isNode = (node: unknown): node is Node => {
  return isObject(node) && "type" in node
}

export const shouldRemoved = (node: unknown): node is ShouldRemoved => {
  return isNode(node) && is(node, { shouldRemoved: true })
}
