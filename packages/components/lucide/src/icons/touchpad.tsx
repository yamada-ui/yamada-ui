import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Touchpad as LucideTouchpadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TouchpadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TouchpadIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTouchpadIcon} {...props} />
))

/**
 * @deprecated Use `TouchpadIcon` instead.
 */
export const Touchpad = TouchpadIcon
