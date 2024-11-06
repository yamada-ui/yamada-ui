import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareTerminal as LucideSquareTerminalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareTerminalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareTerminalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareTerminalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareTerminalIcon` instead.
 */
export const SquareTerminal = SquareTerminalIcon
