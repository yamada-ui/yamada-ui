import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderRoot as LucideFolderRootIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderRootIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderRootIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFolderRootIcon} {...props} />,
)

/**
 * @deprecated Use `FolderRootIcon` instead.
 */
export const FolderRoot = FolderRootIcon
