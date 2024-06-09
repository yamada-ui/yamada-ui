import { forwardRef } from "@yamada-ui/core"
import { SquareArrowDownLeft as SquareArrowDownLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareArrowDownLeftProps = LucideIconProps

/**
 * `SquareArrowDownLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowDownLeft = forwardRef<SquareArrowDownLeftProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={SquareArrowDownLeftIcon} {...props} />
  ),
)
