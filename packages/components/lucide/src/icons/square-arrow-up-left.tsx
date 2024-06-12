import { forwardRef } from "@yamada-ui/core"
import { SquareArrowUpLeft as SquareArrowUpLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareArrowUpLeftProps = LucideIconProps

/**
 * `SquareArrowUpLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowUpLeft = forwardRef<SquareArrowUpLeftProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={SquareArrowUpLeftIcon} {...props} />
  ),
)
