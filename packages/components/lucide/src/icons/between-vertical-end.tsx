import { forwardRef } from "@yamada-ui/core"
import { BetweenVerticalEnd as BetweenVerticalEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `BetweenVerticalEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BetweenVerticalEnd = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={BetweenVerticalEndIcon} {...props} />
  ),
)