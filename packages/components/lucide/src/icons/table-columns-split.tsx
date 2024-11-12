import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { TableColumnsSplit as OriginalTableColumnsSplit } from "lucide-react"

/**
 * `TableColumnsSplitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableColumnsSplitIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalTableColumnsSplit} {...props} />,
)

/**
 * `TableColumnsSplit` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `TableColumnsSplitIcon` instead.
 */
export const TableColumnsSplit = TableColumnsSplitIcon
