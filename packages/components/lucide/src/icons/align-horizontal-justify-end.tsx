import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalJustifyEnd as LucideAlignHorizontalJustifyEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignHorizontalJustifyEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalJustifyEndIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideAlignHorizontalJustifyEndIcon} {...props} />
  ),
)

/**
 * @deprecated Use `AlignHorizontalJustifyEndIcon` instead.
 */
export const AlignHorizontalJustifyEnd = AlignHorizontalJustifyEndIcon
