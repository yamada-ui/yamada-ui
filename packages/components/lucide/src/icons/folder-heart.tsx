import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderHeart as LucideFolderHeartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderHeartIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFolderHeartIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FolderHeartIcon` instead.
 */
export const FolderHeart = FolderHeartIcon
