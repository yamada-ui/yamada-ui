import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignVerticalSpaceAround as LucideAlignVerticalSpaceAroundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignVerticalSpaceAroundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalSpaceAroundIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideAlignVerticalSpaceAroundIcon} {...props} />
  ),
)

/**
 * @deprecated Use `AlignVerticalSpaceAroundIcon` instead.
 */
export const AlignVerticalSpaceAround = AlignVerticalSpaceAroundIcon
