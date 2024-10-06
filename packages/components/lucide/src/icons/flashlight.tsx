import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Flashlight as FlashlightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Flashlight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Flashlight = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FlashlightIcon} {...props} />
))
