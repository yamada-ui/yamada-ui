import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TicketsPlane as LucideTicketsPlaneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TicketsPlaneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketsPlaneIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTicketsPlaneIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TicketsPlaneIcon` instead.
 */
export const TicketsPlane = TicketsPlaneIcon
