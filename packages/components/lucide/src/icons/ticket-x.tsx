import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TicketX as LucideTicketXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TicketXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTicketXIcon} {...props} />
))

/**
 * @deprecated Use `TicketXIcon` instead.
 */
export const TicketX = TicketXIcon
