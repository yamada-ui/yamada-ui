import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileKey as LucideFileKeyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileKeyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileKeyIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFileKeyIcon} {...props} />
))

/**
 * @deprecated Use `FileKeyIcon` instead.
 */
export const FileKey = FileKeyIcon
