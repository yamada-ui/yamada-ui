import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SwatchBook as SwatchBookIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SwatchBook` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SwatchBook = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SwatchBookIcon} {...props} />
))
