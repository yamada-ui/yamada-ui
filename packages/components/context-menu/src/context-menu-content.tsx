import { forwardRef } from "@yamada-ui/core"
import type { MenuListProps } from "@yamada-ui/menu"
import { MenuList } from "@yamada-ui/menu"

export type ContextMenuContentProps = MenuListProps
export const ContextMenuContent = forwardRef<ContextMenuContentProps, "ul">(
  ({ ...rest }, ref) => {
    return <MenuList ref={ref} {...rest} />
  },
)
