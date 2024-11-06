import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CirclePlay as LucideCirclePlayIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CirclePlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePlayIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCirclePlayIcon} {...props} />,
)

/**
 * @deprecated Use `CirclePlayIcon` instead.
 */
export const CirclePlay = CirclePlayIcon
