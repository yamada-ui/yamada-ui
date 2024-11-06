import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { DiamondMinus as LucideDiamondMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DiamondMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DiamondMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideDiamondMinusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `DiamondMinusIcon` instead.
 */
export const DiamondMinus = DiamondMinusIcon
