import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SignalLow as LucideSignalLowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SignalLowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignalLowIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSignalLowIcon} {...props} />,
)

/**
 * @deprecated Use `SignalLowIcon` instead.
 */
export const SignalLow = SignalLowIcon
