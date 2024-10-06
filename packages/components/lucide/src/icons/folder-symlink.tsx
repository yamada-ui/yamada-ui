import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderSymlink as FolderSymlinkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderSymlink` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderSymlink = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FolderSymlinkIcon} {...props} />,
)
