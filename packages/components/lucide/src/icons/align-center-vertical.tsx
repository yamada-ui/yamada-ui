import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignCenterVertical as LucideAlignCenterVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignCenterVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignCenterVerticalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideAlignCenterVerticalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `AlignCenterVerticalIcon` instead.
 */
export const AlignCenterVertical = AlignCenterVerticalIcon
