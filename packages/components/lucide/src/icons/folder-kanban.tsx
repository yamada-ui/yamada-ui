import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderKanban as LucideFolderKanbanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderKanbanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderKanbanIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFolderKanbanIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FolderKanbanIcon` instead.
 */
export const FolderKanban = FolderKanbanIcon
