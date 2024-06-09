import { forwardRef } from "@yamada-ui/core"
import { FileSymlink as FileSymlinkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileSymlinkProps = LucideIconProps

/**
 * `FileSymlink` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileSymlink = forwardRef<FileSymlinkProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileSymlinkIcon} {...props} />
))
