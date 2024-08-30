import { forwardRef } from "@yamada-ui/core"
import { TicketsPlane as TicketsPlaneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TicketsPlaneProps = LucideIconProps

/**
 * `TicketsPlane` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketsPlane = forwardRef<TicketsPlaneProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TicketsPlaneIcon} {...props} />,
)
