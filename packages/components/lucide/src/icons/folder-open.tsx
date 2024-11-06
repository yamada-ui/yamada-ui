import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderOpen as LucideFolderOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderOpenIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFolderOpenIcon} {...props} />,
)

/**
 * @deprecated Use `FolderOpenIcon` instead.
 */
export const FolderOpen = FolderOpenIcon
