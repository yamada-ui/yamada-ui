import { forwardRef } from "@yamada-ui/core"
import { FolderOpen as FolderOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderOpenProps = LucideIconProps

/**
 * `FolderOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderOpen = forwardRef<FolderOpenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderOpenIcon} {...props} />
))
