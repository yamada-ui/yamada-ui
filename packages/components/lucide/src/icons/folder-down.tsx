import { forwardRef } from "@yamada-ui/core"
import { FolderDown as FolderDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderDownProps = LucideIconProps

/**
 * `FolderDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderDown = forwardRef<FolderDownProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderDownIcon} {...props} />
))
