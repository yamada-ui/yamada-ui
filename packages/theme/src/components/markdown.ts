import type { ComponentStyle } from "@yamada-ui/core"

export const Markdown: ComponentStyle<"Markdown"> = {
  baseStyle: {
    "*:first-of-type": {
      mt: "0 !important",
    },
    a: { color: "link", textDecoration: "none" },
    blockquote: {
      borderLeft: "0.25em solid",
      borderLeftColor: "border",
      color: ["blackAlpha.700", "whiteAlpha.600"],
      px: "1em",
    },
    "blockquote>:last-child": { mb: 0 },
    "code:not(pre > *)": {
      bg: ["blackAlpha.200", "whiteAlpha.300"],
      fontFamily: "mono",
      fontSize: "85%",
      m: 0,
      px: "0.4em",
      py: "0.2em",
      rounded: "6px",
    },
    h1: {
      borderBottom: "1px solid",
      borderBottomColor: "border",
      fontSize: "2em",
      pb: ".3em",
    },
    "h1, h2, h3, h4, h5, h6": {
      fontWeight: "semibold",
      lineHeight: "1.25",
      mb: "16px",
      mt: "24px",
    },
    h2: {
      borderBottom: "1px solid",
      borderBottomColor: "border",
      fontSize: "1.5em",
      pb: ".3em",
    },
    h3: {
      fontSize: "1.25em",
    },
    h4: {
      fontSize: "1em",
    },
    h5: {
      fontSize: "0.875em",
    },
    h6: {
      fontSize: "0.85em",
    },
    hr: { bg: "border", border: 0, h: "0.25em", my: "24px", p: 0 },
    img: { boxSizing: "content-box", maxW: "100%" },
    "li + li": { mt: "0.25em" },
    "p, blockquote, ul, ol, dl, table, pre, details": {
      mb: "16px",
      mt: "0px",
    },
    pre: { fontSize: "92.5%", lineHeight: 1.45, mt: "16px", rounded: "6px" },
    strong: { fontWeight: "semibold" },
    table: {
      display: "block",
      maxW: "100%",
      overflow: "auto",
      w: "max-content",
    },
    th: {
      fontWeight: "semibold",
    },
    "th, td": {
      border: "1px solid",
      borderColor: "border",
      px: "13px",
      py: "6px",
    },
    tr: { borderTop: "1px solid", borderTopColor: "border" },
    ul: {
      listStyleType: "disc",
      pl: "2em",
    },
    w: "full",
  },
}
