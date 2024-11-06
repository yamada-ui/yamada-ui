import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileDown as LucideFileDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileDownIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFileDownIcon} {...props} />
))

/**
 * @deprecated Use `FileDownIcon` instead.
 */
export const FileDown = FileDownIcon
