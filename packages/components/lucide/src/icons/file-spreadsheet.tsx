import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileSpreadsheet as LucideFileSpreadsheetIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileSpreadsheetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileSpreadsheetIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFileSpreadsheetIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FileSpreadsheetIcon` instead.
 */
export const FileSpreadsheet = FileSpreadsheetIcon
