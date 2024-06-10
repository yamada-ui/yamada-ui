import { forwardRef } from "@yamada-ui/core"
import { TableRowsSplit as TableRowsSplitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TableRowsSplitProps = LucideIconProps

/**
 * `TableRowsSplit` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableRowsSplit = forwardRef<TableRowsSplitProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TableRowsSplitIcon} {...props} />,
)
