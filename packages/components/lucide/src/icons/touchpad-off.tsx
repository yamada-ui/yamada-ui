import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TouchpadOff as LucideTouchpadOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TouchpadOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TouchpadOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTouchpadOffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TouchpadOffIcon` instead.
 */
export const TouchpadOff = TouchpadOffIcon
