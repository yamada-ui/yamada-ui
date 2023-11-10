import { Box, StackProps, VStack, forwardRef } from "@yamada-ui/react"
import { memo } from "react"
import { Tree } from "components/navigation"

export type SidebarProps = StackProps

export const Sidebar = memo(
  forwardRef<SidebarProps, "aside">(({ ...rest }, ref) => {
    return (
      <VStack
        ref={ref}
        as="aside"
        position="sticky"
        top="4rem"
        w="sm"
        maxH="calc(100dvh - 4rem)"
        {...rest}
      >
        <VStack as="nav" overflowY="auto" overscrollBehavior="contain">
          <Tree pt="lg" pb="16" pr="lg" />
        </VStack>

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
      </VStack>
    )
  }),
)
