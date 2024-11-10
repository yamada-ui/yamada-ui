import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { FileSpreadsheet as OriginalFileSpreadsheet } from "lucide-react"

/**
 * `FileSpreadsheetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileSpreadsheetIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalFileSpreadsheet} {...props} />,
)

/**
 * `FileSpreadsheet` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `FileSpreadsheetIcon` instead.
 */
export const FileSpreadsheet = FileSpreadsheetIcon
