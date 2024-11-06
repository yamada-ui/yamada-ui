import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Signal as LucideSignalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SignalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignalIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSignalIcon} {...props} />
))

/**
 * @deprecated Use `SignalIcon` instead.
 */
export const Signal = SignalIcon
