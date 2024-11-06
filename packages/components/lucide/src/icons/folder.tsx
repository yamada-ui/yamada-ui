import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Folder as LucideFolderIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFolderIcon} {...props} />
))

/**
 * @deprecated Use `FolderIcon` instead.
 */
export const Folder = FolderIcon
