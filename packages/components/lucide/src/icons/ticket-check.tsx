import { forwardRef } from "@yamada-ui/core"
import { TicketCheck as TicketCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TicketCheckProps = LucideIconProps

/**
 * `TicketCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketCheck = forwardRef<TicketCheckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TicketCheckIcon} {...props} />
))
