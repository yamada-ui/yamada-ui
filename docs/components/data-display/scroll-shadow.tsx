import { Box } from "@yamada-ui/react"
import { memo, type FC } from "react"

export const ScrollShadow: FC = memo(() => {
  return (
    <>
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        zIndex="kurillin"
        w="full"
        h="4"
        bgGradient={[
          "linear(to-t, rgba(255, 255, 255, 0), white)",
          "linear(to-t, rgba(0, 0, 0, 0), black)",
        ]}
      />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        zIndex="kurillin"
        w="full"
        h="4"
        bgGradient={[
          "linear(to-b, rgba(255, 255, 255, 0), white)",
          "linear(to-b, rgba(0, 0, 0, 0), black)",
        ]}
      />
    </>
  )
})

ScrollShadow.displayName = "ScrollShadow"
