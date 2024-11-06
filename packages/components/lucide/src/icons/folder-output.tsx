import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderOutput as LucideFolderOutputIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderOutputIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderOutputIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFolderOutputIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FolderOutputIcon` instead.
 */
export const FolderOutput = FolderOutputIcon
