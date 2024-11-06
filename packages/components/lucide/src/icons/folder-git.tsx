import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderGit as LucideFolderGitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderGitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderGitIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFolderGitIcon} {...props} />,
)

/**
 * @deprecated Use `FolderGitIcon` instead.
 */
export const FolderGit = FolderGitIcon
