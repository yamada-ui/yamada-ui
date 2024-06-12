import { forwardRef } from "@yamada-ui/core"
import { FileLineChart as FileLineChartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileLineChartProps = LucideIconProps

/**
 * `FileLineChart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileLineChart = forwardRef<FileLineChartProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FileLineChartIcon} {...props} />,
)
