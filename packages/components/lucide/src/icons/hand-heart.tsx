import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HandHeart as LucideHandHeartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HandHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandHeartIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideHandHeartIcon} {...props} />,
)

/**
 * @deprecated Use `HandHeartIcon` instead.
 */
export const HandHeart = HandHeartIcon
