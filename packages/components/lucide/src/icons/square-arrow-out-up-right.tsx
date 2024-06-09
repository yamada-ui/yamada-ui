import { forwardRef } from "@yamada-ui/core"
import { SquareArrowOutUpRight as SquareArrowOutUpRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareArrowOutUpRightProps = LucideIconProps

/**
 * `SquareArrowOutUpRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowOutUpRight = forwardRef<
  SquareArrowOutUpRightProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={SquareArrowOutUpRightIcon} {...props} />
))
