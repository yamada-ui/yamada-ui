import { defineSemanticTokens } from "../../core"

export const colorSchemes = defineSemanticTokens.colorSchemes({
  error: "red",
  info: "blue",
  link: "blue",
  mono: ["black", "white"],
  primary: ["black", "white"],
  secondary: "gray",
  success: "green",
  warning: "orange",
})
