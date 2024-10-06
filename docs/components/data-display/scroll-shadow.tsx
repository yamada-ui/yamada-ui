import type { FC } from "react"
import { Box } from "@yamada-ui/react"
import { memo } from "react"

export const ScrollShadow: FC = memo(() => {
  return (
    <>
      <Box
        bgGradient={[
          "linear(to-t, rgba(255, 255, 255, 0), white)",
          "linear(to-t, rgba(0, 0, 0, 0), black)",
        ]}
        h="4"
        left="0"
        position="absolute"
        right="0"
        top="0"
        w="full"
        zIndex="kurillin"
      />
      <Box
        bgGradient={[
          "linear(to-b, rgba(255, 255, 255, 0), white)",
          "linear(to-b, rgba(0, 0, 0, 0), black)",
        ]}
        bottom="0"
        h="4"
        left="0"
        position="absolute"
        right="0"
        w="full"
        zIndex="kurillin"
      />
    </>
  )
})

ScrollShadow.displayName = "ScrollShadow"
