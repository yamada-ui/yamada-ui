import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderCheck as LucideFolderCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFolderCheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FolderCheckIcon` instead.
 */
export const FolderCheck = FolderCheckIcon
