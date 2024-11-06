import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Ticket as LucideTicketIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TicketIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTicketIcon} {...props} />
))

/**
 * @deprecated Use `TicketIcon` instead.
 */
export const Ticket = TicketIcon
