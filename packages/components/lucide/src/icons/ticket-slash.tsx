import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TicketSlash as LucideTicketSlashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TicketSlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketSlashIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTicketSlashIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TicketSlashIcon` instead.
 */
export const TicketSlash = TicketSlashIcon
