import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderInput as LucideFolderInputIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderInputIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderInputIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFolderInputIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FolderInputIcon` instead.
 */
export const FolderInput = FolderInputIcon
