import { forwardRef } from "@yamada-ui/core"
import { ShieldBan as ShieldBanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShieldBanProps = LucideIconProps

/**
 * `ShieldBan` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldBan = forwardRef<ShieldBanProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShieldBanIcon} {...props} />
))
