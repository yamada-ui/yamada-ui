import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TicketMinus as LucideTicketMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TicketMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTicketMinusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TicketMinusIcon` instead.
 */
export const TicketMinus = TicketMinusIcon
