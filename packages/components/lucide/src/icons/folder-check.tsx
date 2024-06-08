import { forwardRef } from "@yamada-ui/core"
import { FolderCheck as FolderCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderCheckProps = LucideIconProps

/**
 * `FolderCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderCheck = forwardRef<FolderCheckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderCheckIcon} {...props} />
))
