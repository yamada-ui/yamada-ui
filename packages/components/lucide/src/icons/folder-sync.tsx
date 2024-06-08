import { forwardRef } from "@yamada-ui/core"
import { FolderSync as FolderSyncIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderSyncProps = LucideIconProps

/**
 * `FolderSync` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderSync = forwardRef<FolderSyncProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderSyncIcon} {...props} />
))
