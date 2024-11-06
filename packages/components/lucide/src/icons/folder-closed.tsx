import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderClosed as LucideFolderClosedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderClosedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderClosedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFolderClosedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FolderClosedIcon` instead.
 */
export const FolderClosed = FolderClosedIcon
