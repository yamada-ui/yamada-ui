import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TicketsPlane as TicketsPlaneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TicketsPlane` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketsPlane = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TicketsPlaneIcon} {...props} />
))
