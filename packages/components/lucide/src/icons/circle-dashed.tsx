import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleDashed as LucideCircleDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleDashedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleDashedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleDashedIcon` instead.
 */
export const CircleDashed = CircleDashedIcon
