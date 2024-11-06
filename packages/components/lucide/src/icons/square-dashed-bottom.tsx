import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareDashedBottom as LucideSquareDashedBottomIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareDashedBottomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDashedBottomIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareDashedBottomIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareDashedBottomIcon` instead.
 */
export const SquareDashedBottom = SquareDashedBottomIcon
