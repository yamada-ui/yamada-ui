import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { List as LucideListIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideListIcon} {...props} />
))

/**
 * @deprecated Use `ListIcon` instead.
 */
export const List = ListIcon
