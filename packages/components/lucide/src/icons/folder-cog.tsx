import { forwardRef } from "@yamada-ui/core"
import { FolderCog as FolderCogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderCogProps = LucideIconProps

/**
 * `FolderCog` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderCog = forwardRef<FolderCogProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderCogIcon} {...props} />
))
