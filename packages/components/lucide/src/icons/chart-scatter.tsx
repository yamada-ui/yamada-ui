import { forwardRef } from "@yamada-ui/core"
import { ChartScatter as ChartScatterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChartScatterProps = LucideIconProps

/**
 * `ChartScatter` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartScatter = forwardRef<ChartScatterProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ChartScatterIcon} {...props} />,
)
