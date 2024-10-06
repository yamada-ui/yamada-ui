import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TicketPlus as TicketPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TicketPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketPlus = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TicketPlusIcon} {...props} />
))
