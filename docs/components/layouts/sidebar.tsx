import type { StackProps } from "@yamada-ui/react"
import { ScrollArea, VStack, forwardRef } from "@yamada-ui/react"
import { memo } from "react"
import { ScrollShadow } from "components/data-display"
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
        <ScrollArea
          as="nav"
          type="scroll"
          overflow="auto"
          overscrollBehavior="contain"
        >
          <Tree pt="lg" pb="16" pr="md" />
        </ScrollArea>

        <ScrollShadow />
      </VStack>
    )
  }),
)
