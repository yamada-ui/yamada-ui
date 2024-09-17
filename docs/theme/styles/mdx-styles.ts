import type { CSSUIObject } from "@yamada-ui/react"

export const mdx: { [key: string]: CSSUIObject } = {
  h1: {
    fontFamily: "heading",
    fontWeight: "bold",
    mt: "12",
    mb: "6",
    fontSize: "4xl",
  },
  h2: {
    fontFamily: "heading",
    fontWeight: "bold",
    mt: "12",
    mb: "6",
    fontSize: "3xl",
  },
  h3: {
    fontFamily: "heading",
    fontWeight: "bold",
    mt: "8",
    mb: "6",
    fontSize: "2xl",
  },
  h4: {
    fontFamily: "heading",
    fontWeight: "bold",
    mt: "6",
    mb: "4",
    fontSize: "xl",
  },
  h5: {
    fontFamily: "heading",
    fontWeight: "bold",
    my: "6",
    fontSize: "lg",
  },
  h6: {
    fontFamily: "heading",
    fontWeight: "bold",
    my: "6",
    fontSize: "md",
  },
  p: {
    my: "6",
    lineHeight: "tall",
    "blockquote &": {
      mt: "0",
    },
  },
  strong: {
    fontWeight: "semibold",
  },
  code: {
    fontFamily: "body",
    color: ["violet.600", "purple.300"],
  },
  a: {
    color: "link",
    code: {
      color: "inherit !important",
    },
  },
  hr: {
    my: "8",
  },
  ul: {
    my: "6",
    gap: "3",
    "& ul,ol": {
      mt: "2",
      mb: "0",
    },
  },
  ol: {
    my: "6",
    gap: "3",
    "& ul,ol": {
      mt: "2",
      mb: "0",
    },
  },
  li: {
    "& > p": { my: "0" },
  },
  "table-container": {
    my: "6",
    th: {
      fontFamily: "body",
      fontWeight: "semibold",
      textTransform: "none",
      letterSpacing: "normal",
    },
    td: {
      verticalAlign: "middle",
      whiteSpace: "normal",
    },
  },
  table: {
    w: "full",
  },
  alert: {
    my: "6",
    "& p": { my: "0" },
  },
}
