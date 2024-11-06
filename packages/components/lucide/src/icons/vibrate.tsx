import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Vibrate as LucideVibrateIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `VibrateIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VibrateIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideVibrateIcon} {...props} />
))

/**
 * @deprecated Use `VibrateIcon` instead.
 */
export const Vibrate = VibrateIcon
