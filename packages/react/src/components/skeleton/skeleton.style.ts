import { defineComponentStyle } from "../../core"

export const skeletonStyle = defineComponentStyle({
  base: {
    background: ["blackAlpha.300", "whiteAlpha.300"],
    borderColor: ["blackAlpha.400", "whiteAlpha.400"],
    borderRadius: "sm",
    opacity: 0.7,
  },
})

export type SkeletonStyle = typeof skeletonStyle
