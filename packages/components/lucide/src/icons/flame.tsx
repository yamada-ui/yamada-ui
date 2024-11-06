import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Flame as LucideFlameIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlameIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlameIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFlameIcon} {...props} />
))

/**
 * @deprecated Use `FlameIcon` instead.
 */
export const Flame = FlameIcon
