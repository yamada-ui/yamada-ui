import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderSearch as LucideFolderSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderSearchIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFolderSearchIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FolderSearchIcon` instead.
 */
export const FolderSearch = FolderSearchIcon
