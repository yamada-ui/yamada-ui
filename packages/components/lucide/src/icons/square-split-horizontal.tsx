import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareSplitHorizontal as LucideSquareSplitHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareSplitHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareSplitHorizontalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareSplitHorizontalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareSplitHorizontalIcon` instead.
 */
export const SquareSplitHorizontal = SquareSplitHorizontalIcon
