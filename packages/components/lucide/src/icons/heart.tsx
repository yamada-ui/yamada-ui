import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Heart as LucideHeartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeartIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHeartIcon} {...props} />
))

/**
 * @deprecated Use `HeartIcon` instead.
 */
export const Heart = HeartIcon
