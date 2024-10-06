import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Nut as NutIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Nut` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Nut = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={NutIcon} {...props} />
))
