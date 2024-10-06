import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Diamond as DiamondIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Diamond` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Diamond = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DiamondIcon} {...props} />
))
