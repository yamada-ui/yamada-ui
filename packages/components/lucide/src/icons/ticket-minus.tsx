import { forwardRef } from "@yamada-ui/core"
import { TicketMinus as TicketMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TicketMinusProps = LucideIconProps

/**
 * `TicketMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketMinus = forwardRef<TicketMinusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TicketMinusIcon} {...props} />
))
