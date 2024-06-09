import { forwardRef } from "@yamada-ui/core"
import { FileType as FileTypeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileTypeProps = LucideIconProps

/**
 * `FileType` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileType = forwardRef<FileTypeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileTypeIcon} {...props} />
))
