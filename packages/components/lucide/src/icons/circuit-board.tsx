import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircuitBoard as LucideCircuitBoardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircuitBoardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircuitBoardIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircuitBoardIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircuitBoardIcon` instead.
 */
export const CircuitBoard = CircuitBoardIcon
