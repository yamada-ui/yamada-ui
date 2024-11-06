import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TicketPercent as LucideTicketPercentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TicketPercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketPercentIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTicketPercentIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TicketPercentIcon` instead.
 */
export const TicketPercent = TicketPercentIcon
