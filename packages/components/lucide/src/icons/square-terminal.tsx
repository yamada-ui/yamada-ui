import { forwardRef } from "@yamada-ui/core"
import { SquareTerminal as SquareTerminalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareTerminalProps = LucideIconProps

/**
 * `SquareTerminal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareTerminal = forwardRef<SquareTerminalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareTerminalIcon} {...props} />,
)
