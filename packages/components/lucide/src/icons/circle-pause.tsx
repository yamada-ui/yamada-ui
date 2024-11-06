import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CirclePause as LucideCirclePauseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CirclePauseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePauseIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCirclePauseIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CirclePauseIcon` instead.
 */
export const CirclePause = CirclePauseIcon
