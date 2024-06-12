import { forwardRef } from "@yamada-ui/core"
import { SquareArrowUp as SquareArrowUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareArrowUpProps = LucideIconProps

/**
 * `SquareArrowUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowUp = forwardRef<SquareArrowUpProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareArrowUpIcon} {...props} />,
)
