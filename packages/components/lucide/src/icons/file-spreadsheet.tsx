import { forwardRef } from "@yamada-ui/core"
import { FileSpreadsheet as FileSpreadsheetIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileSpreadsheetProps = LucideIconProps

/**
 * `FileSpreadsheet` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileSpreadsheet = forwardRef<FileSpreadsheetProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FileSpreadsheetIcon} {...props} />,
)
