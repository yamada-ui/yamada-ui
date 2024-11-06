import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderTree as LucideFolderTreeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderTreeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderTreeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFolderTreeIcon} {...props} />,
)

/**
 * @deprecated Use `FolderTreeIcon` instead.
 */
export const FolderTree = FolderTreeIcon
