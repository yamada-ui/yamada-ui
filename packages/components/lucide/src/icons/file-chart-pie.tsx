import { forwardRef } from "@yamada-ui/core"
import { FileChartPie as FileChartPieIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileChartPieProps = LucideIconProps

/**
 * `FileChartPie` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileChartPie = forwardRef<FileChartPieProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FileChartPieIcon} {...props} />,
)
