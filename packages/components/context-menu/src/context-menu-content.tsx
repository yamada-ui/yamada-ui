import { forwardRef } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { MenuList } from "@yamada-ui/react"

type ContextMenuContentProps = MotionProps<"ul">
export const ContextMenuContent = forwardRef<ContextMenuContentProps, "ul">(
  ({ ...rest }, ref) => {
    return <MenuList ref={ref} {...rest} />
  },
)
