import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareBottomDashedScissors as LucideSquareBottomDashedScissorsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareBottomDashedScissorsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareBottomDashedScissorsIcon = forwardRef<
  LucideIconProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={LucideSquareBottomDashedScissorsIcon} {...props} />
))

/**
 * @deprecated Use `SquareBottomDashedScissorsIcon` instead.
 */
export const SquareBottomDashedScissors = SquareBottomDashedScissorsIcon
