import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Bus as LucideBusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BusIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBusIcon} {...props} />
))

/**
 * @deprecated Use `BusIcon` instead.
 */
export const Bus = BusIcon
