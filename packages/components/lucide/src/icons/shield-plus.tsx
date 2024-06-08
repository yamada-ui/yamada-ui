import { forwardRef } from "@yamada-ui/core"
import { ShieldPlus as ShieldPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShieldPlusProps = LucideIconProps

/**
 * `ShieldPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldPlus = forwardRef<ShieldPlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShieldPlusIcon} {...props} />
))
