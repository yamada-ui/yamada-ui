import { forwardRef } from "@yamada-ui/core"
import { ShieldX as ShieldXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShieldXProps = LucideIconProps

/**
 * `ShieldX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldX = forwardRef<ShieldXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShieldXIcon} {...props} />
))
