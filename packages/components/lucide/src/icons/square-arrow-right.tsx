import { forwardRef } from "@yamada-ui/core"
import { SquareArrowRight as SquareArrowRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareArrowRightProps = LucideIconProps

/**
 * `SquareArrowRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowRight = forwardRef<SquareArrowRightProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareArrowRightIcon} {...props} />,
)
