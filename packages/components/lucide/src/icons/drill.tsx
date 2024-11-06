import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Drill as LucideDrillIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DrillIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DrillIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDrillIcon} {...props} />
))

/**
 * @deprecated Use `DrillIcon` instead.
 */
export const Drill = DrillIcon
