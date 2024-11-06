import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Hourglass as LucideHourglassIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HourglassIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HourglassIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideHourglassIcon} {...props} />,
)

/**
 * @deprecated Use `HourglassIcon` instead.
 */
export const Hourglass = HourglassIcon
