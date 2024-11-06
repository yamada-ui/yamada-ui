import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Power as LucidePowerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PowerIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePowerIcon} {...props} />
))

/**
 * @deprecated Use `PowerIcon` instead.
 */
export const Power = PowerIcon
