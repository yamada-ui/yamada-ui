import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MouseOff as LucideMouseOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MouseOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MouseOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMouseOffIcon} {...props} />
))

/**
 * @deprecated Use `MouseOffIcon` instead.
 */
export const MouseOff = MouseOffIcon
