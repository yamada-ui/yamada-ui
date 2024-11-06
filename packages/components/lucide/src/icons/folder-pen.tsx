import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderPen as LucideFolderPenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderPenIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFolderPenIcon} {...props} />,
)

/**
 * @deprecated Use `FolderPenIcon` instead.
 */
export const FolderPen = FolderPenIcon
