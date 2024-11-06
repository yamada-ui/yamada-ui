import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListTree as LucideListTreeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListTreeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListTreeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideListTreeIcon} {...props} />
))

/**
 * @deprecated Use `ListTreeIcon` instead.
 */
export const ListTree = ListTreeIcon
