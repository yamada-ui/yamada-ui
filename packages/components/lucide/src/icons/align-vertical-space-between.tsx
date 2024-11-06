import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignVerticalSpaceBetween as LucideAlignVerticalSpaceBetweenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignVerticalSpaceBetweenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalSpaceBetweenIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideAlignVerticalSpaceBetweenIcon} {...props} />
  ),
)

/**
 * @deprecated Use `AlignVerticalSpaceBetweenIcon` instead.
 */
export const AlignVerticalSpaceBetween = AlignVerticalSpaceBetweenIcon
