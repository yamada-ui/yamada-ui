import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgeDollarSign as LucideBadgeDollarSignIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeDollarSignIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeDollarSignIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBadgeDollarSignIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BadgeDollarSignIcon` instead.
 */
export const BadgeDollarSign = BadgeDollarSignIcon
