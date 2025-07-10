import { defineSemanticTokens } from "../../core"

export const spaces = defineSemanticTokens.spaces({
  xs: "1",
  sm: "2",
  md: "4",
  lg: "6",
  xl: "8",
  "2xl": "12",
  "3xl": "16",
  "4xl": "24",
  "5xl": "32",
})
