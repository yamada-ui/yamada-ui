import { forwardRef } from "@yamada-ui/core"
import { ShieldHalf as ShieldHalfIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShieldHalfProps = LucideIconProps

/**
 * `ShieldHalf` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldHalf = forwardRef<ShieldHalfProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShieldHalfIcon} {...props} />
))
