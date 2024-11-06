import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareSplitVertical as LucideSquareSplitVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareSplitVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareSplitVerticalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareSplitVerticalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareSplitVerticalIcon` instead.
 */
export const SquareSplitVertical = SquareSplitVerticalIcon
