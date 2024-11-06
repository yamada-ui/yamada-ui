import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignVerticalJustifyEnd as LucideAlignVerticalJustifyEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignVerticalJustifyEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalJustifyEndIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideAlignVerticalJustifyEndIcon} {...props} />
  ),
)

/**
 * @deprecated Use `AlignVerticalJustifyEndIcon` instead.
 */
export const AlignVerticalJustifyEnd = AlignVerticalJustifyEndIcon
