import { VStack, forwardRef } from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import { ScrollShadow } from "components/data-display"
import { Tree } from "components/navigation"
import { memo } from "react"

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
          <Tree pt="lg" pb="16" pr="md" />
        </VStack>

        <ScrollShadow />
      </VStack>
    )
  }),
)
