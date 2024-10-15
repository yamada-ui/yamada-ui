import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Drumstick as DrumstickIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Drumstick` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Drumstick = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DrumstickIcon} {...props} />
))
