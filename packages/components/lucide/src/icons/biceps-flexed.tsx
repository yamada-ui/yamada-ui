import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BicepsFlexed as LucideBicepsFlexedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BicepsFlexedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BicepsFlexedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBicepsFlexedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BicepsFlexedIcon` instead.
 */
export const BicepsFlexed = BicepsFlexedIcon
