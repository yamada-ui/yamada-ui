import { forwardRef } from "@yamada-ui/core"
import { SignalLow as SignalLowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SignalLowProps = LucideIconProps

/**
 * `SignalLow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignalLow = forwardRef<SignalLowProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SignalLowIcon} {...props} />
))
