import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Dam as LucideDamIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DamIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DamIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDamIcon} {...props} />
))

/**
 * @deprecated Use `DamIcon` instead.
 */
export const Dam = DamIcon
