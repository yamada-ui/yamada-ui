import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { EqualNot as LucideEqualNotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EqualNotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EqualNotIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideEqualNotIcon} {...props} />
))

/**
 * @deprecated Use `EqualNotIcon` instead.
 */
export const EqualNot = EqualNotIcon
