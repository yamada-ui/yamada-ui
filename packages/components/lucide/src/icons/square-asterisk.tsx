import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareAsterisk as LucideSquareAsteriskIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareAsteriskIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareAsteriskIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareAsteriskIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareAsteriskIcon` instead.
 */
export const SquareAsterisk = SquareAsteriskIcon
