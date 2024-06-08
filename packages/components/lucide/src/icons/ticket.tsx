import { forwardRef } from "@yamada-ui/core"
import { Ticket as TicketIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TicketProps = LucideIconProps

/**
 * `Ticket` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Ticket = forwardRef<TicketProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TicketIcon} {...props} />
))
