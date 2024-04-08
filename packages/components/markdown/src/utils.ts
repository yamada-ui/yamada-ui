import type { Break, Node, Paragraph, Text } from "mdast"
import type { Literal, Parent } from "unist"
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

export const isParent = (node: unknown): node is Parent => {
  return isObject(node) && Array.isArray(node.children)
}

export const isLiteral = (node: unknown): node is Literal => {
  return isObject(node) && "value" in node
}

export const isParagraph = (node: unknown): node is Paragraph => {
  return isNode(node) && node.type === "paragraph"
}

export const isText = (node: unknown): node is Text => {
  return (
    isLiteral(node) && node.type === "text" && typeof node.value === "string"
  )
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

  const firstNode = nodes.at(0)!
  const lastNode = nodes.at(-1)!

  if (!isText(firstNode) || !isText(lastNode)) {
    return false
  }

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
