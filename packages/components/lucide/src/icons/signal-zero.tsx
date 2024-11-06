import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SignalZero as LucideSignalZeroIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SignalZeroIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignalZeroIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSignalZeroIcon} {...props} />,
)

/**
 * @deprecated Use `SignalZeroIcon` instead.
 */
export const SignalZero = SignalZeroIcon
