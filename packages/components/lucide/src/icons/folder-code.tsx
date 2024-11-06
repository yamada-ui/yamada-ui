import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderCode as LucideFolderCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderCodeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFolderCodeIcon} {...props} />,
)

/**
 * @deprecated Use `FolderCodeIcon` instead.
 */
export const FolderCode = FolderCodeIcon
