import { forwardRef } from "@yamada-ui/core"
import { TicketX as TicketXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TicketXProps = LucideIconProps

/**
 * `TicketX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketX = forwardRef<TicketXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TicketXIcon} {...props} />
))
