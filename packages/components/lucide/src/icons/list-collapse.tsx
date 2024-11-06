import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListCollapse as LucideListCollapseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListCollapseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListCollapseIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideListCollapseIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ListCollapseIcon` instead.
 */
export const ListCollapse = ListCollapseIcon
