import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderGit2 as LucideFolderGit2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderGit2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderGit2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFolderGit2Icon} {...props} />,
)

/**
 * @deprecated Use `FolderGit2Icon` instead.
 */
export const FolderGit2 = FolderGit2Icon
