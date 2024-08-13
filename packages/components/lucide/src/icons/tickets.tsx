import { forwardRef } from "@yamada-ui/core"
import { Tickets as TicketsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TicketsProps = LucideIconProps

/**
 * `Tickets` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tickets = forwardRef<TicketsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TicketsIcon} {...props} />
))
