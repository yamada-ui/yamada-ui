import { forwardRef } from "@yamada-ui/core"
import { TicketPercent as TicketPercentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TicketPercentProps = LucideIconProps

/**
 * `TicketPercent` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketPercent = forwardRef<TicketPercentProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TicketPercentIcon} {...props} />,
)
