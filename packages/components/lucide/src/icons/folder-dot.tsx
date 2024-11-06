import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderDot as LucideFolderDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderDotIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFolderDotIcon} {...props} />,
)

/**
 * @deprecated Use `FolderDotIcon` instead.
 */
export const FolderDot = FolderDotIcon
