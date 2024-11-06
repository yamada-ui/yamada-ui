import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareDashedBottomCode as LucideSquareDashedBottomCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareDashedBottomCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDashedBottomCodeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareDashedBottomCodeIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareDashedBottomCodeIcon` instead.
 */
export const SquareDashedBottomCode = SquareDashedBottomCodeIcon
