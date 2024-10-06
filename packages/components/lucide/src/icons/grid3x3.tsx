import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Grid3x3 as Grid3x3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Grid3x3` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Grid3x3 = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Grid3x3Icon} {...props} />
))
