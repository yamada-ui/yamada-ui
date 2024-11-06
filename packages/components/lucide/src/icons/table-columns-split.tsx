import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TableColumnsSplit as LucideTableColumnsSplitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TableColumnsSplitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableColumnsSplitIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTableColumnsSplitIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TableColumnsSplitIcon` instead.
 */
export const TableColumnsSplit = TableColumnsSplitIcon
