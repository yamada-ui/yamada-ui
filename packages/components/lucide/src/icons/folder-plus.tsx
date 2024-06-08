import { forwardRef } from "@yamada-ui/core"
import { FolderPlus as FolderPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderPlusProps = LucideIconProps

/**
 * `FolderPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderPlus = forwardRef<FolderPlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderPlusIcon} {...props} />
))
