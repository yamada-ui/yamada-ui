import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileText as LucideFileTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileTextIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFileTextIcon} {...props} />
))

/**
 * @deprecated Use `FileTextIcon` instead.
 */
export const FileText = FileTextIcon
