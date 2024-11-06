import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderCog as LucideFolderCogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderCogIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFolderCogIcon} {...props} />,
)

/**
 * @deprecated Use `FolderCogIcon` instead.
 */
export const FolderCog = FolderCogIcon
