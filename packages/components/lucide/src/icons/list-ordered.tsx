import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListOrdered as LucideListOrderedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListOrderedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListOrderedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideListOrderedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ListOrderedIcon` instead.
 */
export const ListOrdered = ListOrderedIcon
