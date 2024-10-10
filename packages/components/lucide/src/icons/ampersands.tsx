import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Ampersands as AmpersandsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Ampersands` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Ampersands = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AmpersandsIcon} {...props} />
))
