import type { StackProps } from "@yamada-ui/react"
import { forwardRef, VStack } from "@yamada-ui/react"
import { ScrollShadow } from "components/data-display"
import { Tree } from "components/navigation"
import { memo } from "react"

export interface SidebarProps extends StackProps {}

export const Sidebar = memo(
  forwardRef<SidebarProps, "aside">(({ ...rest }, ref) => {
    return (
      <VStack
        ref={ref}
        as="aside"
        maxH="calc(100dvh - 4rem)"
        position="sticky"
        top="4rem"
        w="sm"
        {...rest}
      >
        <VStack as="nav" overflowY="auto" overscrollBehavior="contain">
          <Tree pb="16" pr="md" pt="lg" />
        </VStack>

        <ScrollShadow />
      </VStack>
    )
  }),
)
