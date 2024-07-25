import { forwardRef } from "@yamada-ui/core"
import { ChartLine as ChartLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChartLineProps = LucideIconProps

/**
 * `ChartLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartLine = forwardRef<ChartLineProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ChartLineIcon} {...props} />
))
