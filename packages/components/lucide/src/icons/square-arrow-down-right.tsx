import { forwardRef } from "@yamada-ui/core"
import { SquareArrowDownRight as SquareArrowDownRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareArrowDownRightProps = LucideIconProps

/**
 * `SquareArrowDownRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowDownRight = forwardRef<
  SquareArrowDownRightProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={SquareArrowDownRightIcon} {...props} />
))
