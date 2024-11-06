import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignEndHorizontal as LucideAlignEndHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignEndHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignEndHorizontalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideAlignEndHorizontalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `AlignEndHorizontalIcon` instead.
 */
export const AlignEndHorizontal = AlignEndHorizontalIcon
