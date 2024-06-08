import { forwardRef } from "@yamada-ui/core"
import { FileArchive as FileArchiveIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileArchiveProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileArchive = forwardRef<FileArchiveProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileArchiveIcon} {...props} />
))
