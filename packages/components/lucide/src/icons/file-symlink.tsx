import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileSymlink as LucideFileSymlinkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileSymlinkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileSymlinkIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFileSymlinkIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FileSymlinkIcon` instead.
 */
export const FileSymlink = FileSymlinkIcon
