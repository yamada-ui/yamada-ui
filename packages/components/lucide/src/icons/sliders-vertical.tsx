import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SlidersVertical as LucideSlidersVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SlidersVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SlidersVerticalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSlidersVerticalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SlidersVerticalIcon` instead.
 */
export const SlidersVertical = SlidersVerticalIcon
