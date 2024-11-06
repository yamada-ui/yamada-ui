import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Nut as LucideNutIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `NutIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NutIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideNutIcon} {...props} />
))

/**
 * @deprecated Use `NutIcon` instead.
 */
export const Nut = NutIcon
