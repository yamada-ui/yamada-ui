import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderUp as LucideFolderUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderUpIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFolderUpIcon} {...props} />
))

/**
 * @deprecated Use `FolderUpIcon` instead.
 */
export const FolderUp = FolderUpIcon
