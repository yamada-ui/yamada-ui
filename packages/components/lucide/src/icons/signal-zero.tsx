import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SignalZero as SignalZeroIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SignalZero` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignalZero = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SignalZeroIcon} {...props} />
))
