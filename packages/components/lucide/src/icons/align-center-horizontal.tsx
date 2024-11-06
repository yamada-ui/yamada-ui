import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignCenterHorizontal as LucideAlignCenterHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignCenterHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignCenterHorizontalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideAlignCenterHorizontalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `AlignCenterHorizontalIcon` instead.
 */
export const AlignCenterHorizontal = AlignCenterHorizontalIcon
