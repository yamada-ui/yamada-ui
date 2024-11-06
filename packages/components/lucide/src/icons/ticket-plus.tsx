import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TicketPlus as LucideTicketPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TicketPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketPlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideTicketPlusIcon} {...props} />,
)

/**
 * @deprecated Use `TicketPlusIcon` instead.
 */
export const TicketPlus = TicketPlusIcon
