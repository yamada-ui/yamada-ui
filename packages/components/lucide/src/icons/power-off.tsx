import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PowerOff as LucidePowerOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PowerOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PowerOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePowerOffIcon} {...props} />
))

/**
 * @deprecated Use `PowerOffIcon` instead.
 */
export const PowerOff = PowerOffIcon
