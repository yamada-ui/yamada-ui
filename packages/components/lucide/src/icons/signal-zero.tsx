import { forwardRef } from "@yamada-ui/core"
import { SignalZero as SignalZeroIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SignalZeroProps = LucideIconProps

/**
 * `SignalZero` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignalZero = forwardRef<SignalZeroProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SignalZeroIcon} {...props} />
))
