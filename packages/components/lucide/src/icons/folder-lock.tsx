import { forwardRef } from "@yamada-ui/core"
import { FolderLock as FolderLockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderLockProps = LucideIconProps

/**
 * `FolderLock` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderLock = forwardRef<FolderLockProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderLockIcon} {...props} />
))
