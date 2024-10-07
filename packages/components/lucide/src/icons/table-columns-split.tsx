import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TableColumnsSplit as TableColumnsSplitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TableColumnsSplit` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableColumnsSplit = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={TableColumnsSplitIcon} {...props} />
  ),
)
