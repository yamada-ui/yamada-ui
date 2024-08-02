import { forwardRef } from "@yamada-ui/core"
import { ClockArrowUp as ClockArrowUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ClockArrowUpProps = LucideIconProps

/**
 * `ClockArrowUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClockArrowUp = forwardRef<ClockArrowUpProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ClockArrowUpIcon} {...props} />,
)
