import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignEndVertical as LucideAlignEndVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignEndVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignEndVerticalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideAlignEndVerticalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `AlignEndVerticalIcon` instead.
 */
export const AlignEndVertical = AlignEndVerticalIcon
