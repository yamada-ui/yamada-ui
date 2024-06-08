import { forwardRef } from "@yamada-ui/core"
import { SquareBottomDashedScissors as SquareBottomDashedScissorsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareBottomDashedScissorsProps = LucideIconProps

/**
 * `SquareBottomDashedScissors` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareBottomDashedScissors = forwardRef<
  SquareBottomDashedScissorsProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={SquareBottomDashedScissorsIcon} {...props} />
))
