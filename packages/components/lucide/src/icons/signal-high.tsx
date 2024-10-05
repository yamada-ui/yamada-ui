import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SignalHigh as SignalHighIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SignalHigh` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignalHigh = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SignalHighIcon} {...props} />
))
