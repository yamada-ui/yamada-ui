import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderKey as LucideFolderKeyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderKeyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderKeyIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFolderKeyIcon} {...props} />,
)

/**
 * @deprecated Use `FolderKeyIcon` instead.
 */
export const FolderKey = FolderKeyIcon
