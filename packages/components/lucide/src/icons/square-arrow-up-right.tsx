import { forwardRef } from "@yamada-ui/core"
import { SquareArrowUpRight as SquareArrowUpRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareArrowUpRightProps = LucideIconProps

/**
 * `SquareArrowUpRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowUpRight = forwardRef<SquareArrowUpRightProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={SquareArrowUpRightIcon} {...props} />
  ),
)
