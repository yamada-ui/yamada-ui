import type { ThemeAnimationTokens } from "@yamada-ui/react"

export const animations: ThemeAnimationTokens = {
  gradient: {
    duration: "10s",
    iterationCount: "infinite",
    keyframes: {
      "0%": {
        bg: "red.500",
      },
      "20%": {
        bg: "green.500",
      },
      "40%": {
        bg: "purple.500",
      },
      "60%": {
        bg: "yellow.500",
      },
      "80%": {
        bg: "blue.500",
      },
      "100%": {
        bg: "red.500",
      },
    },
    timingFunction: "linear",
  },
}
