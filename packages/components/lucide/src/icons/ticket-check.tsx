import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TicketCheck as LucideTicketCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TicketCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTicketCheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TicketCheckIcon` instead.
 */
export const TicketCheck = TicketCheckIcon
