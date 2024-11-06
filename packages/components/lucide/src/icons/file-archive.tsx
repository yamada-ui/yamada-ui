import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileArchive as LucideFileArchiveIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileArchiveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileArchiveIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFileArchiveIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FileArchiveIcon` instead.
 */
export const FileArchive = FileArchiveIcon
