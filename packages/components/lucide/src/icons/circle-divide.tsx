import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleDivide as LucideCircleDivideIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleDivideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleDivideIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleDivideIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleDivideIcon` instead.
 */
export const CircleDivide = CircleDivideIcon
