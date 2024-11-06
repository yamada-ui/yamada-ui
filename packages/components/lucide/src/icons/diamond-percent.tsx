import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { DiamondPercent as LucideDiamondPercentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DiamondPercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DiamondPercentIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideDiamondPercentIcon} {...props} />
  ),
)

/**
 * @deprecated Use `DiamondPercentIcon` instead.
 */
export const DiamondPercent = DiamondPercentIcon
