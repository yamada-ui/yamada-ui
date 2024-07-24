import { forwardRef } from "@yamada-ui/core"
import { ChartColumn as ChartColumnIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChartColumnProps = LucideIconProps

/**
 * `ChartColumn` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumn = forwardRef<ChartColumnProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ChartColumnIcon} {...props} />
))
