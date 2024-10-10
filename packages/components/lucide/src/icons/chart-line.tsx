import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartLine as ChartLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartLine = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ChartLineIcon} {...props} />
))
