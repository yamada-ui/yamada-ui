import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SignalMedium as LucideSignalMediumIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SignalMediumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignalMediumIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSignalMediumIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SignalMediumIcon` instead.
 */
export const SignalMedium = SignalMediumIcon
