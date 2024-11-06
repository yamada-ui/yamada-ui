import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HeartOff as LucideHeartOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HeartOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeartOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHeartOffIcon} {...props} />
))

/**
 * @deprecated Use `HeartOffIcon` instead.
 */
export const HeartOff = HeartOffIcon
