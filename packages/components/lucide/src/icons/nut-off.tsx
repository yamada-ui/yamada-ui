import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { NutOff as LucideNutOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `NutOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NutOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideNutOffIcon} {...props} />
))

/**
 * @deprecated Use `NutOffIcon` instead.
 */
export const NutOff = NutOffIcon
