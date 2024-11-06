import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignStartHorizontal as LucideAlignStartHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignStartHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignStartHorizontalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideAlignStartHorizontalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `AlignStartHorizontalIcon` instead.
 */
export const AlignStartHorizontal = AlignStartHorizontalIcon
