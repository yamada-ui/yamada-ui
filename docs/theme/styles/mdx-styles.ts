import type { CSSUIObject } from "@yamada-ui/react"

export const mdx: { [key: string]: CSSUIObject } = {
  a: {
    code: {
      color: "inherit !important",
    },
    color: "link",
  },
  alert: {
    "& p": { my: "0" },
    my: "6",
  },
  code: {
    color: ["violet.600", "purple.300"],
    fontFamily: "body",
  },
  h1: {
    fontFamily: "heading",
    fontSize: "4xl",
    fontWeight: "bold",
    mb: "6",
    mt: "12",
  },
  h2: {
    fontFamily: "heading",
    fontSize: "3xl",
    fontWeight: "bold",
    mb: "6",
    mt: "12",
  },
  h3: {
    fontFamily: "heading",
    fontSize: "2xl",
    fontWeight: "bold",
    mb: "6",
    mt: "8",
  },
  h4: {
    fontFamily: "heading",
    fontSize: "xl",
    fontWeight: "bold",
    mb: "4",
    mt: "6",
  },
  h5: {
    fontFamily: "heading",
    fontSize: "lg",
    fontWeight: "bold",
    my: "6",
  },
  h6: {
    fontFamily: "heading",
    fontSize: "md",
    fontWeight: "bold",
    my: "6",
  },
  hr: {
    my: "8",
  },
  li: {
    "& > p": { my: "0" },
  },
  ol: {
    "& ul,ol": {
      mb: "0",
      mt: "2",
    },
    gap: "3",
    my: "6",
  },
  p: {
    "blockquote &": {
      mt: "0",
    },
    lineHeight: "tall",
    my: "6",
  },
  strong: {
    fontWeight: "semibold",
  },
  table: {
    w: "full",
  },
  "table-container": {
    my: "6",
    td: {
      verticalAlign: "middle",
      whiteSpace: "normal",
    },
    th: {
      fontFamily: "body",
      fontWeight: "semibold",
      letterSpacing: "normal",
      textTransform: "none",
    },
  },
  ul: {
    "& ul,ol": {
      mb: "0",
      mt: "2",
    },
    gap: "3",
    my: "6",
  },
}
