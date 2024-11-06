import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderOpenDot as LucideFolderOpenDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderOpenDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderOpenDotIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFolderOpenDotIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FolderOpenDotIcon` instead.
 */
export const FolderOpenDot = FolderOpenDotIcon
