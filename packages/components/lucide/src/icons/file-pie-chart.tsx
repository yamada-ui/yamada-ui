import { forwardRef } from "@yamada-ui/core"
import { FilePieChart as FilePieChartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FilePieChartProps = LucideIconProps

/**
 * `FilePieChart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilePieChart = forwardRef<FilePieChartProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FilePieChartIcon} {...props} />,
)
