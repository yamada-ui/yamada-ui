import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderX as LucideFolderXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFolderXIcon} {...props} />
))

/**
 * @deprecated Use `FolderXIcon` instead.
 */
export const FolderX = FolderXIcon
