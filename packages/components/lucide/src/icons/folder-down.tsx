import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderDown as LucideFolderDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFolderDownIcon} {...props} />,
)

/**
 * @deprecated Use `FolderDownIcon` instead.
 */
export const FolderDown = FolderDownIcon
