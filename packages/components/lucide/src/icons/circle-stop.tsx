import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleStop as LucideCircleStopIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleStopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleStopIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCircleStopIcon} {...props} />,
)

/**
 * @deprecated Use `CircleStopIcon` instead.
 */
export const CircleStop = CircleStopIcon
