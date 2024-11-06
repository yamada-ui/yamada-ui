import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileChartColumn as LucideFileChartColumnIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileChartColumnIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileChartColumnIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFileChartColumnIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FileChartColumnIcon` instead.
 */
export const FileChartColumn = FileChartColumnIcon
