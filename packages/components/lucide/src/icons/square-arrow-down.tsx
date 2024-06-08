import { forwardRef } from "@yamada-ui/core"
import { SquareArrowDown as SquareArrowDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareArrowDownProps = LucideIconProps

/**
 * `SquareArrowDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowDown = forwardRef<SquareArrowDownProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareArrowDownIcon} {...props} />,
)
