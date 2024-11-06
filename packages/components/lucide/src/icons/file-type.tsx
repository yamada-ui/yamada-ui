import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileType as LucideFileTypeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileTypeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileTypeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFileTypeIcon} {...props} />
))

/**
 * @deprecated Use `FileTypeIcon` instead.
 */
export const FileType = FileTypeIcon
