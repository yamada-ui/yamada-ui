import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FlipHorizontal as LucideFlipHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlipHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlipHorizontalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFlipHorizontalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FlipHorizontalIcon` instead.
 */
export const FlipHorizontal = FlipHorizontalIcon
