import { forwardRef } from "@yamada-ui/core"
import { FolderSymlink as FolderSymlinkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderSymlinkProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderSymlink = forwardRef<FolderSymlinkProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FolderSymlinkIcon} {...props} />,
)
