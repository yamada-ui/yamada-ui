import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SignalMedium as SignalMediumIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SignalMedium` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignalMedium = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SignalMediumIcon} {...props} />
))
