import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileJson as LucideFileJsonIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileJsonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileJsonIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFileJsonIcon} {...props} />
))

/**
 * @deprecated Use `FileJsonIcon` instead.
 */
export const FileJson = FileJsonIcon
