import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareUserRound as LucideSquareUserRoundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareUserRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareUserRoundIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareUserRoundIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareUserRoundIcon` instead.
 */
export const SquareUserRound = SquareUserRoundIcon
