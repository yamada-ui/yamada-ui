import { forwardRef } from "@yamada-ui/core"
import { FileBarChart as FileBarChartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileBarChartProps = LucideIconProps

/**
 * `FileBarChart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileBarChart = forwardRef<FileBarChartProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FileBarChartIcon} {...props} />,
)
