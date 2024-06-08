import { forwardRef } from "@yamada-ui/core"
import { FolderTree as FolderTreeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderTreeProps = LucideIconProps

/**
 * `FolderTree` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderTree = forwardRef<FolderTreeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderTreeIcon} {...props} />
))
