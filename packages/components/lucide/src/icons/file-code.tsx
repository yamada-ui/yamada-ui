import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileCode as LucideFileCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileCodeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFileCodeIcon} {...props} />
))

/**
 * @deprecated Use `FileCodeIcon` instead.
 */
export const FileCode = FileCodeIcon
