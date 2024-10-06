import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Vibrate as VibrateIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Vibrate` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Vibrate = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VibrateIcon} {...props} />
))
