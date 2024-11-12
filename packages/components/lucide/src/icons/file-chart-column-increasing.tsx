import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { FileChartColumnIncreasing as OriginalFileChartColumnIncreasing } from "lucide-react"

/**
 * `FileChartColumnIncreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileChartColumnIncreasingIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalFileChartColumnIncreasing} {...props} />
  ),
)

/**
 * `FileChartColumnIncreasing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `FileChartColumnIncreasingIcon` instead.
 */
export const FileChartColumnIncreasing = FileChartColumnIncreasingIcon
