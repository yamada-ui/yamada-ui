import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SignalHigh as LucideSignalHighIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SignalHighIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignalHighIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSignalHighIcon} {...props} />,
)

/**
 * @deprecated Use `SignalHighIcon` instead.
 */
export const SignalHigh = SignalHighIcon
