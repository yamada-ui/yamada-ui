import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderPlus as LucideFolderPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderPlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFolderPlusIcon} {...props} />,
)

/**
 * @deprecated Use `FolderPlusIcon` instead.
 */
export const FolderPlus = FolderPlusIcon
