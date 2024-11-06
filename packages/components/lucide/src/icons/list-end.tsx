import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListEnd as LucideListEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListEndIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideListEndIcon} {...props} />
))

/**
 * @deprecated Use `ListEndIcon` instead.
 */
export const ListEnd = ListEndIcon
