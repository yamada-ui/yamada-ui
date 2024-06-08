import { forwardRef } from "@yamada-ui/core"
import { ShieldMinus as ShieldMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShieldMinusProps = LucideIconProps

/**
 * `ShieldMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldMinus = forwardRef<ShieldMinusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShieldMinusIcon} {...props} />
))
