import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderSymlink as LucideFolderSymlinkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderSymlinkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderSymlinkIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFolderSymlinkIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FolderSymlinkIcon` instead.
 */
export const FolderSymlink = FolderSymlinkIcon
