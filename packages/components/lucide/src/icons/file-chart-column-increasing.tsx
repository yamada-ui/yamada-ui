import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileChartColumnIncreasing as LucideFileChartColumnIncreasingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileChartColumnIncreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileChartColumnIncreasingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFileChartColumnIncreasingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FileChartColumnIncreasingIcon` instead.
 */
export const FileChartColumnIncreasing = FileChartColumnIncreasingIcon
