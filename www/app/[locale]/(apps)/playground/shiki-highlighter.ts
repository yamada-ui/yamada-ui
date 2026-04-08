import type { ColorMode } from "@yamada-ui/react"
import type { ShikiTransformer } from "shiki"
import { getSingletonHighlighter } from "shiki"

const transformerRemoveItalic: ShikiTransformer = {
  name: "remove-italic",
  span(node) {
    if (typeof node.properties.style === "string") {
      node.properties.style = node.properties.style
        .replace(/font-style:\s*italic;?\s*/g, "")
        .trim()
    }
  },
}

const transformerEnsureLineHeight: ShikiTransformer = {
  name: "ensure-line-height",
  line(node) {
    if (node.children.length === 0) {
      node.children.push({ type: "text", value: "\u200b" })
    }
  },
}

export const THEME = {
  light: "one-light",
  dark: "one-dark-pro",
} as const

export const highlighterPromise = getSingletonHighlighter({
  langs: ["tsx"],
  themes: [THEME.dark, THEME.light],
})

export function highlightCode(
  highlighter: Awaited<typeof highlighterPromise>,
  code: string,
  colorMode: ColorMode,
): string {
  const html = highlighter.codeToHtml(code, {
    lang: "tsx",
    theme: THEME[colorMode],
    transformers: [transformerRemoveItalic, transformerEnsureLineHeight],
  })
  return html
    .replace(/^<pre[^>]*>(<code[^>]*>)?/, "")
    .replace(/(<\/code>)?<\/pre>$/, "")
}
