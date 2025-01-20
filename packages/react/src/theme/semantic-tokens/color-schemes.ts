import { defineSemanticTokens } from "../../core"

export const colorSchemes = defineSemanticTokens.colorSchemes({
  error: "red",
  info: "blue",
  link: "blue",
  mono: ["black", "white"],
  primary: "blue",
  secondary: "violet",
  success: "amber",
  warning: "orange",
})
