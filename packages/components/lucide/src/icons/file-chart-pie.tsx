import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileChartPie as LucideFileChartPieIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileChartPieIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileChartPieIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFileChartPieIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FileChartPieIcon` instead.
 */
export const FileChartPie = FileChartPieIcon
