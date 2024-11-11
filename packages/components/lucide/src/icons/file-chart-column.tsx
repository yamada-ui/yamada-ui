import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { FileChartColumn as OriginalFileChartColumn } from "lucide-react"

/**
 * `FileChartColumnIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileChartColumnIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalFileChartColumn} {...props} />,
)

/**
 * `FileChartColumn` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `FileChartColumnIcon` instead.
 */
export const FileChartColumn = FileChartColumnIcon
