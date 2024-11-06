import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquarePercent as LucideSquarePercentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquarePercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePercentIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquarePercentIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquarePercentIcon` instead.
 */
export const SquarePercent = SquarePercentIcon
