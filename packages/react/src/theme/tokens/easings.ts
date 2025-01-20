import { defineTokens } from "../../core"

export const easings = defineTokens.easings({
  ease: "cubic-bezier(0.25, 0, 0.25, 1)",
  "ease-in": "cubic-bezier(0.42, 0, 1, 1)",
  "ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
  "ease-in-smooth": "cubic-bezier(0.32, 0.72, 0, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.58, 1)",
})
