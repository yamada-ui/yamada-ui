import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileX as LucideFileXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFileXIcon} {...props} />
))

/**
 * @deprecated Use `FileXIcon` instead.
 */
export const FileX = FileXIcon
