import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileSymlink as FileSymlinkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileSymlink` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileSymlink = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileSymlinkIcon} {...props} />
))
