import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PaintRoller as PaintRollerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PaintRoller` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PaintRoller = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PaintRollerIcon} {...props} />
))
