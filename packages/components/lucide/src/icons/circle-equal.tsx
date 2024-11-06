import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleEqual as LucideCircleEqualIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleEqualIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleEqualIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleEqualIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleEqualIcon` instead.
 */
export const CircleEqual = CircleEqualIcon
