import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Headset as HeadsetIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Headset` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Headset = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HeadsetIcon} {...props} />
))
