import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderMinus as LucideFolderMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFolderMinusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FolderMinusIcon` instead.
 */
export const FolderMinus = FolderMinusIcon
