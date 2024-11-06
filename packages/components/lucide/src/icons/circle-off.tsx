import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleOff as LucideCircleOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCircleOffIcon} {...props} />,
)

/**
 * @deprecated Use `CircleOffIcon` instead.
 */
export const CircleOff = CircleOffIcon
