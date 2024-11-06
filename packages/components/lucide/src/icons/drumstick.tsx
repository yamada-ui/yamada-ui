import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Drumstick as LucideDrumstickIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DrumstickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DrumstickIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideDrumstickIcon} {...props} />,
)

/**
 * @deprecated Use `DrumstickIcon` instead.
 */
export const Drumstick = DrumstickIcon
