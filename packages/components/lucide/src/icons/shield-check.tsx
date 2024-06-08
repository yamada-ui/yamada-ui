import { forwardRef } from "@yamada-ui/core"
import { ShieldCheck as ShieldCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShieldCheckProps = LucideIconProps

/**
 * `ShieldCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldCheck = forwardRef<ShieldCheckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShieldCheckIcon} {...props} />
))
