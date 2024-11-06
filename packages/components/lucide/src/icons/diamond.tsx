import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Diamond as LucideDiamondIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DiamondIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DiamondIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDiamondIcon} {...props} />
))

/**
 * @deprecated Use `DiamondIcon` instead.
 */
export const Diamond = DiamondIcon
