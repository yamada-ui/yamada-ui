import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ScissorsLineDashed as LucideScissorsLineDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScissorsLineDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScissorsLineDashedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideScissorsLineDashedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ScissorsLineDashedIcon` instead.
 */
export const ScissorsLineDashed = ScissorsLineDashedIcon
