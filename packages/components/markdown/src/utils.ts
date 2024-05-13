import type { Break, Node, Text } from "mdast"
import { is } from "unist-util-is"
import { getFragmentPattern } from "./patterns"

export interface ShouldRemoved extends Node {
  type: string
  shouldRemoved: true
}

const isObject = (target: unknown): target is { [key: string]: unknown } => {
  return typeof target === "object" && target !== null
}

export const isNode = (node: unknown): node is Node => {
  return isObject(node) && "type" in node
}

export const isBreak = (node: unknown): node is Break => {
  return isNode(node) && node.type === "break"
}

export const shouldRemoved = (node: unknown): node is ShouldRemoved => {
  return isNode(node) && is(node, { shouldRemoved: true })
}

export const isContainer = (nodes: Node[]): boolean => {
  if (nodes.length < 5) {
    return false
  }

  const firstNode = nodes.at(0)! as Text
  const lastNode = nodes.at(-1)! as Text

  const hasBeginningPattern =
    getFragmentPattern("start", false).test(firstNode.value) &&
    isBreak(nodes.at(1))
  const hadEndingPattern =
    getFragmentPattern("end", false).test(lastNode.value) &&
    isBreak(nodes.at(-2))

  if (!hasBeginningPattern || !hadEndingPattern) {
    return false
  }

  return true
}
