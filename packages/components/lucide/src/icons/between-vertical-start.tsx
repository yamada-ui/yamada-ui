import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BetweenVerticalStart as BetweenVerticalStartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BetweenVerticalStart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BetweenVerticalStart = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={BetweenVerticalStartIcon} {...props} />
  ),
)
