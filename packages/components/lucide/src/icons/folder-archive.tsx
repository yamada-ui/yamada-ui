import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderArchive as LucideFolderArchiveIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderArchiveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderArchiveIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFolderArchiveIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FolderArchiveIcon` instead.
 */
export const FolderArchive = FolderArchiveIcon
