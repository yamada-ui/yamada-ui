import { forwardRef } from "@yamada-ui/core"
import { BetweenVerticalEnd as BetweenVerticalEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BetweenVerticalEndProps = LucideIconProps

/**
 * `BetweenVerticalEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BetweenVerticalEnd = forwardRef<BetweenVerticalEndProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={BetweenVerticalEndIcon} {...props} />
  ),
)
