import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareActivity as LucideSquareActivityIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareActivityIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareActivityIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareActivityIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareActivityIcon` instead.
 */
export const SquareActivity = SquareActivityIcon
