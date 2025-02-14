import { defineTokens } from "../../core"

export const keyframes = defineTokens.keyframes({
  spin: {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
})
